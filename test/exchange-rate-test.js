const { expect } = require("chai")
const { concat } = require("ethers/lib/utils")

describe("enchantExchangeRate", function () {
    it("Should return a non-zero value, matching the expected value", async function () {
        const seanceAddress = "0x124b06c5ce47de7a6e9efda71a946717130079e6"
        const enchantAddress = "0x6a1a8368d607c7a808f7bba4f7aed1d9ebde147a"
        const expected = "2108336349744405149"

        const EnchantExchangeRate = await hre.ethers.getContractFactory("enchantExchangeRate")
        const enchantExchangeRate = await EnchantExchangeRate.deploy(enchantAddress, seanceAddress)

        await enchantExchangeRate.deployed()

        let exchangeRate = await enchantExchangeRate.getExchangeRate()
        expect(exchangeRate.toString()).to.equal(expected)
    })
})