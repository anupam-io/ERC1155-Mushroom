# ERC11155: Mushroom
<img src="./images/1.png" width="800" />

## Commands
 - `yarn` : installation
 - `yarn compile` : compilation
 - `yarn test` : tests
 - `yarn migrate` : migrating to rinkeby
 - `yarn verify:m` : verifying **Mushroom** on etherscan
 - `yarn verify:r` : verifying **MushroomReceiver** on etherscan

## How to deploy your NFT on **rinkeby**?
 - Install using `yarn`
 - Rename `.env.example` to `.env` and set the values of environment variables accordingly
 - Set the `tokenURI` in **line 12** of `Mushroom.sol`
 - Set the metadata in the `meta` directory
 - Set the nfts in the `nfts` directory
 - Run `yarn migrate` to deploy the contracts to rinkeby
 - Run `yarn verify:m` to verify the contracts on etherscan
 - Visit *https://testnets.opensea.io/* and enter the address of above deployed `Mushroom` contract
 - **Enjoy with your NFTs!!!**

## Notes for MushroomReceiver
 - This contract is made to recieve ERC1155 tokens
 - The admin of this contract can transfer tokens to anyone

## Deployments
 - [Mushroom](https://rinkeby.etherscan.io/address/0xbB52E126A7508db6FB87DBC63187f0ff4cF612eD#contracts)
 - [Token on Opensea](https://testnets.opensea.io/collection/unidentified-contract-njxc7khhdj)

## Dependencies
```
"dependencies": {
    "@openzeppelin/contracts": "^4.0.0",
    "@truffle/hdwallet-provider": "1.0.40",
    "dotenv": "^8.2.0",
    "truffle": "^5.2.6",
    "truffle-plugin-verify": "^0.5.7"
}
```

## Resources/Credits/References
 - https://forum.openzeppelin.com/t/create-an-erc1155/4433
 - https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155
 - https://docs.opensea.io/docs/metadata-standards
 - https://docs.openzeppelin.com/contracts/3.x/erc1155#constructing_an_erc1155_token_contract