import { Network } from './types';

const CONTRACT_DEPLOYMENT_TRANSACTION_HASHES: Partial<Record<Network, Record<string, string>>> = {
  mainnet: {
    // Authorizer
    '0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6': '0x3a5218c06f36fed9c4965c75215e87423280317b757d65ef117f4ed69003396a',
    // Vault
    '0xBA12222222228d8Ba445958a75a0704d566BF2C8': '0x28c44bb10d469cbd42accf97bd00b73eabbace138e9d44593e851231fbed1cb7',
    // BalancerHelpers
    '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E': '0xe15a5392004f685dd4158ec2ab1cca8d8e5f88403d860cd67bda2f9d0174792d',
    // WeightedPoolFactory
    '0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9': '0x0f9bb3624c185b4e107eaf9176170d2dc9cb1c48d0f070ed18416864b3202792',
    // WeightedPool2TokensFactory
    '0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0': '0xf40c05058422d730b7035c254f8b765722935a5d3003ac37b13a61860adbaf08',
    // StablePoolFactory
    '0xc66Ba2B6595D3613CCab350C886aCE23866EDe24': '0xfd417511f3902a304cca51023e8e771de22ffa7f30b9c8650ec5757328ab89a6',
    // LiquidityBootstrappingPoolFactory
    '0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE': '0x665ac1c7c5290d70154d9dfc1d91dc2562b143aaa9e8a77aa13e7053e4fe9b7c',
    // QueryProcessor
    '0x469b58680774AAc9Ad66447eFB4EF634756A2cC5': '0xa92ef420fff995b2301a726263915ea36b8a6fedd1d846e4f14ad83cc91dbc13',
    // MetaStablePoolFactory
    '0x67d27634E44793fE63c467035E31ea8635117cd4': '0xa2853807340e33ffa078cf0d10c3a2cca64eab9580301dbc1e377d8c89bb85b6',
    // LDO MerkleRedeem
    '0x884226c9f7b7205f607922E0431419276a64CF8f': '0xabf1b308e42ca2278d02ff8926ca370de063f8b57fe39d34314a7dff5cd665ea',
    // LidoRelayer
    '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965': '0xec051c846a6304a3b54d749d66528c14a419cde7ca121fc19cc77ed329cb4d16',
    // WstETHRateProvider
    '0x72D07D7DcA67b8A406aD1Ec34ce969c90bFEE768': '0xafc4be6dbb487ed0ccceff4cc8861238dcefc1345113eadad241d8db259e2dba',
    // InvestmentPoolFactory
    '0x48767F9F868a4A7b86A90736632F6E44C2df7fa9': '0xc7e6346bbb2d42232f4cc9bd8fcdbd683280980105bf185252d598a89054aff7',
    // MerkleOrchard
    '0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca': '0x7e9e1fa17eff872c9851ed2982ff3080d37e67f2bddf04edbe5cff4c742cf8a6',
    // NoProtocolFeeLiquidityBootstrappingPoolFactory
    '0x0F3e0c4218b7b0108a3643cFe9D3ec0d4F57c54e': '0x298381e567ff6643d9b32e8e7e9ff0f04a80929dce3e004f6fa1a0104b2b69c3',
    // BatchRelayerLibrary
    '0x41B953164995c11C81DA73D212ED8Af25741b7Ac': '0x29c6eaa234ddeaefc409f2320b754024be5391b979b0b17f4a83c92e3e25eb91',
    // BalancerRelayer
    '0xAc9f49eF3ab0BbC929f7b1bb0A17E1Fca5786251': '0x29c6eaa234ddeaefc409f2320b754024be5391b979b0b17f4a83c92e3e25eb91',
    // AaveLinearPoolFactory
    '0xD7FAD3bd59D6477cbe1BE7f646F7f1BA25b230f8': '0xfcbfecc2d7c2451697886d851c98ff56e209a89e166d1695679dd8a20d2c6a43',
    // StablePhantomPoolFactory
    '0xb08E16cFc07C684dAA2f93C70323BAdb2A6CBFd2': '0xa471b8caf95fe5973d4f44add6a91f256256df40a9a9edfb0334fbf6e9b8667e',
    // AuthorizerAdaptor
    '0x8F42aDBbA1B16EaAE3BB5754915E0D06059aDd75': '0x7ec850d8e902502b3cb858ece419676b6cbbd60f83c60bfb41b382966722e3da',
    // BALTokenHolderFactory
    '0xB848f50141F3D4255b37aC288C25C109104F2158': '0x607f7a2bed19231fc091a7eb700c2c9147ddc8c70b9772b1760241be8a7f4923',
    // BalancerTokenAdmin
    '0xf302f9F50958c5593770FDf4d4812309fF77414f': '0x047203586713d67546164610f02639334668a42eb5772aadbca008f39f21c63e',
    // GaugeAdder
    '0xEd5ba579bB5D516263ff6E1C10fcAc1040075Fe2': '0xeb8d5a5f8029d6a8372ddda5351cd0d6700aac36c15e12925365ef2f8c24ec1a',
    // VotingEscrow
    '0xC128a9954e6c874eA3d62ce62B468bA073093F25': '0x3d421900747b1793d12c516b9d20057327a1057b76a56b98b0556d18d70571f3',
    // GaugeController
    '0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD': '0x69d0355862729073f8d25ef9d6d3ecaa1f001f7e339a465430326c931125b3c6',
    // BalancerMinter
    '0x239e55F427D44C3cc793f49bFB507ebe76638a2b': '0x591e5a729dc85e3e0edd2d63ce93a7aac26ed5ec3878c73664ea5d4547f0aa98',
    // LiquidityGaugeV5
    '0x3b8cA519122CdD8efb272b0D3085453404B25bD0': '0xc9828a540619b902ee2aa87058072a2dc70cd9d8c209737af6c5a2dfabf2b4a1',
    // LiquidityGaugeFactory
    '0x4E7bBd911cf1EFa442BC1b2e9Ea01ffE785412EC': '0x69b9fe9b5530d8640cb66546dffd7deeca2bdf40e005caf3049836fa031b640d',
    // SingleRecipientGaugeFactory
    '0x94f68b54191F62f781Fe8298A8A5Fa3ed772d227': '0xe4268aa3fbd18072c7bd95ab145b3c955af635997d5c8aff3c766f1ab5cb8b6f',
    // VotingEscrowDelegation
    '0x2E96068b3D5B5BAE3D7515da4A1D2E52d08A2647': '0x2c487a62e22d713058dfabb7f8789f8ecfd5a2ef0ef3536418ab8f5ae39c1fe6',
    // VotingEscrowDelegationProxy
    '0x6f5a2eE11E7a772AeB5114A20d0D7c0ff61EB8A0': '0xfde583d7c4d839a7537156385e2b393cc9c3180af840629a284f753bcaabb8b3',
    // veBALDeploymentCoordinator
    '0xeb151668006CD04DAdD098AFd0a82e78F77076c3': '0x9ebade9014815039f26be04abb8997b5113ebc1fa6ce808f3235e45b565d4bd1',
    // ArbitrumRootGaugeFactory
    '0xad901309d9e9DbC5Df19c84f729f429F0189a633': '0x8562ca63b19952e67ea14b1b5d3e7a9bf3fce96df80474adb7d88ead72cb6db8',
    // PolygonRootGaugeFactory
    '0x4C4287b07d293E361281bCeEe8715c8CDeB64E34': '0xcc3044f91aed68a5811d2b180b5a21528592bbf5eacf2108647957ab7dc25dbe',
    // veBALL2GaugeSetupCoordinator
    '0xd13AFc362F619b840C8f4AaC1D957cE219eF37Ca': '0xb13a53bfb7ccc38c5a75f512d457549599cd39326a39ac45809c70c4460af7cc',
    // veBALGaugeFixCoordinator
    '0xee47ef369CDa5a65639D7794b70a4d247826DdF3': '0x84276e933a6ae7454a88631197fa98ba0ddcb39df11cc9c4f42642fb8220cfeb',
    // FeeDistributor
    '0x26743984e3357eFC59f2fd6C1aFDC310335a61c9': '0x0068bb058c0222bb2c929a75c1a383c0c3916cec8a5219970f0d1600320ef49f',
    // SmartWalletChecker
    '0x7869296Efd0a76872fEE62A058C8fBca5c1c826C': '0x46783d6a0e5389f7a90e0fffb1f09f3471c3debdb76ab06259d418c8de26fbd8',
    // SmartWalletCheckerCoordinator
    '0x26575A44755E0aaa969FDda1E4291Df22C5624Ea': '0xb0ffe270598f3fe8ee36726d3a8910ac14eba29c429c96013548acb72a421855',
    // DistributionScheduler
    '0xbfD9769b061E57e478690299011A028194D66e3C': '0xb331661982566c968a83472b84ef2a49f617444d47454dfd26313a6c9b61540c',
    // DoubleEntrypointFixRelayer
    '0xcA96C4f198d343E251b1a01F3EBA061ef3DA73C1': '0x0dd98227681a13fde11f9943b285bfdd8b3ad67d12f0ead07a17f483a99de7ff',
  },
  polygon: {
    // Authorizer
    '0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6': '0x9c7f532cf201c66263472d58f51f684c32772c65946cf4603acf5d616c9a9b26',
    // Vault
    '0xBA12222222228d8Ba445958a75a0704d566BF2C8': '0x66f275a2ed102a5b679c0894ced62c4ebcb2a65336d086a916eb83bd1fe5c8d2',
    // BalancerHelpers
    '0x239e55F427D44C3cc793f49bFB507ebe76638a2b': '0x5fa1d8faf728a0f85b1cfa30d870626836a1e5112a623cb9aebd0b1d1f7f7e37',
    // WeightedPoolFactory
    '0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9': '0xb8ac851249cc95bc0943ef0732d28bbd53b0b36c7dd808372666acd8c5f26e1c',
    // WeightedPool2TokensFactory
    '0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0': '0x04bf3059d000a25344c1b909145a25ddf8cf2a15bc8b67817e2b9804f4ec4b45',
    // StablePoolFactory
    '0xc66Ba2B6595D3613CCab350C886aCE23866EDe24': '0xe8b338d741aa425ea88f2af40f49d8ad4f35fd813782435572050285340cb3bc',
    // LiquidityBootstrappingPoolFactory
    '0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE': '0xd9b5b9a9e6ea17a87f85574e93577e3646c9c2f9c8f38644f936949e6c853288',
    // QueryProcessor
    '0x72D07D7DcA67b8A406aD1Ec34ce969c90bFEE768': '0xb2f024ad83c6736b96d14609971aa2008bc42514652a914d7504b1d8fc113a28',
    // MetaStablePoolFactory
    '0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca': '0x9190ab08e310fcb48530ff5d66b2a3a5c4bd11ec92b1972b7ac95d658dad3468',
    // InvestmentPoolFactory
    '0x0f7bb7ce7b6ed9366F9b6B910AdeFE72dC538193': '0x4125c200427389136bf4cba98d98a7d3dcd2bd3c7e86890482cb95d4dc8f19ee',
    // MerkleOrchard
    '0x0F3e0c4218b7b0108a3643cFe9D3ec0d4F57c54e': '0x26badd37f9f856cdc98b7d1477ae4848fe662394c8ee063d79312edf5d430b1f',
    // NoProtocolFeeLiquidityBootstrappingPoolFactory
    '0x41B953164995c11C81DA73D212ED8Af25741b7Ac': '0x125bc007a86d771f8dc8f5fa1017de6e5a11162a458a72f25814503404bbeb0b',
    // BatchRelayerLibrary
    '0x8F42aDBbA1B16EaAE3BB5754915E0D06059aDd75': '0x109bbf663c133d925fdab8072f7924b0ef6834ec1684ca87ab7259f9186f81c2',
    // BalancerRelayer
    '0x4574ccBcC09A00C9eE55fB92Fe353699A4fA800e': '0x109bbf663c133d925fdab8072f7924b0ef6834ec1684ca87ab7259f9186f81c2',
    // AaveLinearPoolFactory
    '0xf302f9F50958c5593770FDf4d4812309fF77414f': '0xb7bea0d00e08e28a5a671029fe33613917c4145d029cf16fdde3c547463c1dad',
    // StablePhantomPoolFactory
    '0xC128a9954e6c874eA3d62ce62B468bA073093F25': '0xed2511a4aa8a7cb5b9ac49085e8b6b3d5441aff71b4a35ea51839c96459c5fb2',
    // ERC4626LinearPoolFactory
    '0xC6bD2497332d24094eC16a7261eec5C412B5a2C1': '0x7aea2c2335ce8f03fba621e1452c18042ca7d438edd010da28860508ecf77f63',
    // BatchRelayerLibrary v2
    '0xC4eD21Aa0Bec959ED7e4A83B2CD46dd00a0205dA': '0x9d35c0c3511946c41b5883f4139d64027fd573f7029f5a0f20031a71d6ab496f',
    // BalancerRelayer v2
    '0xF537dDd7f4cc72C6C08866b62EAe9378f1F62da8': '0x9d35c0c3511946c41b5883f4139d64027fd573f7029f5a0f20031a71d6ab496f',
    // AuthorizerAdaptor
    '0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD': '0x495474096c2a5d3d50022fcb99cd9b7ffce8229d45983189b921385c7e81a793',
    // RewardsOnlyGauge
    '0x2E96068b3D5B5BAE3D7515da4A1D2E52d08A2647': '0x196010acc09202c349955de4f3770f1f5afd31fb628cd530693346a3d0b61c68',
    // ChildChainStreamer
    '0x6f5a2eE11E7a772AeB5114A20d0D7c0ff61EB8A0': '0xd65c967cef05ee6ec051dda9274433ff1f9e46f57c831b9ad63ccb3dff66edcf',
    // ChildChainLiquidityGaugeFactory
    '0x3b8cA519122CdD8efb272b0D3085453404B25bD0': '0x0dcff784ada6e0e4e21db3da70e09545d31c3e425cf028df7d1289f914a7f1d5',
    // DoubleEntrypointFixRelayer
    '0x79d0011892fe558FC5a4ec7D4Ca5db59069f460f': '0x58c8f5e410528c1142d50ea574606d6dada84995f9825a7b88fd578321e17bfa',
  },
  arbitrum: {
    // Authorizer
    '0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6': '0x7b3fcae6346e179585d978bd668f9ba3f38c1473539b7c5b882ec0840abcc053',
    // Vault
    '0xBA12222222228d8Ba445958a75a0704d566BF2C8': '0xe2c3826bd7b15ef8d338038769fe6140a44f1957a36b0f27ab321ab6c68d5a8e',
    // BalancerHelpers
    '0x77d46184d22CA6a3726a2F500c776767b6A3d6Ab': '0x996464aac6a6a48cdae7cb169e0efc3d04889b1636cf89a4318f59829d9f27c7',
    // WeightedPoolFactory
    '0x7dFdEF5f355096603419239CE743BfaF1120312B': '0xb9eb192adbb1374bc0a9bdc84a277ad16e453b4e99cd7c4dc9cc4e26bb49abcd',
    // WeightedPool2TokensFactory
    '0xCF0a32Bbef8F064969F21f7e02328FB577382018': '0x2954ec1554573e4a5742339c6cee64bdaa356691133f6246b937c53eb9a1fe08',
    // StablePoolFactory
    '0x2433477A10FC5d31B9513C638F19eE85CaED53Fd': '0xa8bf235a1d214c3d0e4f5a911d5bbdfe4867633479a3a28de2887f7b1cc4bfda',
    // LiquidityBootstrappingPoolFactory
    '0x142B9666a0a3A30477b052962ddA81547E7029ab': '0xbebca560e1273fa68732ec9ef74269f6d8da29a075f2163b533c3269e643bd55',
    // QueryProcessor
    '0x6783995f91A3D7f7C24B523669488F96cCa88d31': '0xfe4fbcd08f0f651bb364b95a1322f5ce00534ce79254c52590794fe7e823d113',
    // MetaStablePoolFactory
    '0xEBFD5681977E38Af65A7487DC70B8221D089cCAD': '0x72c3b9f5ebeed96152d5d24be4ec9d2b9ab78fdb30e5c29eb010726a3bcb4b18',
    // InvestmentPoolFactory
    '0xaCd615B3705B9c880E4E7293f1030B34e57B4c1c': '0xf59be5478219cf485f4220f00bd10739fc622079648f9ed9a5936d1f906a0961',
    // MerkleRedeem (BAL)
    '0x6bd0B17713aaa29A2d7c9A39dDc120114f9fD809': '0x056cdfa8cf5ef7bb593bdf6d27420cbe72488693c475b45b6ab5ec02be359253',
    // MerkleRedeem (MCD)
    '0xC6bD2497332d24094eC16a7261eec5C412B5a2C1': '0xd6b03d5713021f99166c075191303cb61c9aaf6594228dd970fdebbb6b4172bf',
    // MerkleOrchard
    '0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE': '0x982f829ea1e2036e281eccf042e71a51596dd6139bf073fdaa9bc9846ee03e11',
    // NoProtocolFeeLiquidityBootstrappingPoolFactory
    '0x1802953277FD955f9a254B80Aa0582f193cF1d77': '0x5265176961ba08450afc1d7c7d34321da11b2f1f106a7d652e6c11d923caed24',
    // BatchRelayerLibrary
    '0x72D07D7DcA67b8A406aD1Ec34ce969c90bFEE768': '0x6454d866290db7a5a06267f2a5d56f149afd34711cb775c9bb9d1165cc9aff4f',
    // BalancerRelayer
    '0x466262c2a275aB106E54D95B5B04603e12b58cA1': '0x6454d866290db7a5a06267f2a5d56f149afd34711cb775c9bb9d1165cc9aff4f',
    // AaveLinearPoolFactory
    '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965': '0xda011757a321c9aa39e9e101b9715b271afb2ab08f83e841f45be73305d62f2f',
    // StablePhantomPoolFactory
    '0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca': '0x68a6896cde23164d676e8ff76bd9f8f9e33459a4fa3ab3a6045270df0c163ca0',
    // AuthorizerAdaptor
    '0x0F3e0c4218b7b0108a3643cFe9D3ec0d4F57c54e': '0xaa67a9303702af7b51bacaf6c70046c037467d0d06eec418575a97c7ab8c9013',
    // RewardsOnlyGauge
    '0x41B953164995c11C81DA73D212ED8Af25741b7Ac': '0xe8ffee8416ffb7839940cb2e20231c0966125f6da05f93105e1244db436acfd3',
    // ChildChainStreamer
    '0xD7FAD3bd59D6477cbe1BE7f646F7f1BA25b230f8': '0xda0bb268c70d47b0b2bca617db6afacdcc70f8967a6983a30af4ed20b5a7480a',
    // ChildChainLiquidityGaugeFactory
    '0xb08E16cFc07C684dAA2f93C70323BAdb2A6CBFd2': '0x4cc294e3e988adc1d0f0244451426583284f5270acb865f87ac55e18fe405874',
    // DoubleEntrypointFixRelayer
    '0x8E5698dC4897DC12243c8642e77B4f21349Db97C': '0x88cce60b9ac6ef8842840f583bce4a3bd3299975999c9aa492a08db8a451526f',
  },
  optimism: {
    // Authorizer
    '0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6': '0x86c386207f3c5fd1f909aa1af7d140c9aaace9ede25b270312268cc629479682',
    // Vault
    '0xBA12222222228d8Ba445958a75a0704d566BF2C8': '0xa03cb990595df9eed6c5db17a09468cab534aed5f5589a06c0bb3d19dd2f7ce9',
    // BalancerHelpers
    '0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9': '0x2a9a9870e2a3cbd7f696bea5a2a24105725757ca318805c08868269a01011f07',
    // WeightedPoolFactory
    '0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca': '0xd5754950d47179d822ea976a8b2af82ffa80e992cf0660b02c0c218359cc8987',
    // WeightedPool2TokensFactory
    '0x0F3e0c4218b7b0108a3643cFe9D3ec0d4F57c54e': '0xc9bfd52a242c6aabe7e9ee8ff1c03a89ca6e15ebd0296b0f6aa8398243961beb',
    // StablePoolFactory
    '0x41B953164995c11C81DA73D212ED8Af25741b7Ac': '0xe070ab051451f885f8e4c9e33d9776465fe71f91f370fea57c77550155175e4d',
    // QueryProcessor
    '0xD7FAD3bd59D6477cbe1BE7f646F7f1BA25b230f8': '0x2bfc5f5af74273160748c9ae7f969775d17276fc50eaa2adf9f61455573d0612',
    // MetaStablePoolFactory
    '0xb08E16cFc07C684dAA2f93C70323BAdb2A6CBFd2': '0x14cf5c6f55ba12c120c66940758d6f67ee04316f07d0abaf352ab4571b41fc1a',
    // NoProtocolFeeLiquidityBootstrappingPoolFactory
    '0xf302f9F50958c5593770FDf4d4812309fF77414f': '0x14fb43f051eebdec645abf0125e52348dc875b0887b689f8db026d75f9c78dda',
    // AuthorizerAdaptor
    '0x8F42aDBbA1B16EaAE3BB5754915E0D06059aDd75': '0xec800daf64f1abbe293ce34cc8d1b6bb6fcbc33670bc673716561b5732a00b40',
  },
};

export async function getContractDeploymentTransactionHash(deployedAddress: string, network: Network): Promise<string> {
  const txHash = CONTRACT_DEPLOYMENT_TRANSACTION_HASHES[network]?.[deployedAddress];
  if (txHash === undefined) {
    throw Error(`No transaction hash for contract ${deployedAddress} on network '${network}'`);
  }

  return txHash;
}
