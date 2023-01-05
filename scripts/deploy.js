const hre = require("hardhat");

async function main() {
  const Tip = await hre.ethers.getContractFactory("tip");
  const contract = await Tip.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});