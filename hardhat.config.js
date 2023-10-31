require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { task } = require("hardhat/config");
const { mnemonic, etherscanApiKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.19",
  networks: {
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    hardhat: {
      chainId: 1337,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },

    mainnet: {
      url: `https://bsc-dataseed.bnbchain.org/`,
      accounts: {mnemonic: mnemonic}
    },

    etherscan: {
      apiKey: etherscanApiKey
    },
  },
};

task("deploy", "Deploys the PatentdApp contract")
  .setAction(async (args, hre) => {
    const { deployContract } = require("ethereum-waffle");
    const fs = require("fs");

    const [deployer] = await hre.waffle.provider.getWallets();

    const PatentdApp = await deployContract(deployer, "PatentdApp");

    console.log("PatentdApp deployed to:", PatentdApp.address);

    // Writes the contract's ABI to a JSON file
    const abi = JSON.stringify(PatentdApp.interface.abi, null, 2);
    fs.writeFileSync("PatentdAppABI.json", abi);
  });


