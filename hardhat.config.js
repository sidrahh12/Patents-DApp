/**
 * @dev The current version of hardhat has a plugin called "@nomicfoundation/hardhat-toolbox" which
 * is prebuilt with the following
 * hardhat-verify ---->  To verify the source code of your contract with hardhat-verify
 * hardhar-ethers ----> Deploy and interact with contracts using ethers.js
 * hardhat-chai-matchers ---> To test your contract with Mocha, Chai.
 * hardhat-gas-reporter ----> Get metrics about gas usage of your contracts.
 * 
 * @dev You can replace the sepolia network with the network of your choice, 
 * i.e binance testnet, mainnet etc
 */


require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { task } = require("hardhat/config");
const fs = require("fs");
const { mnemonic, etherscanApiKey } = require('./secrets.json');
const { Mnemonic } = require("ethers");


module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: etherscanApiKey,
  },
  networks: {
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    hardhat: {
      chainId: 1337,
    },

    // testnet: {
    //   url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: ['Acc1key'],
    // }

    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/remote",
      accounts: {
        mnemonic: mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
      chainId: 11155111,
    }


    // mainnet: {
    //   url: `https://bsc-dataseed.bnbchain.org/`,
    //   accounts: {mnemonic: mnemonic}
    // },
  }
};

/*
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
*/

/**
 * @dev The task below works with the latest version of hardhat
 */
task("deploy", "Deploys the PatentdApp contract").setAction(
  async (args, hre) => {
    const PatentdApp = await hre.ethers.getContractFactory("PatentdApp");
    const patentdApp = await PatentdApp.deploy();

    await patentdApp.waitForDeployment();

    console.log(`PatentdApp deployed to: ${patentdApp.target}`);

    const abi = PatentdApp.interface.formatJson();

    fs.writeFileSync("./PatentdAppABI.json", abi);
  }
);
