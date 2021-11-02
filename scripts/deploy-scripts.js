// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const seanceAddress = "0x124b06c5ce47de7a6e9efda71a946717130079e6";
  const enchantAddress = "0x6a1a8368d607c7a808f7bba4f7aed1d9ebde147a";
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const EnchantExchangeRate = await hre.ethers.getContractFactory("enchantExchangeRate");
  const enchantExchangeRate = await EnchantExchangeRate.deploy(enchantAddress, seanceAddress);

  await enchantExchangeRate.deployed();

  console.log("enchantExchnageRate Address:", enchantExchangeRate.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });