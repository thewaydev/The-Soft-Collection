ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'powah:dielectric_paste'})
    FurryModpack.remove({ output: 'powah:capacitor_basic'})
    FurryModpack.remove({ output: 'powah:capacitor_hardened'})
    FurryModpack.remove({ output: 'powah:capacitor_blazing'})
    FurryModpack.remove({ output: 'powah:capacitor_niotic'})
    FurryModpack.remove({ output: 'powah:capacitor_spirited'})
    FurryModpack.remove({ output: 'powah:capacitor_nitro'})
    FurryModpack.remove({ output: 'powah:ender_gate_basic'})
    FurryModpack.remove({ output: 'powah:ender_gate_hardened'})
    FurryModpack.remove({ output: 'powah:ender_gate_blazing'})


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

    FurryModpack.shaped('powah:capacitor_niotic', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_niotic',
        C: 'powah:capacitor_blazing',
        D: 'mysticalagriculture:diamond_essence'
    })

    FurryModpack.shaped('powah:capacitor_spirited', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_spirited',
        C: 'powah:capacitor_niotic',
        D: 'compressium:emerald_1'
    })

    FurryModpack.shaped('powah:capacitor_nitro', [

        'DBA',
        'BCB',
        'ABD'
    ],
    {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_nitro',
        C: 'powah:capacitor_spirited',
        D: 'compressium:redstone_2'
    })

    FurryModpack.shaped('powah:ender_gate_basic', [

        'ACA',
        'BDB',
        'ACA'
    ],
    {
        A: 'minecraft:obsidian',
        B: 'powah:ender_gate_starter',
        C: 'powah:energy_cable_basic',
        D: 'powah:ender_core'
    })

    FurryModpack.shaped('powah:ender_gate_hardened', [

        'ACA',
        'BDB',
        'ACA'
    ],
    {
        A: 'minecraft:obsidian',
        B: 'powah:ender_gate_basic',
        C: 'powah:energy_cable_hardened',
        D: 'powah:ender_core'
    })

    FurryModpack.shaped('powah:ender_gate_blazing', [

        'ACA',
        'BDB',
        'ACA'
    ],
    {
        A: 'minecraft:obsidian',
        B: 'powah:ender_gate_hardened',
        C: 'powah:energy_cable_blazing',
        D: 'powah:ender_core'
    })


})