const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC,
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0,
        }),
      network_id: 3,
      gas: 5500000, // Gas Limit. How much we are willing to spend.
      gasPrice: 20000000000, // How much we are willing to spend on gas
      confirmations: 2, // Number of blocks to wait between deployment
      timeoutBlocks: 200, // Number of blocks before deployment times out
    },
  },

  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
};


// Go to *env.development* and change to the below settings for Ganache Network
