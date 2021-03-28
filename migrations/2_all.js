const Mushroom = artifacts.require("Mushroom");

module.exports = function (deployer) {
  deployer.deploy(Mushroom);
};
