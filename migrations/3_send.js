const Mushroom = artifacts.require("Mushroom");

module.exports = async function (deployer) {
  let mush = await Mushroom.deployed();

  const account = (await web3.eth.getAccounts())[0];
  const amount = 10;

  await mush.mint(account, amount);
  await mush.mint(account, amount);
  await mush.mint(account, amount);
};
