class Bag { //declare a class name "bag"


    constructor(weight){ // invokes a attribute
        if (!weight){//weight less than 0 
            throw new Error ('bag must have a wieght');


        }  
            
        this.weight = weight// why has she done this, maybe as she has called constructor she now need to give this a value


    }


}

class Passenger{//new object passenger
      
    Bags=[]//declare array of bags to store object
    constructor(PassengerName,PassportNo,PlaneSeatNo){//attributes of a passenger
   
    this.PassengerName=PassengerName
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

//window.alert(9)
try {
    const bag = new Bag(16)//runs through bag class with weight as 16

    
} catch  {

    alert("error")
    //handle error
   // in theory nothing needs to be said
}

