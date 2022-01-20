const hre = require('hardhat')

async function main() {
  const Greeter = await hre.ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy('Hello, JoeGrey!')
  await greeter.deployed()
  console.log('Greeter deployed to:', greeter.address)

  const Token = await hre.ethers.getContractFactory('JGToken')
  const token = await Token.deploy('JoeGrey Token', 'JGT')

  await token.deployed()
  console.log('Token deployed to:', token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
