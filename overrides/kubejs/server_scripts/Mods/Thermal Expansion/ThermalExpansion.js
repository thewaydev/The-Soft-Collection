ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'thermal:machine_frame'})


    FurryModpack.shaped('thermal:machine_frame', [

        'ABA',
        'CDC', 
        'ABA' 

    ],
    {
        A: '#forge:ingots/steel',
        B: 'minecraft:redstone_block',
        C: 'minecraft:glass',
        D: 'immersiveengineering:cokebrick'
    })
})