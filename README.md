# ERC11155: Mushroom

## Resources
 - https://forum.openzeppelin.com/t/create-an-erc1155/4433
 - https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC1155
 - https://docs.opensea.io/docs/metadata-standards
 - https://docs.openzeppelin.com/contracts/3.x/erc1155#constructing_an_erc1155_token_contract

## Helpful notes
 - `Mushroom` is a contract which hold the ERC1155 Non fungible tokens
 - `mint()` is supposed to be called from the owner and this will transfer the tokens to another smart contract
 - In contract to `ownerOf()` in ERC721, ERC1155 has `balanceOf()`

## How to run?
 - `yarn`
 - `yarn truffle test`

## Deployments:
```
pam@g3:~/erc1155-mushroom$ yarn migrate
yarn run v1.22.10
$ truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/Mushroom.sol
> Compiling ./contracts/MushroomReceiver.sol
> Compiling @openzeppelin/contracts/access/Ownable.sol
> Compiling @openzeppelin/contracts/token/ERC1155/ERC1155.sol
> Compiling @openzeppelin/contracts/token/ERC1155/IERC1155.sol
> Compiling @openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol
> Compiling @openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol
> Compiling @openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol
> Compiling @openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol
> Compiling @openzeppelin/contracts/utils/Address.sol
> Compiling @openzeppelin/contracts/utils/Context.sol
> Compiling @openzeppelin/contracts/utils/introspection/ERC165.sol
> Compiling @openzeppelin/contracts/utils/introspection/IERC165.sol
> Artifacts written to /home/pam/erc1155-mushroom/build/contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa4d2f9c012bd3ee5083e1d58ea8434433ee78c9577a1e6e120b862eaca85b8a1
   > Blocks: 2            Seconds: 26
   > contract address:    0xdE18AdbBd01724C0b2aAd8B13288f902dF9b7bc7
   > block number:        8312695
   > block timestamp:     1616923875
   > account:             0x3D356DCBAc29e69a7fc237f45F8318E099268a0e
   > balance:             1.750808121
   > gas used:            245588 (0x3bf54)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00491176 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00491176 ETH


2_all.js
========

   Deploying 'Mushroom'
   --------------------
   > transaction hash:    0x66b5107a38be8f76d7ce268671c8fbe9c814adc2c47b328122caa3bd99ed77af
   > Blocks: 2            Seconds: 21
   > contract address:    0x836ca1DDBEB99E538ca2C92022eacb564b5B5c8C
   > block number:        8312699
   > block timestamp:     1616923935
   > account:             0x3D356DCBAc29e69a7fc237f45F8318E099268a0e
   > balance:             1.696893341
   > gas used:            2649826 (0x286ee2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05299652 ETH


   Deploying 'MushroomReceiver'
   ----------------------------
   > transaction hash:    0x0caddba671a5c424745f19679f79a8252b6ac12a682fd949b8f45ec5b62975b4
   > Blocks: 1            Seconds: 9
   > contract address:    0xCD920956C1187d165B8c12597A85D0ad3BD58cFC
   > block number:        8312701
   > block timestamp:     1616923965
   > account:             0x3D356DCBAc29e69a7fc237f45F8318E099268a0e
   > balance:             1.686548061
   > gas used:            517264 (0x7e490)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01034528 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0633418 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.06825356 ETH


Done in 145.96s.
```