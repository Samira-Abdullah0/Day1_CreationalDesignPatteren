import AbstractVehicleFactory from "./vehicleAbstractFactory.js";

class PetrolCar {
  drive() { console.log(" Petrol car — vroom vroom!"); }
  refuel(){ console.log(" Filling up at gas station..."); }
}

class PetrolBike {
  ride()  { console.log(" Petrol bike — fast & loud!"); }
  refuel(){ console.log(" Quick refuel..."); }
}

class PetrolTruck {
  haul()  { console.log("Petrol truck — heavy duty!"); }
  refuel(){ console.log(" Big tank, lots of fuel..."); }
}

class PetrolVehicleFactory extends AbstractVehicleFactory {
  createCar()   { return new PetrolCar();   }
  createBike()  { return new PetrolBike();  }
  createTruck() { return new PetrolTruck(); }
}

export default PetrolVehicleFactory;