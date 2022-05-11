

function doHomework(finishedHomework){
    setTimeout(function ()  
        { finishedHomework("Maths")},0000)
        
        
    setTimeout(function ()  // 
        { finishedHomework("English") }, 5000)
    
    setTimeout(function ()  // 
        { finishedHomework("Science") }, 4000)

    setTimeout(function ()  // 
        { finishedHomework("IT") }, 10000)

    }



    doHomework(  function(subject){

        console.log("Finished my  "+ subject+"homework")
        
    })