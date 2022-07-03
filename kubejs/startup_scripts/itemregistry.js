onEvent('item.registry', event => {
    event.create('rubber_sheet').displayName('Cured Rubber Sheet')
    event.create('cobalt_dust').displayName('Cobalt Dust')
    event.create('zinc_dust').displayName('Zinc Dust')
    event.create('crushed_cobalt_ore').displayName('Crushed Cobalt Ore')
    event.create('collectable_missilecard').displayName('Collectable - Missile`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
    event.create('collectable_shinycard').displayName('Collectable - Shiny`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
    event.create('collectable_pokelockercard').displayName('Collectable - Pokelocker`s card').rarity('epic').tooltip('One of the three rare cards you can only find very rarely in End Cities.')
})