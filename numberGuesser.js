//assignment2

function pointSystem(){
    userNumber = 4

    return new Promise(function (resolve, reject) { // promise constructor takes a callback with two functions 
        
            
        setTimeout(function () {
        
            if (randomNumber()==userNumber+1||randomNumber()==userNumber-1) //Function returns 1 or 0
            {
              
          
                resolve("you have earned 1 point")
            } 
            else if (randomNumber()===userNumber)
            {
               
                reject("you have 2 points")
            }

            else if(randomNumber()!=userNumber)
            {
              
                reject("you have zero points")
            }
        }, 5000)
   
    })


}
function randomNumber(min, max) { //function used to create number between 0 and 1 
    min=4
    max=5
    return  rndInt = Math.floor(Math.random() * (max - min) + min)//The maximum is exclusive and the minimum is inclusive
    //how doe we store random math number in variable
}

pointSystem()//callback
    .then(function (success) {//function (success) === resolve("amazing")
        console.log(success)//success = amazing
       
    })// callback executed when promise is resolved (in our case when fiftyFifty() returns 1 )
        // .then runs for resolve
    .catch(function (error) {
        console.error(error)
        
    })// callback executed when promise is rejected
        //.catch runs for reject
    .finally(() => {
       

        console.log("rndInt : "+rndInt)

    })