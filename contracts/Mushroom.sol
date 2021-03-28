// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mushroom is ERC1155, Ownable {
    uint256 public collectibleId;

    constructor()
        ERC1155(
            "https://raw.githubusercontent.com/akcgjc007/erc1155-Mushroom/main/meta/{id}.json"
        )
    {
        collectibleId = 0;
    }

    function mint(address _receiver) public onlyOwner {
        _mint(_receiver, collectibleId, 20, "");
        collectibleId++;
    }
}
