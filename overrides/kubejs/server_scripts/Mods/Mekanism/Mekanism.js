ServerEvents.recipes(FurryModpack => {
    

    FurryModpack.remove({ output: 'mekanism:steel_casing'})
    FurryModpack.remove({ output: 'mekanism:metallurgic_infuser'})
    FurryModpack.remove({ output: 'mekanism:enrichment_chamber'})
    FurryModpack.remove({ output: 'mekanism:osmium_compressor'})
    FurryModpack.remove({ output: 'mekanism:elite_control_circuit'})
    FurryModpack.remove({ output: 'mekanism:ultimate_control_circuit'})
    FurryModpack.remove({ output: 'mekanism:electrolytic_separator'})
    FurryModpack.remove({ output: 'mekanism:pressurized_reaction_chamber'})
    FurryModpack.remove({ output: 'mekanism:rotary_condensentrator'})
    

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

    FurryModpack.shaped('mekanism:electrolytic_separator', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:ingots/steel',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:alloy_atomic',
        D: 'mekanism:steel_casing'
    })

    FurryModpack.shaped('mekanism:pressurized_reaction_chamber', [

        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:ultimate_chemical_tank',
        D: 'mekanism:steel_casing'
    })

    FurryModpack.shaped('mekanism:rotary_condensentrator', [

        'ABA',
        'CDE',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:ultimate_chemical_tank',
        D: 'mekanism:steel_casing',
        E: 'mekanism:ultimate_fluid_tank'
    })



})