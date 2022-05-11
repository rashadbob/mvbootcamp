//ice cream bar 

function toppingChoice(){
    return new Promise(function(customer){// declare promise with callback with one function(customer)
        setTimeout(function(){
            console.log("i will have....")
        
        },2000) 
        setTimeout(function(){customer("choclate\npeanut butter")}, 3000)
   
    });




    }

    async function kitchen(){// async function allows use of await


        console.log("what topping would you like")
        const topping = await toppingChoice()//create an await , here we call toppingChoice function ,however we still read through the rest of the code (lines 28-30)
        
        console.log(topping)//print topping => print contents of promise


    }



kitchen()//call kitchen functions
console.log("doing the dishes")
console.log("cleaning tables")
console.log("taking orders")


    

