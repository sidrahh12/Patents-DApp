/**
 * First: To compile the solidity code.
 * Second: To deploy the code to the local blockchain i.e Your machine
 * Third: To deploy the code to sepolia test net
 * Fourth: To verify it on sepolia 
 */

const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const PatentdApp = await hre.ethers.getContractFactory("PatentdApp");
  const patentdApp = await PatentdApp.deploy();

  await patentdApp.waitForDeployment(); // For Block Comfirmations 

  console.log(`PatentdApp deployed to: ${patentdApp.target}`); // To display the address of the deployed contract

  /**
   * @dev This will create the ABI file for the contract
   */
  if (process.env.create_abi_file == "true") {

    const abi = PatentdApp.interface.formatJson();

    fs.writeFileSync("./PatentdAppABI.json", abi); // To write the ABI to a JSON file, i.e PatentdAppABI.json

    console.log("Created file!!!");

  } else {
    console.log("Already created file!!!");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



/*

const hre = require("hardhat");
const hrw = require("hardhat-waffle");
const fs = require("fs");

async function main() {
  const PatentdApp = await hre.ethers.getContractFactory("PatentdApp");
  const patentdApp = await PatentdApp.deploy();

  await patentdApp.deployed();

  console.log("PatentdApp deployed to:", patentdApp.address);

  // Get the contract's ABI
  const abi = JSON.stringify(PatentdApp.interface.abi, null, 2);

  // Write the ABI to a JSON file
  fs.writeFileSync("PatentdAppABI.json", JSON.stringify(abi, null, 2));

  // Exiting the script
  process.exit(0);
}

  const PatentdApp = await hre.ethers.getContractFactory("PatentdApp");
  const patentdApp = await PatentdApp.deploy();
  await patentdApp.deployed();
*/