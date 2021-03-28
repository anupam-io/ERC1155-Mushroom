const Mushroom = artifacts.require("Mushroom");
const MushroomReceiver = artifacts.require("MushroomReceiver");

module.exports = async function (deployer) {
  let mush = await Mushroom.deployed();
  let mushR = await MushroomReceiver.deployed();

  const account = (await web3.eth.getAccounts())[0];
  const amount = 100;
  await mush.mint(mushR.address, amount);
  await mushR.sendToWinners(mush.address, account, 0, (20).toString());

  // await mush
  //   .balanceOf(account, 0)
  //   .then((d) => console.log("My balance: ", d.toString()));
};
