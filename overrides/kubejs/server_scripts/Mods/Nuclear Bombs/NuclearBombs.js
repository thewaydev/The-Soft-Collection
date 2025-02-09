ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'nuclear_bombs:nuke' })


    FurryModpack.shaped('nuclear_bombs:nuke', [
        'ACB',
        'DED', 
        'BCA' 
    ],
    {
        A: 'enderio:end_steel_ingot',
        B: 'ars_nouveau:source_gem_block',
        C: 'bigreactors:cyanite_ingot',
        D: 'mysticalagriculture:imperium_essence',
        E: 'estrogen:gender_fluid_bucket'
    }
    )

    


})