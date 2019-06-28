var HDWalletProvider = require('truffle-hdwallet-provider')

var mnemonic = 'usual tribe token earth sense struggle fatal creek enroll odor close supply'
var publicNode = 'https://public-node.testnet.rsk.co:443'

module.exports = {
  networks: {
    rsk: {
      provider: () =>
        new HDWalletProvider(mnemonic, publicNode),
      network_id: '*',
      gas: 3500000,
      gasPrice: 183000
    }
  },
  compilers : {
     solc: {
       version: "0.5.0",
       evmVersion: "byzantium"
     }
  }
} 
