class Traveller{// class traveller set as parent class
    constructor(name,passportNumber){//properties in this constructor are accesibale to all the class that extend 'Traveller'
        this.bags=[]//declare array of bags within traveller as one traveller can have multiple bags
        this.name=name
        this.passportNumber=passportNumber
        /* the variables are all declared using 'this' which refrences the instance of the class currently being used
        as in for this traveller their nami is ,passportNumber is ,bags are */
    }
    addBag(Bag){
        this.bags.push(Bag)
        //syntax to push an instance of a bag into bags array
    
    }
}



class Passenger extends Traveller{// passenger has become child class of traveller can now use properties declared in 'Traveller' constructor
   
  
    
    constructor(name,passportNumber,seatNumber,){
   
        super(name,passportNumber,bags)//syntax to use properties from parent class
        this.seatNumber=seatNumber
        
    }
    callAttendant(){//declaration of a method

            console.log("crew member on the way")

    } 


}

   
    


class Bag{


    constructor(weight){
        this.weight=weight
}


}
const testPassenger = new Passenger('testPassenger','Passport123','1A')//declare an object with the attributes have to use "this"
testPassenger.callAttendant()   //calls function callAttendant
const tPbag = new Bag(9)

testPassenger.addBag(tPbag)//calls function addBag
console.log()

class CrewMember extends Traveller{
    constructor(name,passportNumber,position,staffNumber){
        
        super(name,passportNumber)
        
        this.position=position
        
        this.staffNumber=staffNumber

    }
    setDoorsToManual(){

        console.log("doors have been set to manual")
    



    }


}
const testCrewMember= new CrewMember('testCrewMemeber','Passport456','flightattendent','56')
testCrewMember.setDoorsToManual()
