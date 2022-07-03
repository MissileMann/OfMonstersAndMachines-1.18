onEvent("lootjs", (event) => {
    event.addLootTableModifier("minecraft:chests/end_city_treasure")
            .randomChance(0.025)
            .addLoot('kubejs:collectable_missilecard');
    event.addLootTableModifier("minecraft:chests/end_city_treasure")
            .randomChance(0.025)
            .addLoot('kubejs:collectable_shinycard');
    event.addLootTableModifier("minecraft:chests/end_city_treasure")
            .randomChance(0.025)
            .addLoot('kubejs:collectable_pokelockercard')
})