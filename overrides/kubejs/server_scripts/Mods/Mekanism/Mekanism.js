ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'mekanism:steel_casing'})
    FurryModpack.remove({ output: 'mekanism:metallurgic_infuser'})
    FurryModpack.remove({ output: 'mekanism:enrichment_chamber'})
    FurryModpack.remove({ output: 'mekanism:osmium_compressor'})
    FurryModpack.remove({ output: 'mekanism:elite_control_circuit'})
    FurryModpack.remove({ output: 'mekanism:ultimate_control_circuit'})

    FurryModpack.shaped('mekanism:steel_casing', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:ingots/steel',
        B: '#forge:glass',
        C: 'minecraft:redstone_block',
        D: 'thermal:machine_frame'
    })


    FurryModpack.shaped('mekanism:metallurgic_infuser', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:ingots/steel',
        B: '#forge:glass',
        C: 'mekanism:ingot_osmium',
        D: 'mekanism:steel_casing'
    })

    FurryModpack.shaped('mekanism:enrichment_chamber', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'minecraft:redstone',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:enrichment_chamber',
        D: 'mekanism:steel_casing'
    })

    FurryModpack.shaped('mekanism:osmium_compressor', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:ingots/steel',
        B: 'mekanism:advanced_control_circuit',
        C: 'mekanism:enrichment_chamber',
        D: 'mekanism:steel_casing'
    })

    FurryModpack.shaped('mekanism:elite_control_circuit', [

        ' A ',
        'BCB',
        ' D '
    ],
    {
        A: 'mekanism:ingot_refined_glowstone',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_control_circuit',
        D: '#forge:ingots/steel'
    })

    FurryModpack.shaped('mekanism:ultimate_control_circuit', [

        ' A ',
        'BCB',
        ' D '
    ],
    {
        A: 'mekanism:ingot_refined_glowstone',
        B: 'mekanism:alloy_atomic',
        C: 'mekanism:elite_control_circuit',
        D: 'mekanism:ingot_refined_obsidian'
    })

})