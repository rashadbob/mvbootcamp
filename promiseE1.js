function pointSystem() {
    return new Promise(function (resolve, reject) { // promise constructor takes a callback with two functions 
        
        setTimeout(function () {
        
            if (randomNumber()) //Function returns 1 or 0
            {
                resolve("Amazing!");
            } else {
                reject("We messed up somewhere...");
            }
        }, 5000);
    
    });

}

function randomNumber(min, max) { //function used to create number between 0 and 1 
    min = 0; // min >= 0
    max = 2; // max < 2(so <=1)
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

pointSystem()//callback
    .then(function (success) {//function (success) === resolve("amazing")
        console.log(success);//success = amazing
    })// callback executed when promise is resolved (in our case when fiftyFifty() returns 1 )
    
    .catch(function (error) {
        console.error(error);
    })// callback executed when promise is rejected
    
    .finally(() => {
        console.log("Done");
    });
