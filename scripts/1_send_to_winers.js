
module.exports = async function () {
    const Mushroom = await artifacts.require("Mushroom").deployed();
    const MushroomReceiver = await artifacts.require("MushroomReceiver").deployed();
    const mush = new web3.eth.Contract(Mushroom.abi, Mushroom.address);
    const mushR = new web3.eth.Contract(MushroomReceiver.abi, MushroomReceiver.address);

    const accounts = await web3.eth.getAccounts();

    await mush.methods.mint(mushR).send({from: accounts[0]});

};
// Create the token via mint()

// Distribute the token via sendToWinners()
