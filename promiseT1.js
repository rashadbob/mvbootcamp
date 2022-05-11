function pointSystem() {
    return new Promise(function (resolve, reject) { // promise constructor takes a callback with two functions 
        
            
        setTimeout(function () {
        
            if (randomNumber(0,2)==1) //Function returns 1 or 0
            {
                console.log("Test work")
                resolve("we got cakes!");
            } 
            if (randomNumber(0,2)==0)
            {
                console.log("test work")
                reject("We hungry...");
            }
        }, 5000);
   
    });

}

function randomNumber(min, max) { //function used to create number between 0 and 1 
 
    return  rndInt = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    //how doe we store random math number in variable
}

pointSystem()//callback
    .then(function (success) {//function (success) === resolve("amazing")
        console.log(success);//success = amazing
       
    })// callback executed when promise is resolved (in our case when fiftyFifty() returns 1 )
        // .then runs for resolve
    .catch(function (error) {
        console.error(error);
        
    })// callback executed when promise is rejected
        //.catch runs for reject
    .finally(() => {
        console.log("time to party");

        console.log("rndInt : "+rndInt);

    });