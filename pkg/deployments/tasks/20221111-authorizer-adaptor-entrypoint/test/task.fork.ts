import hre from 'hardhat';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { describeForkTest } from '../../../src/forkTests';
import Task, { TaskMode } from '../../../src/task';
import { getForkedNetwork } from '../../../src/test';

// Deployment smoke test; `performAction` requires a new version of the authorizer that is aware of the entrypoint.
describeForkTest('AuthorizerAdaptorEntrypoint', 'mainnet', 15925800, function () {
  let adaptorEntrypoint: Contract, vault: Contract, authorizerAdaptor: Contract, authorizer: Contract;

  let task: Task;

  before('run task', async () => {
    task = new Task('20221111-authorizer-adaptor-entrypoint', TaskMode.TEST, getForkedNetwork(hre));
    await task.run({ force: true });
    adaptorEntrypoint = await task.deployedInstance('AuthorizerAdaptorEntrypoint');
  });

  before('setup contracts', async () => {
    vault = await new Task('20210418-vault', TaskMode.READ_ONLY, getForkedNetwork(hre)).deployedInstance('Vault');
    authorizer = await new Task('20210418-authorizer', TaskMode.READ_ONLY, getForkedNetwork(hre)).deployedInstance(
      'Authorizer'
    );
    authorizerAdaptor = await new Task(
      '20220325-authorizer-adaptor',
      TaskMode.READ_ONLY,
      getForkedNetwork(hre)
    ).deployedInstance('AuthorizerAdaptor');
  });

  describe('constructor', () => {
    it('checks vault address', async () => {
      const entrypointVault = await adaptorEntrypoint.getVault();
      expect(entrypointVault).to.equal(vault.address);
    });

    it('checks authorizer address', async () => {
      const entrypointAuthorizer = await adaptorEntrypoint.getAuthorizer();
      expect(entrypointAuthorizer).to.equal(authorizer.address);
    });

    it('checks authorizer adaptor address', async () => {
      const entrypointAuthorizerAdaptor = await adaptorEntrypoint.getAuthorizerAdaptor();
      expect(entrypointAuthorizerAdaptor).to.equal(authorizerAdaptor.address);
    });
  });
});