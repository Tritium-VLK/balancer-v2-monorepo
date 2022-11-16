import hre, { ethers } from 'hardhat';
import { Contract, BigNumber, utils } from 'ethers';

import { bn, fp } from '@balancer-labs/v2-helpers/src/numbers';
import { expectEqualWithError } from '@balancer-labs/v2-helpers/src/test/relativeError';
import { MerkleTree } from '@balancer-labs/v2-distributors/lib/merkleTree';
import { deploy } from '@balancer-labs/v2-helpers/src/contract';

import { MAX_UINT256 } from '@balancer-labs/v2-helpers/src/constants';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

import { describeForkTest, getSigner, impersonate, getForkedNetwork, Task, TaskMode } from '../../../../src';

function encodeElement(address: string, balance: BigNumber): string {
  return ethers.utils.solidityKeccak256(['address', 'uint'], [address, balance]);
}

describeForkTest('MerkleRedeem', 'arbitrum', 846769, function () {
  let lp: SignerWithAddress, other: SignerWithAddress, whale: SignerWithAddress;
  let distributor: Contract, token: Contract;

  let task: Task;

  const BAL_TOKEN_ADDRESS = '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8'; // BAL on arbitrum
  const BAL_WHALE_ADDRESS = '0x056d433ad1eafcab3c4544bf4f98b9f40b1b1738';

  before('run task', async () => {
    task = new Task('20210913-bal-arbitrum-merkle', TaskMode.TEST, getForkedNetwork(hre));
    await task.run({ force: true });
    distributor = await task.instanceAt('MerkleRedeem', task.output().MerkleRedeem);
  });

  before('load signers and transfer ownership', async () => {
    lp = await getSigner(2);
    other = await getSigner(3);
    whale = await impersonate(BAL_WHALE_ADDRESS, fp(100));
    token = await task.instanceAt('IERC20', BAL_TOKEN_ADDRESS);

    await distributor.transferOwnership(whale.address);
    await token.connect(whale).approve(distributor.address, MAX_UINT256);
  });

  describe('with an allocation defined', async () => {
    let root: string;
    let proof: string[];

    before(() => {
      const elements: string[] = [encodeElement(lp.address, fp(66)), encodeElement(other.address, fp(34))];

      const merkleTree = new MerkleTree(elements);
      root = merkleTree.getHexRoot();

      proof = merkleTree.getHexProof(elements[0]);
    });

    it('can seed an allocation', async () => {
      await distributor.connect(whale).seedAllocations(bn(0), root, fp(100));

      const expectedReward = fp(100);
      expectEqualWithError(await token.balanceOf(distributor.address), expectedReward, fp(1));
    });

    it('can claim a reward', async () => {
      await distributor.connect(whale).seedAllocations(bn(1), root, fp(100));

      await distributor.connect(lp).claimWeek(lp.address, bn(1), fp(66), proof);
      expectEqualWithError(await token.balanceOf(lp.address), fp(66), fp(1));
    });

    it('can claim a reward to a callback', async () => {
      await distributor.connect(whale).seedAllocations(bn(2), root, fp(100));

      const calldata = utils.defaultAbiCoder.encode([], []);
      const callbackContract = await deploy('v2-distributors/MockRewardCallback', { args: [] });

      const claims = [{ week: bn(2), balance: fp(66), merkleProof: proof }];

      await distributor.connect(lp).claimWeeksWithCallback(lp.address, callbackContract.address, calldata, claims);
      expectEqualWithError(await token.balanceOf(callbackContract.address), fp(66), fp(1));
    });
  });
});
