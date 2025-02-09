ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'minecraft:iron_pickaxe'})

    

    FurryModpack.shaped('minecraft:iron_pickaxe', [
        'ABA',
        ' C ', 
        ' C ' 
    ],
    {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:copper_ingot',
        C: 'minecraft:stick'
    }
    )

})