import { ethers } from "hardhat";

async function main() {
  const W3NFT = await ethers.getContractFactory("W3NFT");
  const [owner, addr1]= await ethers.getSigners();
  const w3nft = await W3NFT.deploy();
  await w3nft.deployed()

  console.log(`The NFT contract address is: ${w3nft.address}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});