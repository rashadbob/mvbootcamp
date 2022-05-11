
//fdsfdsgdgfg i am lost 


function pointSystem(getName){// passes in agrument within function
    //setTimeout(getName("ahmad"),3000)
    setTimeout(function ()  // 'function()' calls the function that has been passed through the parameters
        { getName("AHMAD") }, 3000)//passes through ahmad to function 
    
}
   
    pointSystem( 
        function(name){

        console.log('hello '+ name)
        
    })//PASS FUNCTION INTO sayHello(getName). whatever is in the bracket of sayHello is the callback i.e getName