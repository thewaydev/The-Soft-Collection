ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'ae2:inscriber'})
    FurryModpack.remove({ output: 'ae2:charger'})


    FurryModpack.shaped('ae2:inscriber', [

        'ABA',
        'CDC', 
        'ABA' 

    ],
    {
        A: 'minecraft:redstone_block',
        B: 'minecraft:sticky_piston',
        C: 'minecraft:iron_ingot',
        D: 'thermal:machine_frame'
    })
    
    
    FurryModpack.shaped('ae2:charger', [

        'ABA',
        'CD', 
        'ABA' 

    ],
    {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:copper_block',
        C: 'minecraft:redstone_block',
        D: 'thermal:machine_frame'
    })


})