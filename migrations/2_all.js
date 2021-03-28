const Mushroom = artifacts.require("Mushroom");
const MushroomReceiver = artifacts.require("MushroomReceiver");

module.exports = function (deployer) {
  deployer.deploy(Mushroom);
  deployer.deploy(MushroomReceiver);
};
