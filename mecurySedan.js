//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends VehicleModule.Vehicle{
    constructor() {
        super("Mecury", "Sedan", "1965", "color", "mileage");
        maximumPassengers = 5;
        numberOfWheels = 4;
        maximumSpeed = 160;
        fuel = 10;
        scheduleService = false;
    }

    loadPassenger(num) {
        if ((maximumPassengers - this.passenger)> num){
            this.passenger += num;
        } else {
            console.log('No room!');
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    scheduleService(mileage) {
        if (mileage > 30000){
            this.scheduleService = true;
        } else {
            this.scheduleService = false;
        }
    }
}