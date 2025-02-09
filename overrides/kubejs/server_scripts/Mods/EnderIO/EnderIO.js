ServerEvents.recipes(FurryModpack => {


    FurryModpack.remove({ output: 'enderio:void_chassis'})
    FurryModpack.remove({ output: 'enderio:primitive_alloy_smelter'})

    
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




})