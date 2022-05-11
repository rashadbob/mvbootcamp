const { assertImport } = require("@babel/types");


class Bag { //declare a class name "bag"

    limit=20
    constructor(weight){ // invokes a attribute
        if (!weight){//weight less than 0 
            throw new Error ('bag must have a wieght');


        }  
            
        this.weight = weight//   has called constructor , now need to give this a value
// why is this . after the declaration
      

    }
        isOverLimit(){

            if (this.weight>this.limit){

                return "bag is too heavy"
            }
            return "bag is ok"
        }

}

class Passenger{//new object passenger
      
    Bags=[]//declare array of bags to store object
           //Bags is declared within another class it is a 1-M relationship declared in the 1
    constructor(PassengerName,PassportNo,PlaneSeatNo){//attributes of a passenger
   
    this.PassengerName=PassengerName//has called for these values within the constructor and now needs to provide the values (done outside the class)
    this.PassportNo=PassportNo
    this.PlaneSeatNo=PlaneSeatNo

    }

    addBag(Bag){//function addBag
        this.Bags.push(Bag)//syntax to add a bag

    }


}
    const bob = new Passenger('Bob the builder','Passport123','1A')//declare an object with the attributes have to use "this"
    const bobsCabinBag =new Bag(9)
    const bobsHullBag = new Bag(23)
    bob.addBag(bobsCabinBag)//calls function addBag
    bob.addBag(bobsHullBag)
    
    
   module.exports= Bag
//lesson 3 begin
    class Plane{
        constructor(number){
       
            this.number=number

        }


    }

     class Runway{
        static maxPlanes =5 //max planes in an airport 
        static allPlanes = []//declared planes array in runway class as 1-M relationship (1 runway can have multiple classes)//total number of planes on the airport 

        //variables belong to runway and are shared with same value 
        constructor(){

            this.planes=[]//array used to hold current planes on the instance of the runway being used 
        }
        
        addPlane(Plane){
        Runway.allPlanes.push(Plane)//when static instead of this use class name
        this.planes.push(Plane)//'this' 
    }
    

    }

    const vcl1 = new Plane('1')//creates plane with number 1

    const runway1=new Runway()//creates an instance of a runway
    
    runway1.addPlane(vcl1)//syntax to add to static array no need for this as its not an instance of an object


    console.log("the planes in the airport are :")
    console.log(Runway.allPlanes)//
    //?????? how to do it so we ouptut what planes are in runway1

    console.log("the planes on runway 1 is:")
    console.log(runway1.planes)

//lesson 3 end

    try {
    const bag = new Bag(16)//runs through bag class with weight as 16

    
} catch  {

    alert("error")
    //handle error
   // in theory nothing needs to be said
}

