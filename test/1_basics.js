const Mushroom = artifacts.require("Mushroom");
const MushroomReceiver = artifacts.require("MushroomReceiver");
const inWei = 10 ** 18;
const assert = require("assert");

contract("Mushroom", async (addresses) => {
  const [admin, buyer1, buyer2, _] = addresses;

  it("works correctly.", async () => {
    const mush = await Mushroom.new();
    const mushR = await MushroomReceiver.new();
    const amount = 100;

    await mush.mint(mushR.address, amount);
    assert.strictEqual(parseInt(await mush.balanceOf(mushR.address, 0)), amount);

    await mushR.sendToWinners(mush.address, buyer1, 0, amount / 2);
    await mushR.sendToWinners(mush.address, buyer2, 0, amount / 2);

    assert.strictEqual(parseInt(await mush.balanceOf(buyer1, 0)), amount / 2);
    assert.strictEqual(parseInt(await mush.balanceOf(buyer2, 0)), amount / 2);
  });
});
