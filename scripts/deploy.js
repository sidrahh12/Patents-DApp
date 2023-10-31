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


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
