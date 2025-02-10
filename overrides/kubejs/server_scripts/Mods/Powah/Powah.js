ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'powah:dielectric_paste'})
    FurryModpack.remove({ output: 'powah:capacitor_basic'})
    FurryModpack.remove({ output: 'powah:capacitor_hardened'})
    FurryModpack.remove({ output: 'powah:capacitor_blazing'})


    FurryModpack.shapeless(
        Item.of('powah:dielectric_paste', 12),
        [
            'thermal:refined_fuel_bucket',
            'minecraft:coal_block', 	       
            'minecraft:blaze_powder',
            'minecraft:slime_ball'
        ]
    )

    
    FurryModpack.shaped('powah:capacitor_basic', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'minecraft:iron_block',
        C: 'compressium:redstone_1',
        D: 'minecraft:gold_ingot'
    })

    FurryModpack.shaped('powah:capacitor_hardened', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'minecraft:iron_block',
        C: 'compressium:redstone_1',
        D: 'minecraft:gold_ingot'
    })

    FurryModpack.shaped('powah:capacitor_blazing', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_blazing',
        C: 'powah:capacitor_hardened',
        D: 'mysticalagriculture:blaze_essence'
    })



})