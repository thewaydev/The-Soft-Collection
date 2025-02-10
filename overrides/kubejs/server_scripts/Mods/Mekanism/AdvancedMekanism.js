ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'mekanismgenerators:fission_reactor_casing'})


    FurryModpack.shaped('4x mekanismgenerators:fission_reactor_casing', [

        'ABA ',
        'BCB',
        'ABA'
    ],
    {
        A: 'mekanism:hdpe_sheet',
        B: '#forge:ingots/lead',
        C: 'mekanism:steel_casing'
    })



})