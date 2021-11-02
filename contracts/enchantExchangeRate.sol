//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.6;
import "@boringcrypto/boring-solidity/contracts/interfaces/IERC20.sol";

contract enchantExchangeRate {
    IERC20 private immutable enchant;
    IERC20 private immutable seance;

    constructor(IERC20 _enchant, IERC20 _seance) public {
        enchant = _enchant;
        seance = _seance;
    }

    function getExchangeRate() public view returns (uint256) {
        return (seance.balanceOf(address(enchant)) * 1e18) / enchant.totalSupply();
    }

    function toSEANCE(uint256 enchantAmount) public view returns (uint256 seanceAmount) {
        seanceAmount = (enchantAmount * seance.balanceOf(address(enchant))) / enchant.totalSupply();
    }

    function toENCHANT(uint256 seanceAmount) public view returns (uint256 enchantAmount) {
        enchantAmount = (seanceAmount * enchant.totalSupply()) / seance.balanceOf(address(enchant));
    }
}
