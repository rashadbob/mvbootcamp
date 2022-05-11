const Maths = require("./maths")
let x=10
//callBackTask1V2 aims for a rundown timer log implementation
function doHomework(finishedHomework){
        
                //below is syntax to invoke function can also use =>
    setTimeout(function ()  // finishedHomework("Maths") === (equivelent to) function(subject)
    { finishedHomework("Maths")},2000)//sets subject to maths 2 seconds in 
    
    
    setTimeout(function ()  // 
    { finishedHomework("English") }, 5000)

    setTimeout(function ()  // 
    { finishedHomework("Science") }, 4000)

    setTimeout(function ()  // 
    { finishedHomework("IT") }, 10000)
        // { startHomework("test")}, time,)
        
        
    }
    var timer =setInterval(function(){// what takes place in this function
        x--//x=x-1
        console.log("current time"+x)
        if(x<=0){
            clearInterval(timer)//used to reset time when condition is met 
        }
    },1000,//every 1 second function is ran
    // create a timer that reduces var 'x' ever 1s (1000ns)
    )

    

   

    doHomework(  function(subject){
   
       if(subject==="Maths"||subject==="Science"||subject==="English"||subject==="IT"){
        console.log("finished my  "+ subject+" homework")
       }   
     
        
    })


    