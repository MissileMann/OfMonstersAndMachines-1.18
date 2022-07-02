// priority: 100
onEvent("recipes", (event) => {
  const { smelting, blasting } = event.recipes.minecraft;

  let isIELoaded = Platform.mods.immersiveengineering;
  let isFTBICLoaded = Platform.mods.ftbic;
  let isMekanismLoaded = Platform.mods.mekanism;
  let isOreBerriesLoaded = Platform.mods.oreberriesreplanted;
  let isThermalLoaded = Platform.mods.thermal;
  let isCreateLoaded = Platform.mods.create;
  let isCreateAddLoaded = Platform.mods.createaddition;
  let isTinkersLoaded = false;

  let replaceIO = (tag, item) => {
    event.replaceInput(tag, tag);
    event.replaceOutput(tag, item);
  };

  let unify = [
    { name: "iron", hasOre: true, rawItem: "minecraft:raw_iron", rawBlock: "minecraft:raw_iron_block", nuggetItem: "minecraft:iron_nugget", ingotItem: "minecraft:iron_ingot", blockItem: "minecraft:iron_block", dustItem: "thermal:iron_dust", plateItem: "thermal:iron_plate", rodsItem: "immersiveengineering:stick_iron", gearItem: "thermal:iron_gear", crushedItem: "create:crushed_iron_ore" },
    { name: "gold", hasOre: true, rawItem: "minecraft:raw_gold", rawBlock: "minecraft:raw_gold_block", nuggetItem: "minecraft:gold_nugget", ingotItem: "minecraft:gold_ingot", blockItem: "minecraft:gold_block", dustItem: "thermal:gold_dust", plateItem: "thermal:gold_plate", rodsItem: "", gearItem: "thermal:gold_gear", crushedItem: "create:crushed_gold_ore" },
    { name: "aluminum", hasOre: true, rawItem: "immersiveengineering:raw_aluminum", rawBlock: "immersiveengineering:raw_block_aluminum", nuggetItem: "immersiveengineering:nugget_aluminum", ingotItem: "immersiveengineering:ingot_aluminum", blockItem: "immersiveengineering:storage_aluminum", dustItem: "immersiveengineering:dust_aluminum", plateItem: "immersiveengineering:plate_aluminum", rodsItem: "immersiveengineering:stick_aluminum", gearItem: "", crushedItem: "create:crushed_aluminum_ore" },
    { name: "copper", hasOre: true, rawItem: "minecraft:raw_copper", rawBlock: "minecraft:raw_copper_block", nuggetItem: "thermal:copper_nugget", ingotItem: "minecraft:copper_ingot", blockItem: "minecraft:copper_block", dustItem: "thermal:copper_dust", plateItem: "thermal:copper_plate", rodsItem: "", gearItem: "thermal:copper_gear", crushedItem: "create:crushed_copper_ore" },
    { name: "tin", hasOre: true, rawItem: "thermal:raw_tin", rawBlock: "thermal:raw_tin_block", nuggetItem: "thermal:tin_nugget", ingotItem: "thermal:tin_ingot", blockItem: "thermal:tin_block", dustItem: "thermal:tin_dust", plateItem: "thermal:tin_plate", rodsItem: "", gearItem: "thermal:tin_gear", crushedItem: "create:crushed_tin_ore" },
    { name: "lead", hasOre: true, rawItem: "thermal:raw_lead", rawBlock: "thermal:raw_lead_block", nuggetItem: "thermal:lead_nugget", ingotItem: "thermal:lead_ingot", blockItem: "thermal:lead_block", dustItem: "thermal:lead_dust", plateItem: "thermal:lead_plate", rodsItem: "", gearItem: "thermal:lead_gear", crushedItem: "create:crushed_lead_ore" },
    { name: "zinc", hasOre: true, rawItem: "create:raw_zinc", rawBlock: "create:raw_zinc_block", nuggetItem: "create:zinc_nugget", ingotItem: "create:zinc_ingot", blockItem: "create:zinc_block", dustItem: "kubejs:zinc_dust", plateItem: "", rodsItem: "", gearItem: "", crushedItem: "create:crushed_zinc_ore" },
    { name: "silver", hasOre: true, rawItem: "thermal:raw_silver", rawBlock: "thermal:raw_silver_block", nuggetItem: "thermal:silver_nugget", ingotItem: "thermal:silver_ingot", blockItem: "thermal:silver_block", dustItem: "thermal:silver_dust", plateItem: "thermal:silver_plate", rodsItem: "", gearItem: "thermal:silver_gear", crushedItem: "create:crushed_silver_ore" },
    { name: "nickel", hasOre: true, rawItem: "thermal:raw_nickel", rawBlock: "thermal:raw_nickel_block", nuggetItem: "thermal:nickel_nugget", ingotItem: "thermal:nickel_ingot", blockItem: "thermal:nickel_block", dustItem: "thermal:nickel_dust", plateItem: "thermal:nickel_plate", rodsItem: "", gearItem: "thermal:nickel_gear", crushedItem: "create:crushed_nickel_ore" },
    { name: "uranium", hasOre: true, rawItem: "mekanism:raw_uranium", rawBlock: "mekanism:block_raw_uranium", nuggetItem: "mekanism:nugget_uranium", ingotItem: "mekanism:ingot_uranium", blockItem: "mekanism:block_uranium", dustItem: "mekanism:dust_uranium", plateItem: "immersiveengineering:plate_uranium", rodsItem: "", gearItem: "", crushedItem: "create:crushed_uranium_ore" },
    { name: "osmium",  hasOre: true,  rawItem: "mekanism:raw_osmium", rawBlock: "mekanism:block_raw_osmium", nuggetItem: "mekanism:nugget_osmium",  ingotItem: "mekanism:ingot_osmium",  blockItem: "mekanism:block_osmium",  dustItem: "mekanism:dust_osmium",  plateItem: "",  rodsItem: "",  gearItem: "", crushedItem: "create:crushed_osmium_ore" },
    { name: "cobalt",  hasOre: true,  rawItem: "tconstruct:raw_cobalt", rawBlock: "tconstruct:raw_cobalt_block", nuggetItem: "tconstruct:cobalt_nugget",  ingotItem: "tconstruct:cobalt_ingot",  blockItem: "tconstruct:cobalt_block",  dustItem: "kubejs:cobalt_dust",  plateItem: "",  rodsItem: "",  gearItem: "", crushedItem: "kubejs:crushed_cobalt_ore" },
    { name: "electrum", hasOre: false, rawItem: "", rawBlock: "", nuggetItem: "thermal:electrum_nugget", ingotItem: "thermal:electrum_ingot", blockItem: "thermal:electrum_block", dustItem: "thermal:electrum_dust", plateItem: "thermal:electrum_plate", rodsItem: "", gearItem: "thermal:electrum_gear", crushedItem: "" },
    { name: "constantan", hasOre: false, rawItem: "", rawBlock: "", nuggetItem: "thermal:constantan_nugget", ingotItem: "thermal:constantan_ingot", blockItem: "thermal:constantan_block", dustItem: "thermal:constantan_dust", plateItem: "thermal:constantan_plate", rodsItem: "", gearItem: "", crushedItem: "" },
    { name: "bronze",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:bronze_nugget",  ingotItem: "thermal:bronze_ingot",  blockItem: "thermal:bronze_block",  dustItem: "thermal:bronze_dust",  plateItem: "thermal:bronze_plate",  rodsItem: "",  gearItem: "thermal:bronze_gear", crushedItem: "" },
    { name: "steel", hasOre: false, rawItem: "", rawBlock: "", nuggetItem: "thermal:steel_nugget", ingotItem: "thermal:steel_ingot", blockItem: "thermal:steel_block", dustItem: "thermal:steel_dust", plateItem: "thermal:steel_plate", rodsItem: "immersiveengineering:stick_steel", gearItem: "thermal:steel_gear", crushedItem: "" },
    { name: "netherite",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:netherite_nugget",  ingotItem: "minecraft:netherite_ingot",  blockItem: "minecraft:netherite_block",  dustItem: "thermal:netherite_dust",  plateItem: "thermal:netherite_plate",  rodsItem: "",  gearItem: "thermal:netherite_gear", crushedItem: "" },
    { name: "invar",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:invar_nugget",  ingotItem: "thermal:invar_ingot",  blockItem: "thermal:invar_block",  dustItem: "thermal:invar_dust",  plateItem: "thermal:invar_plate",  rodsItem: "",  gearItem: "thermal:invar_gear", crushedItem: "" },
    { name: "signalum",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:signalum_nugget",  ingotItem: "thermal:signalum_ingot",  blockItem: "thermal:signalum_block",  dustItem: "thermal:signalum_dust",  plateItem: "thermal:signalum_plate",  rodsItem: "",  gearItem: "thermal:signalum_gear", crushedItem: "" },
    { name: "lumium",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:lumium_nugget",  ingotItem: "thermal:lumium_ingot",  blockItem: "thermal:lumium_block",  dustItem: "thermal:lumium_dust",  plateItem: "thermal:lumium_plate",  rodsItem: "",  gearItem: "thermal:lumium_gear", crushedItem: "" },
    { name: "enderium",  hasOre: false,  rawItem: "", rawBlock: "", nuggetItem: "thermal:enderium_nugget",  ingotItem: "thermal:enderium_ingot",  blockItem: "thermal:enderium_block",  dustItem: "thermal:enderium_dust",  plateItem: "thermal:enderium_plate",  rodsItem: "",  gearItem: "thermal:enderium_gear", crushedItem: "" },
  ]

  unify.forEach(metal => {
    if (metal.rawItem !== "") {
      replaceIO(`#forge:raw_materials/${metal.name}`, metal.rawItem);

      if(isThermalLoaded) {
        event.remove({type: "thermal:press", output: `#forge:raw_materials/${metal.name}`});

        event.recipes.thermalPress(`9x ${metal.rawItem}`, [`#forge:storage_blocks/raw_${metal.name}`, "thermal:press_unpacking_die"]);
      }
    }
    if (metal.rawBlock !== "") {
      replaceIO(`#forge:storage_blocks/raw_${metal.name}`, metal.rawBlock);

      if(isThermalLoaded) {
        event.remove({type: "thermal:press", output: `#forge:storage_blocks/raw_${metal.name}`});

        event.recipes.thermalPress(metal.rawBlock, [`9x #forge:raw_materials/${metal.name}`, "thermal:press_packing_3x3_die"]);
      }
    }
    if (metal.ingotItem !== "") replaceIO(`#forge:ingots/${metal.name}`, metal.ingotItem);
    if (metal.dustItem !== "") {
      replaceIO(`#forge:dusts/${metal.name}`, metal.dustItem);

      if(isIELoaded) {
        if(metal.hasOre) {
          event.remove({id: `immersiveengineering:crafting/hammercrushing_${metal.name}`})
          event.remove({id: `immersiveengineering:crafting/raw_hammercrushing_${metal.name}`})

          event.shapeless(metal.dustItem, [
            [`#forge:ores/${metal.name}`, `#forge:raw_materials/${metal.name}`],
            Item.of("immersiveengineering:hammer").ignoreNBT(),
          ]);

          event.remove({type: "immersiveengineering:crusher" , output: `#forge:dusts/${metal.name}`});

          event.recipes.immersiveengineeringCrusher(`2x ${metal.dustItem}`, `#forge:ores/${metal.name}`)
          event.recipes.immersiveengineeringCrusher(`${metal.dustItem}`, `#forge:ingots/${metal.name}`)
          if(!Ingredient.of(`#forge:storage_blocks/raw_${metal.name}`).isEmpty()) {
            event.recipes.immersiveengineeringCrusher(`12x ${metal.dustItem}`, `#forge:storage_blocks/raw_${metal.name}`)
          }
          event.recipes.immersiveengineeringCrusher(`${metal.dustItem}`, `#forge:raw_materials/${metal.name}`, [Item.of(metal.dustItem).withChance(0.3333)])
        }
      }

      if(isFTBICLoaded) {
        event.remove({type: "ftbic:macerating", output: `#forge:dusts/${metal.name}`});

        event.recipes.ftbic.macerating(`2x ${metal.dustItem}`, `#forge:ores/${metal.name}`)
        event.recipes.ftbic.macerating(`${metal.dustItem}`, `#forge:ingots/${metal.name}`)
        if(!Ingredient.of(`#forge:storage_blocks/raw_${metal.name}`).isEmpty()) {
          event.recipes.ftbic.macerating(`12x ${metal.dustItem}`, `#forge:storage_blocks/raw_${metal.name}`)
        }
        event.recipes.ftbic.macerating([`${metal.dustItem}`, Item.of(metal.dustItem).withChance(0.3333)], `#forge:raw_materials/${metal.name}`)
      }

      if(isMekanismLoaded) {
        event.remove({type: "mekanism:crushing", output: `#forge:dusts/${metal.name}`});

        event.recipes.mekanismCrushing(`${metal.dustItem}`, `#forge:ingots/${metal.name}`)


        event.remove({type: "mekanism:enriching", output: `#forge:dusts/${metal.name}`});

        event.recipes.mekanismEnriching(`2x ${metal.dustItem}`, `#forge:ores/${metal.name}`)
        event.recipes.mekanismEnriching(`12x ${metal.dustItem}`, `#forge:storage_blocks/raw_${metal.name}`)
        event.recipes.mekanismEnriching(`${metal.dustItem}`, `#mekanism:dirty_dusts/${metal.name}`)
        event.recipes.mekanismEnriching(`4x ${metal.dustItem}`, `3x #forge:raw_materials/${metal.name}`)
      }

      if(isThermalLoaded) {
        event.remove({type: "thermal:pulverizer", output: `#forge:dusts/${metal.name}`});

        event.recipes.thermal.pulverizer([
            `2x ${metal.dustItem}`,
            Item.of("minecraft:gravel").withChance(0.2)
        ], `#forge:ores/${metal.name}`);

        event.recipes.thermal.pulverizer(`${metal.dustItem}`, `#forge:ingots/${metal.name}`)
        if(!Ingredient.of(`#forge:storage_blocks/raw_${metal.name}`).isEmpty()) {
          event.recipes.thermal.pulverizer(`12x ${metal.dustItem}`, `#forge:storage_blocks/raw_${metal.name}`)
        }
        event.recipes.thermal.pulverizer([`${metal.dustItem}`, Item.of(metal.dustItem).withChance(0.3333)], `#forge:raw_materials/${metal.name}`)
      }

    }
    if (metal.nuggetItem !== "") {
      replaceIO(`#forge:nuggets/${metal.name}`, metal.nuggetItem)

      if(metal.ingotItem !== ""){
        event.remove({ type: "minecraft:crafting_shapeless", output: `#forge:nuggets/${metal.name}`, input: `#forge:ingots/${metal.name}` });
        event.remove({ type: "minecraft:crafting_shaped", output: `#forge:nuggets/${metal.name}`, input: `#forge:ingots/${metal.name}`});

        event.shapeless(`9x ${metal.nuggetItem}`, `#forge:ingots/${metal.name}`)
      }


      if(isOreBerriesLoaded){
        event.remove({type: "oreberriesreplanted:vat", output: `#forge:nuggets/${metal.name}`});

        if(Item.exists(`oreberriesreplanted:${metal.name}_oreberry`)) {
          event.recipes.oreberriesreplanted.vat({
            "ingredient": {
              "item": `oreberriesreplanted:${metal.name}_oreberry`
            },
            "fluid": `oreberriesreplanted:${metal.name}_oreberry_juice`,
            "result": {
              "item": metal.nuggetItem
            },
            "evaporationtime": 100
          })
        }
      }
    }
    if (metal.blockItem !== "") replaceIO(`#forge:storage_blocks/${metal.name}`, metal.blockItem);
    if (metal.plateItem !== "") {
      event.remove({not: { id: "create:sequenced_assembly/precision_mechanism" }, output: `#forge:plates/${metal.name}`});

      if(isIELoaded) {
        event.remove({id: `immersiveengineering:crafting/plate_${metal.name}_hammering`})
        event.shapeless(metal.plateItem, [
          `#forge:ingots/${metal.name}`,
          Item.of("immersiveengineering:hammer").ignoreNBT(),
        ]);

        event.recipes.immersiveengineeringMetalPress(
            metal.plateItem,
            `#forge:ingots/${metal.name}`,
            "immersiveengineering:mold_plate"
        );
      }

      if(isThermalLoaded) {
        event.recipes.thermalPress(metal.plateItem, [`#forge:ingots/${metal.name}`]);
      }

      if(isFTBICLoaded) {
        event.recipes.ftbic.rolling(`2x ${metal.plateItem}`, [`#forge:ingots/${metal.name}`])
      }

      if(isCreateLoaded) {
        event.recipes.createPressing(metal.plateItem, [`#forge:ingots/${metal.name}`]);
      }

      if(isTinkersLoaded) {
        if(Fluid.exists(`tconstruct:molten_${metal.name}`)) {
          event.recipes
              .tconstructCastingTable(metal.plateItem, `tconstruct:molten_${metal.name}`, 90)
              .singleUseCast("plate")
              .coolingTime(60);

          event.recipes
              .tconstructCastingTable(metal.plateItem, `tconstruct:molten_${metal.name}`, 90)
              .multiUseCast("plate")
              .coolingTime(60);
        }
      }

      event.replaceInput(`#forge:plates/${metal.name}`, `#forge:plates/${metal.name}`)
    }
    if (metal.rodsItem !== "") {
      event.remove({ output: `#forge:rods/${metal.name}` });

      event.shaped(Item.of(metal.rodsItem, 2), ["I", "I"], {
        I: `#forge:ingots/${metal.name}`,
      });

      if(isIELoaded) {
        event.recipes.immersiveengineeringMetalPress(
            Item.of(metal.rodsItem, 2),
            `#forge:ingots/${metal.name}`,
            "immersiveengineering:mold_rod"
        );
      }

      if(isCreateAddLoaded) {
        event.recipes.createaddition.rolling({
          "input": Ingredient.of(`#forge:ingots/${metal.name}`).toJson(),
          "result": Item.of(`2x ${metal.rodsItem}`).toResultJson(),
        })
      }

      if(isFTBICLoaded) {
        event.recipes.ftbic.extruding(`2x ${metal.rodsItem}`, [`#forge:ingots/${metal.name}`])
      }

      event.replaceInput(`#forge:rods/${metal.name}`, `#forge:rods/${metal.name}`)
    }
    if (metal.gearItem !== "") {
      event.remove({ output: `#forge:gears/${metal.name}` });

      event.shaped(metal.gearItem, [" I ", "INI", " I "], {
        I: `#forge:ingots/${metal.name}`,
        N: "minecraft:iron_nugget"
      });

      if(isIELoaded) {
        event.recipes.immersiveengineering.metal_press(
            metal.gearItem,
            `4x #forge:ingots/${metal.name}`,
            "immersiveengineering:mold_gear"
        );
      }

      if(isFTBICLoaded) {
        event.recipes.ftbic.extruding(metal.gearItem, [`8x #forge:plates/${metal.name}`])
      }

      if(isThermalLoaded) {
        event.recipes.thermalPress(metal.gearItem, [`4x #forge:ingots/${metal.name}`, "thermal:press_gear_die"]);
      }

      if(isTinkersLoaded) {
        if(Fluid.exists(`tconstruct:molten_${metal.name}`)) {
          event.recipes
              .tconstructCastingTable(metal.gearItem, `tconstruct:molten_${metal.name}`, 360)
              .singleUseCast("gear")
              .coolingTime(60);

          event.recipes
              .tconstructCastingTable(metal.gearItem, `tconstruct:molten_${metal.name}`, 360)
              .multiUseCast("gear")
              .coolingTime(60);
        }
      }

      event.replaceInput(`#forge:gears/${metal.name}`, `#forge:gears/${metal.name}`)
    }

    event.remove({
      output: `#forge:ingots/${metal.name}`,
      type: "minecraft:smelting",
    });
    event.remove({
      output: `#forge:ingots/${metal.name}`,
      type: "minecraft:blasting",
    });

    if (metal.ingotItem !== "") {
      if(metal.nuggetItem !== ""){
        event.remove({ type: "minecraft:crafting_shapeless", output: `#forge:ingots/${metal.name}`, input: `#forge:nuggets/${metal.name}` });
        event.remove({ type: "minecraft:crafting_shaped", output: `#forge:ingots/${metal.name}`, input: `#forge:nuggets/${metal.name}`});

        event.shaped(`${metal.ingotItem}`, [
            'nnn',
            'nnn',
            'nnn'
        ], {
          n:`#forge:nuggets/${metal.name}`
        })
      }

      let smeltInput = [];

      if (metal.dustItem !== "") {
        smeltInput.push(`#forge:dusts/${metal.name}`);
      }

      if (metal.hasOre) {
        smeltInput.push(`#forge:ores/${metal.name}`);
        smeltInput.push(`#forge:raw_materials/${metal.name}`);
      }

      if (metal.crushedItem !== "") {
        smeltInput.push(metal.crushedItem)
      }

      if (smeltInput.length > 0) {
        smelting(metal.ingotItem, smeltInput).xp(0.7);
        blasting(metal.ingotItem, smeltInput).xp(0.7);
      }

      if (metal.crushedItem != "" && metal.hasOre) {
        event.remove({input: `#forge:raw_materials/${metal.name}`, output:metal.crushedItem})
        event.recipes.createCrushing([metal.crushedItem, Item.of('create:experience_nugget').withChance(0.75)], `#forge:raw_materials/${metal.name}`)
      }
    }
  })

  //event.remove({ id: "immersiveengineering:crafting/stick_iron" });
  //event.remove({ id: "immersiveengineering:crafting/stick_aluminum" });
  event.remove({ id: "immersiveengineering:crafting/storage_aluminum_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_silver_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_lead_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_nickel_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_uranium_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_constantan_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_electrum_to_slab" });
  event.remove({ id: "immersiveengineering:crafting/storage_steel_to_slab" });
  //event.remove({ id: "immersiveengineering:crafting/stick_steel" });

  replaceIO("#forge:silicon", "ae2:silicon");
  replaceIO('#forge:dusts/ender', 'thermal:ender_dust');
  replaceIO('#forge:dusts/ender_pearl', 'thermal:ender_dust');
  replaceIO('#forge:dusts/ender', 'thermal:ender_dust');
  replaceIO('#forge:dusts/lapis', 'thermal:lapis_dust');
  replaceIO('#forge:dusts/diamond', 'thermal:diamond_dust');
  replaceIO('#forge:dusts/emerald', 'thermal:emerald_dust');
  replaceIO('#forge:dusts/quartz', 'thermal:quartz_dust');
  replaceIO('#forge:storage_blocks/charcoal', "thermal:charcoal_block");

  event.replaceOutput("farmersdelight:beetroot_crate", "thermal:beetroot_block")
  event.replaceOutput("farmersdelight:potato_crate", "thermal:potato_block")
  event.replaceOutput("farmersdelight:carrot_crate", "thermal:carrot_block")
  event.replaceOutput("quark:apple_crate", "thermal:apple_block")

  event.replaceInput("farmersdelight:beetroot_crate", "thermal:beetroot_block")
  event.replaceInput("farmersdelight:potato_crate", "thermal:potato_block")
  event.replaceInput("farmersdelight:carrot_crate", "thermal:carrot_block")
  event.replaceInput("quark:apple_crate", "thermal:apple_block")

  //replaceIO("#forge:rubber", "ftbic:rubber");
  //replaceIO("#forge:storage_blocks/bamboo", "bambooeverything:bamboo_bundle");

  event.replaceOutput("mekanism:tin_ore", "thermal:tin_ore")
  event.replaceOutput("immersiveengineering:ore_uranium", "mekanism:uranium_ore")
  event.replaceOutput("mekanism:lead_ore", "thermal:lead_ore")
  //event.replaceOutput("immersiveengineering:ore_aluminum", "ftbic:aluminum_ore")
  event.replaceOutput("immersiveengineering:ore_lead", "thermal:lead_ore")
  event.replaceOutput("immersiveengineering:ore_uranium", "mekanism:uranium_ore")
  event.replaceOutput("mekanism:deepslate_tin_ore", "thermal:deepslate_tin_ore")
  event.replaceOutput("immersiveengineering:deepslate_ore_uranium", "mekanism:deepslate_uranium_ore")
  event.replaceOutput("mekanism:deepslate_lead_ore", "thermal:deepslate_lead_ore")
  //event.replaceOutput("immersiveengineering:deepslate_ore_aluminum", "ftbic:deepslate_aluminum_ore")
  event.replaceOutput("immersiveengineering:deepslate_ore_lead", "thermal:deepslate_lead_ore")
  event.replaceOutput("immersiveengineering:deepslate_ore_uranium", "thermal:deepslate_uranium_ore")
});

onEvent("tags.items", (event) => {
  event.add('forge:rubber', [
    "thermal:cured_rubber"
  ])
  event.add('forge:dusts/ender', 'thermal:ender_pearl_dust')
  event.add('forge:dusts/ender_pearl', 'thermal:ender_pearl_dust')
  event.add('forge:eggs', 'duckling:duck_egg')

  event.add('forge:dusts', ['kubejs:zinc_dust','kubejs:cobalt_dust'])
  event.add('forge:dusts/cobalt', 'kubejs:cobalt_dust')
  event.add('forge:dusts/zinc', 'kubejs:zinc_dust')

  event.add('create:crushed_ores', 'kubejs:crushed_cobalt_ore')
  //event.add('forge:storage_blocks/bamboo', "bambooeverything:bamboo_bundle")
});

onEvent("tags.fluids", (event) => {
  event.remove('minecraft:water', [
    "create:chocolate",
    "create:honey"
  ])
});