ServerEvents.recipes(FurryModpack => {


    FurryModpack.remove({ output: 'enderio:void_chassis'})
    FurryModpack.remove({ output: 'enderio:primitive_alloy_smelter'})
    FurryModpack.remove({ output: 'enderio:fluid_conduit'})
    FurryModpack.remove({ output: 'enderio:pressurized_fluid_conduit'})
    FurryModpack.remove({ output: 'enderio:ender_fluid_conduit'})


    
    FurryModpack.shaped('enderio:void_chassis', [

        'ABA',
        'CDC', 
        'ABA' 
    ],
    {
        A: '#forge:ingots/steel',
        B: 'enderio:dark_steel_ingot',
        C: 'enderio:grains_of_infinity',
        D: 'thermal:machine_frame'
    }

    )
  
    FurryModpack.shaped('enderio:primitive_alloy_smelter', [

        'AAA',
        'CBC', 
        'CCC' 
    ],
    {
        A: 'minecraft:furnace',
        B: 'enderio:grains_of_infinity',
        C: '#forge:ingots/steel'
    }

    )

    FurryModpack.shaped('enderio:fluid_conduit', [

        'AAA',
        'CBC', 
        'AAA' 
    ],
    {
        A: 'enderio:conduit_binder',
        B: '#enderio:clear_glass',
        C: 'enderio:vibrant_alloy_ingot'
    }

    )

    FurryModpack.shaped('enderio:pressurized_fluid_conduit', [

        'AAA',
        'CBC', 
        'AAA' 
    ],
    {
        A: 'enderio:conduit_binder',
        B: 'enderio:fluid_conduit',
        C: 'enderio:vibrant_alloy_ingot'
    }

    )

    FurryModpack.shaped('enderio:ender_fluid_conduit', [

        'AAA',
        'CBC', 
        'AAA' 
    ],
    {
        A: 'enderio:conduit_binder',
        B: 'enderio:pressurized_fluid_conduit',
        C: 'enderio:vibrant_alloy_ingot'
    }

    )



})