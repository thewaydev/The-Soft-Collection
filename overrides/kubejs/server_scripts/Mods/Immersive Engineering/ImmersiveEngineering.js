ServerEvents.recipes(FurryModpack => {

    FurryModpack.remove({ output: 'immersiveengineering:capacitor_lv' })
    FurryModpack.remove({ output: 'immersiveengineering:capacitor_mv' })
    FurryModpack.remove({ output: 'immersiveengineering:capacitor_hv' })
    
    
    FurryModpack.shaped('immersiveengineering:capacitor_lv', [
        'ABA',
        'DCD', 
        'ABA' 
    ],
    {
        A: '#forge:treated_wood',
        B: '#forge:plates/lead',
        C: '#forge:ingots/electrum',
        D: '#forge:ingots/steel'
    }
    )

    FurryModpack.shaped('immersiveengineering:capacitor_mv', [
        'ABA',
        'DCD', 
        'EDE' 
    ],
    {
        A: '#forge:ingots/steel',
        B: '#forge:plates/nickel',
        C: 'immersiveengineering:capacitor_lv',
        D: 'immersiveengineering:wirecoil_electrum_ins',
        E: '#forge:plates/iron'
    }
    )

    FurryModpack.shaped('immersiveengineering:capacitor_hv', [
        'ABA',
        'DCD', 
        'EDE' 
    ],
    {
        A: '#forge:plates/steel',
        B: 'immersiveengineering:redstone_acid_bucket',
        C: 'immersiveengineering:capacitor_mv',
        D: 'immersiveengineering:wirecoil_steel',
        E: 'immersiveengineering:ingot_hop_graphite'
    }
    )
})