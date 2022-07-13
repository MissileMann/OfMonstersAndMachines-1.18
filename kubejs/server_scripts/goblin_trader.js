onEvent("entity.spawned", (event) => {
    if (event.entity.type === "goblintraders:goblin_trader") {
        //Grabbing traders current NBT
        let nbt = event.entity.fullNBT;

        nbt.Offers.Recipes.add(
            NBT.compoundTag({
                maxUses: 1,
                buy: Item.of("16x minecraft:emerald").toNBT(),
                sell: Item.of("kubejs:goblin_tech").toNBT(),
            })
        );
        

        //Merging the NBT data back on to the trader
        event.entity.mergeFullNBT(nbt);
    }
});
