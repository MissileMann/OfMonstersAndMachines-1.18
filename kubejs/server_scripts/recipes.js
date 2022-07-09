settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

onEvent("recipes", (event) => {
    const { smelting, blasting } = event.recipes.minecraft;

    

    let corundumCraftingUncrafting = function (colors) {
        colors.forEach((color) => {
            event.shaped("quark:" + color + "_corundum", ["CC", "CC"], {
                C: "quark:" + color + "_corundum_cluster",
            });
            event.shapeless("4x quark:" + color + "_corundum_cluster", ["quark:" + color + "_corundum"]);
        });
    };

    let stonecutter = function (arrayOfBlocks) {
        let cpt = 0;
        while (cpt < arrayOfBlocks.length) {
            let otherBlocks = arrayOfBlocks.slice(0, cpt).concat(arrayOfBlocks.slice(cpt + 1));
            event.stonecutting(arrayOfBlocks[cpt], otherBlocks);
            cpt++;
        }
    };

    stonecutter(["create:limestone", "quark:limestone"]);
    corundumCraftingUncrafting(["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]);

    event.shapeless(Item.of("minecraft:ladder"), ["quark:spruce_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:birch_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:jungle_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:acacia_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:dark_oak_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:crimson_ladder"]);
    event.shapeless(Item.of("minecraft:ladder"), ["quark:warped_ladder"]);
    event.shapeless("4x minecraft:clay_ball", ["#forge:storage_blocks/clay"]);

    event.remove({ id: "minecraft:cut_copper_from_copper_block_stonecutting" });
    event.stonecutting('4x minecraft:copper_block', [ 'minecraft:cut_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_cut_copper'])
    event.stonecutting('4x minecraft:cut_copper', 'minecraft:copper_block')

    event.remove({ id: "minecraft:bread" });
    event.remove({ id: "quark:tweaks/crafting/utility/bent/bread" });
    event.shapeless("minecraft:bread", ["#forge:crops/wheat", "#forge:crops/wheat", "#forge:crops/wheat"]);
    event.shapeless("minecraft:wheat_seeds", ["#forge:crops/wheat"]);

    event.shaped("16x minecraft:stick", ["L", "L"], {
        L: "#minecraft:logs",
    });

    event.shaped("minecraft:chest", ["WWW", "W W", "WWW"], {
        W: [
            "#minecraft:planks"
        ]
    });

    event.shaped("4x minecraft:chest", ["WWW", "W W", "WWW"], {
        W: [
            "#minecraft:logs"
        ]
    });

    event.shaped("minecraft:hopper", ["IWI", "IWI", " I "], {
        I: ["#forge:ingots/iron"],
        W: ["#minecraft:logs"]
    });

    event.remove({ id: "quark:building/crafting/compressed/charcoal_block"})
    event.remove({ id: "quark:building/crafting/compressed/charcoal_block_uncompress"})

    event.remove({ id: "quark:building/crafting/furnaces/cobblestone_furnace" });
    event.shaped("minecraft:furnace", ["CCC", "C C", "CCC"], {
        C: ["minecraft:cobblestone", "minecraft:mossy_cobblestone", "minecraft:infested_cobblestone"],
    });
    event.remove({ output: "quark:brick_vertical_slab" });
    event.remove({ id: "minecraft:daylight_detector" });
    event.remove({ id: "minecraft:cake" });
    event.remove({ id: "minecraft:comparator" });
    event.remove({ id: "quark:building/crafting/compressed/bamboo_block" });

    event.remove({ id: "botania:livingwood_twig" })
    event.shaped("botania:livingwood_twig", ["CC"], {
        C: ['#botania:livingwood_logs'],
    });

    event.remove({ output: "forbidden_arcanus:boom_arrow" });
    event.shaped("forbidden_arcanus:boom_arrow", [" B ", "AAA", " A "], {
        B: "minecraft:tnt",
        A: 'minecraft:arrow',
    });

    event.remove({ output: "botania:dreamwood_twig" });
    event.shaped("botania:dreamwood_twig", ["II"], {
        I: '#botania:dreamwood_logs',
    });

    event.remove({ output: "quark:oak_chest" });
    event.remove({ output: "quark:spruce_chest" });
    event.remove({ output: "quark:birch_chest" });
    event.remove({ output: "quark:jungle_chest" });
    event.remove({ output: "quark:acacia_chest" });
    event.remove({ output: "quark:dark_oak_chest" });
    event.remove({ output: "quark:crimson_chest" });
    event.remove({ output: "quark:warped_chest" });
    event.remove({ output: "compat_makeover:ancient_oak_chest" });
    event.remove({ output: "compat_makeover:willow_chest" });
    event.remove({ output: "compat_makeover:swamp_cypress_chest" });
    event.remove({ output: "compat_makeover:blighted_balsa_chest" });
    event.remove({ output: "quark:blossom_chest" });
    event.remove({ output: "quark:azalea_chest" });
    event.shapeless("quark:oak_chest", ["#forge:chests/wooden", "minecraft:oak_planks"]);
    event.shapeless("quark:spruce_chest", ["#forge:chests/wooden", "minecraft:spruce_planks"]);
    event.shapeless("quark:birch_chest", ["#forge:chests/wooden", "minecraft:birch_planks"]);
    event.shapeless("quark:jungle_chest", ["#forge:chests/wooden", "minecraft:jungle_planks"]);
    event.shapeless("quark:acacia_chest", ["#forge:chests/wooden", "minecraft:acacia_planks"]);
    event.shapeless("quark:dark_oak_chest", ["#forge:chests/wooden", "minecraft:dark_oak_planks"]);
    event.shapeless("quark:crimson_chest", ["#forge:chests/wooden", "minecraft:crimson_planks"]);
    event.shapeless("quark:warped_chest", ["#forge:chests/wooden", "minecraft:warped_planks"]);
    event.shapeless("compat_makeover:ancient_oak_chest", ["#forge:chests/wooden", "biomemakeover:ancient_oak_planks"]);
    event.shapeless("compat_makeover:willow_chest", ["#forge:chests/wooden", "biomemakeover:willow_planks"]);
    event.shapeless("compat_makeover:swamp_cypress_chest", ["#forge:chests/wooden", "biomemakeover:swamp_cypress_planks"]);
    event.shapeless("compat_makeover:blighted_balsa_chest", ["#forge:chests/wooden", "biomemakeover:blighted_balsa_planks"]);
    event.shapeless("quark:blossom_chest", ["#forge:chests/wooden", "quark:blossom_planks"]);
    event.shapeless("quark:azalea_chest", ["#forge:chests/wooden", "quark:azalea_planks"]);

    event.smelting("farmersdelight:fried_egg", "duckling:duck_egg")
    event.smoking("farmersdelight:fried_egg", "duckling:duck_egg")
    event.campfireCooking("farmersdelight:fried_egg", "duckling:duck_egg")

    event.replaceInput({output: 'ars_nouveau:source_berry_pie'}, 'minecraft:egg', '#forge:eggs')

    event.remove({output: "industrialforegoing:diamond_gear"});
    event.remove({output: "industrialforegoing:gold_gear"});
    event.remove({output: "industrialforegoing:iron_gear"});

    //event.replaceInput({output: "industrialforegoing:machine_frame_pity"}, "minecraft:redstone_block", "thermal:upgrade_augment_2");

    event.shapeless("thermal:ender_pearl_dust", [
        ["minecraft:ender_pearl"],
        Item.of("immersiveengineering:hammer").ignoreNBT(),
      ]);
    event.recipes.immersiveengineeringCrusher("thermal:ender_pearl_dust", "minecraft:ender_pearl")
    event.recipes.mekanismCrushing("thermal:ender_pearl_dust", "minecraft:ender_pearl")
    event.recipes.thermal.pulverizer("thermal:ender_pearl_dust", "minecraft:ender_pearl")

    event.remove({mod: "angelring"})
    event.remove({output: "explorerscompass:explorerscompass"})
    //event.remove({output: "angelring:itemring"})
    event.shaped("angelring:itemring", ["ABA","CDC","AEA"], {
        A: "enigmaticlegacy:evil_ingot",
        B: "forbidden_arcanus:golden_dragon_scale",
        C: "minecraft:gold_block",
        D: "enigmaticlegacy:fabulous_scroll",
        E: "enigmaticlegacy:twisted_core"
    })
    event.shaped("enigmaticlegacy:cursed_ring", ["ABA","CDC","FEF"], {
        A: "minecraft:blaze_rod",
        B: "enigmaticlegacy:gem_ring",
        C: "minecraft:netherite_scrap",
        D: "minecraft:heart_of_the_sea",
        E: "minecraft:lava_bucket",
        F: "malum:blazing_quartz"
    })
    event.shaped("explorerscompass:explorerscompass", ["BCB","CAC","BCB"], {
        A: "enigmaticlegacy:soul_compass",
        B: "enigmaticlegacy:evil_essence",
        C: "botania:manasteel_ingot"
    })

    event.smelting('refinedstorage:silicon', '#forge:gems/quartz')
    event.recipes.thermal.smelter('3x refinedstorage:silicon', ['#forge:gems/quartz', ['#forge:gems/sulfur', '#forge:dusts/sulfur']])

    event.shapeless("delightful:prickly_pear_juice", ["4x byg:prickly_pear_cactus", "minecraft:sugar", "minecraft:glass_bottle"])
    event.shapeless("delightful:crab_rangoon", ["farmersdelight:wheat_dough", "#forge:cheese_or_milk", "quark:cooked_crab_leg"])
    event.shapeless("delightful:chunkwich", ["#forge:bread", "minecraft:sugar", "4x minecraft:rotten_flesh"])

    event.remove({output: "cabletiers:creative_exporter"})
    event.remove({output: "cabletiers:creative_importer"})
    event.remove({output: "cabletiers:creative_constructor"})
    event.remove({output: "cabletiers:creative_destructor"})
    event.remove({output: "cabletiers:creative_disk_manipulator"})
    event.remove({output: "cabletiers:creative_requester"})

    //I'm sick of accidentally shift clicking coal into the top slot
    event.remove({output: "biggerreactors:graphite_ingot", type: "minecraft:smelting"})
    event.shapeless("2x biggerreactors:graphite_ingot", ["minecraft:iron_ingot", "minecraft:coal"])
});

onEvent('tags.items', event => {
    event.remove('curios:ring', 'angelring:itemring')
    event.remove('curios:charm', 'angelring:itemring')
});
