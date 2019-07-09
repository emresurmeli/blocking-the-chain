const ProofOfExistence1 = artifacts.require('../contracts/ProofOfExistence1.sol');
const ProofOfExistence2 = artifacts.require('../contracts/ProofOfExistence2.sol');
const ProofOfExistence3 = artifacts.require('../contracts/ProofOfExistence3.sol');
const MultiSignatureWallet = artifacts.require('../contracts/MultiSignatureWallet.sol');

module.exports = function(deployer) {
  deployer.deploy(ProofOfExistence1);
  deployer.deploy(ProofOfExistence2);
  deployer.deploy(ProofOfExistence3);
  deployer.deploy(MultiSignatureWallet);
};