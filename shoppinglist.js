(function () {
    'use strict'

    var model = null

    var shopper = function(themodel){
        if(themodel){
            themodel(function(err, response){
                if(err){
                    console.error(err)
                }else{
                    model = response
                    console.log('shopper ready')
                }
            })
        }
    }
}())