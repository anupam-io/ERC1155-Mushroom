const Mushroom = artifacts.require("Mushroom");
const MushroomReceiver = artifacts.require("MushroomReceiver");


module.exports = async function (){
    mush = await Mushroom.deployed();
    mushR = await MushroomReceiver.deployed();
    
    console.log(mush);
    console.log(mushR);

    // myAccount = (await web3.eth.getAccounts())[0];
    // await mush.mint(mushR.address);
    // await mushR.sendToWinners(mush.address, myAccount, 0, (10).toString());
}
// Create the token via mint()


// Distribute the token via sendToWinners()
