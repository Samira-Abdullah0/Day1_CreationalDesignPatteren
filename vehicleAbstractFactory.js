class AbstractVehicleFactory {
  createCar()   
  { throw new Error("need to implement createCar()!");   }
  createBike()  
  { throw new Error("need to implement createBike()!");  }
  createTruck() 
  { throw new Error("need to implement createTruck()!"); }
}

export default AbstractVehicleFactory;