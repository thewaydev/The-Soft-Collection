ServerEvents.recipes(FurryModpack => {


    FurryModpack.shapeless(
        Item.of('ftbquests:lootcrate', '{type:"gambling"}'),
        [
            'kubejs:gambling_coin',
            'kubejs:gambling_coin',
            'kubejs:gambling_coin'
        ]
    )


    FurryModpack.shaped('kubejs:supreme_iron_block', [

        'ABC',
        'DEF',
        'EEE'
    ],
    {
        A: 'compressium:coal_9',
        B: 'compressium:diamond_9',
        C: 'compressium:obsidian_9',
        D: 'projecte:klein_star_omega',
        E: 'compressium:iron_9',
        F: 'ae2:singularity'
    })

    FurryModpack.shaped('kubejs:supreme_stone_block', [
        'ABC',
        'DED',
        'FGH'
    ],
    {
        A: 'compressium:cobblestone_9',
        B: 'compressium:dirt_9',
        C: 'compressium:endstone_9',
        D: 'mekanism:pellet_antimatter',
        E: 'enderio:reinforced_obsidian_block',
        F: 'compressium:andesite_9',
        G: 'compressium:diorite_9',
        H: 'compressium:granite_9'
    })

    FurryModpack.shaped('kubejs:gambling_coin', [
        'ACA',
        'CBC',
        'ACA'
    ],
    {
        A: 'bigreactors:cyanite_ingot',
        B: 'compressium:iron_3',
        C: 'mekanism:alloy_atomic'
    })



})