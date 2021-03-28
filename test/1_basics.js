const Mushroom = artifacts.require("Mushroom");
const MushroomReceiver = artifacts.require("MushroomReceiver");
const inWei = 10 ** 18;

contract("Mushroom", async (addresses) => {
  const [admin, buyer1, buyer2, _] = addresses;

  it("works correctly.", async () => {
    const mush = await Mushroom.new();
    const mushR = await MushroomReceiver.new();

    await mush.mint(mushR.address);
    await mush
      .balanceOf(mushR.address, 0)
      .then((d) => console.log("Receiver balance: ", d.toString()));

    await mushR.sendToWinners(mush.address, buyer1, 0, (10).toString());
    await mushR.sendToWinners(mush.address, buyer2, 0, (10).toString());

    await mush
      .balanceOf(buyer1, 0)
      .then((d) => console.log("buyer1 balance: ", d.toString()));

    await mush
      .balanceOf(buyer2, 0)
      .then((d) => console.log("buyer2 balance: ", d.toString()));
  });
});
