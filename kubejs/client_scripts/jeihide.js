onEvent("jei.hide.items", (event) => {
    const list = [
        'angelring:itemdiamondring',
        'angelring:energetic_angel_ring',
        'angelring:leadstone_angel_ring',
        'angelring:hardened_angel_ring',
        'angelring:reinforced_angel_ring',
        'angelring:resonant_angel_ring',
        'create:copper_nugget',
        'create:copper_sheet',
        'immersiveengineering:nugget_copper',
        'immersiveengineering:plate_copper',
        'immersiveengineering:dust_copper',
        'mekanism:dust_copper',
        'malum:copper_nugget',
        'cabletiers:creative_exporter',
        'cabletiers:creative_importer',
        'cabletiers:creative_constructor',
        'cabletiers:creative_destructor',
        'cabletiers:creative_disk_manipulator',
        'cabletiers:creative_requester',
        'tconstruct:copper_nugget',
        'immersiveengineering:raw_block_silver',
        'immersiveengineering:storage_silver',
        'immersiveengineering:slab_storage_silver',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:raw_silver',
        'immersiveengineering:plate_silver',
        'immersiveengineering:dust_silver',
        'darkerdepths:raw_silver',
        'darkerdepths:silver_ingot',
        'darkerdepths:aridrock_silver_ore',
        'darkerdepths:limestone_silver_ore',
        'darkerdepths:silver_ore',
        'darkerdepths:raw_silver_block',
        'darkerdepths:silver_block',
        'immersiveengineering:ore_silver',
        'immersiveengineering:deepslate_ore_silver',
        'immersiveengineering:ore_lead',
        'immersiveengineering:deepslate_ore_lead',
        'immersiveengineering:raw_block_lead',
        'immersiveengineering:storage_lead',
        'immersiveengineering:slab_storage_lead',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:raw_lead',
        'immersiveengineering:plate_lead',
        'immersiveengineering:dust_lead',
        'mekanism:dust_lead',
        'mekanism:ingot_lead',
        'mekanism:raw_lead',
        'mekanism:nugget_lead',
        'mekanism:block_lead',
        'mekanism:block_raw_lead',
        'mekanism:lead_ore',
        'mekanism:deepslate_lead_ore',
        'immersiveengineering:ore_nickel',
        'immersiveengineering:deepslate_ore_nickel',
        'immersiveengineering:raw_block_nickel',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:raw_nickel',
        'immersiveengineering:plate_nickel',
        'immersiveengineering:dust_nickel',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:slab_storage_constantan',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:plate_constantan',
        'immersiveengineering:dust_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:slab_storage_electrum',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:nugget_electrum',
        'immersiveengineering:plate_electrum',
        'immersiveengineering:dust_electrum',
        'biggerreactors:uranium_ingot',
        'biggerreactors:uranium_dust',
        'biggerreactors:uranium_ore',
        'biggerreactors:uranium_block',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:slab_storage_uranium',
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:raw_uranium',
        'immersiveengineering:plate_uranium',
        'immersiveengineering:dust_uranium',
        'steampowered:bronze_sheet',
        'mekanism:dust_bronze',
        'mekanism:ingot_bronze',
        'mekanism:nugget_bronze',
        'mekanism:block_bronze',
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear'
    ]

    list.forEach((item) => {
        event.hide(item)
    })
})