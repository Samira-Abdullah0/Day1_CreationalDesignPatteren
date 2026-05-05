import ElectricVehicleFactory from "./electric.js";
import PetrolVehicleFactory   from "./petrol.js";

function buildFleet(factory) {
  const car   = factory.createCar();
  const bike  = factory.createBike();
  const truck = factory.createTruck();

  car.drive();
  bike.ride();
  truck.haul();
}

const userWantsElectric = true;

const factory = userWantsElectric? new ElectricVehicleFactory(): new PetrolVehicleFactory();

buildFleet(factory);
