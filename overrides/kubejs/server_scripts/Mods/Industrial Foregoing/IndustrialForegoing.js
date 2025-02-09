ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'industrialforegoing:machine_frame_pity'})
    FurryModpack.remove({ output: 'industrialforegoing:ore_laser_base'})
    FurryModpack.remove({ output: 'industrialforegoing:fluid_laser_base'})

    FurryModpack.shaped('industrialforegoing:machine_frame_pity', [

        'ABA',
        'CDC', 
        'ABA' 

    ],
    {
        A: 'enderio:pulsating_alloy_ingot',
        B: 'minecraft:redstone_block',
        C: 'enderio:energetic_alloy_ingot',
        D: 'enderio:void_chassis'
    })

    FurryModpack.shaped('industrialforegoing:fluid_laser_base', [

        'ABA',
        'CDC',
        'EFE'
    ],
    {
        A: 'industrialforegoing:plastic',
        B: 'mekanism:ultimate_fluid_tank',
        C: 'thermal:fluid_cell',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'thermal:signalum_gear',
        F: 'minecraft:redstone_block'
    })

    FurryModpack.shaped('industrialforegoing:ore_laser_base', [

        'ABA',
        'CDC',
        'EFE'
    ],
    {
        A: 'industrialforegoing:plastic',
        B: 'enderstorage:ender_chest',
        C: 'mekanism:module_laser_dissipation_unit',
        D: 'industrialforegoing:machine_frame_advanced',
        E: 'thermal:lumium_gear',
        F: 'minecraft:redstone_block'
    })

})