ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'bloodmagic:sacrificialdagger'})


    FurryModpack.shaped('bloodmagic:sacrificialdagger', [
        'AAA',
        ' CA', 
        'B A' 
    ],
    {
        A: '#forge:glass',
        B: 'twilightforest:ironwood_ingot',
        C: 'twilightforest:raven_feather'
    }
    )


})