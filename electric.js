import AbstractVehicleFactory from "./vehicleAbstractFactory.js";

class ElectricCar {
  drive()  { console.log(" Electric car — silent & fast!"); }
  charge() { console.log("Charging at station..."); }
}

class ElectricBike {
  ride()   { console.log("Electric bike — eco-friendly!"); }
  charge() { console.log("Charging battery..."); }
}

class ElectricTruck {
  haul()   { console.log("Electric truck — heavy load!"); }
  charge() { console.log("Charging big battery..."); }
}


class ElectricVehicleFactory extends AbstractVehicleFactory {
  createCar()   { return new ElectricCar();   }
  createBike()  { return new ElectricBike();  }
  createTruck() { return new ElectricTruck(); }
}

export default ElectricVehicleFactory;