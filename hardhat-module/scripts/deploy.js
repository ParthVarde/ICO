const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const CryptoDevTokenFactory = await ethers.getContractFactory("CryptoDevToken");
  const cryptoDev = await CryptoDevTokenFactory.deploy(CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);

  console.log("CryptoDev deployed to : ", cryptoDev.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
