class Vehicle {
    constructor(make, model, year){
       this.make = make,
       this.model = model,
       this.year = year
    } 
   
    honk(){
       console.log('beep')
       return 'beep'
    }
   
    toString(){
       let str = `The vehicle is a ${this.make} ${this.model} from ${this.year}."`
       console.log(str)
       return str
    }
   }
   
   let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
   myFirstVehicle.honk();
   myFirstVehicle.toString(); 
   
   class Car extends Vehicle {
       
       constructor(make,model,year,numWheels){
           super(make, model, year)
           this.numWheels = numWheels
       }
   }
   
   let myFirstCar = new Car("Toyota", "Corolla", 2005, 4);
   myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
   myFirstCar.honk();     // "Beep."
   let wheels = myFirstCar.numWheels;
   console.log(wheels)

   class Motorcycle extends Vehicle {
       
    constructor(make,model,year,numWheels){
        super(make, model, year)
        this.numWheels = numWheels
    }   
    revEngine(){
        console.log('VROOM')
        return 'VROOM'
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000, 2);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
wheels = myFirstMotorcycle.numWheels; 
console.log(wheels)

class Garage {
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity
    }

    add(vehicle){
        if(this.vehicles.length  > this.capacity){
            console.log('Sorry garage is full')
            return 'Sorry garage is full'
        }
        else{
            this.vehicles.push(vehicle)
        }
    }
}
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
let g = garage.vehicles; // [Car, Motorcycle]
console.log(g)

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."