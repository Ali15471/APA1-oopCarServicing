export default class Vehicle {
    #completedServices;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#completedServices = new Map();
    }

    getCompletedServices() {
        return this.#completedServices;
    }

    recordCompletedService(date, serviceType) {
        this.#completedServices.set(date, serviceType);
        console.log(`✓ Completed: ${serviceType} for ${this.make} ${this.model}`);
    }

    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

export class PetrolVehicle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
        this.fuelType = "Petrol";
    }

    getMaintenanceChecklist() {
        return `Checklist for ${this.getInfo()}:
                - Check oil levels
                - Inspect spark plugs
                - Check fuel system`;
    }
}

export class ElectricVehicle extends Vehicle {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
        this.fuelType = "Electric";
    }

    getMaintenanceChecklist() {
        return `Checklist for ${this.getInfo()}:
                - Check battery health
                - Update software
                - Inspect charging system`;
    }
}

export class HybridVehicle extends Vehicle {
    constructor(make, model, year, batteryCapacity, engineSize){
        super(make, model, year);
        this.engineSize = engineSize;
        this.batteryCapacity = batteryCapacity;
        this.fuelType = "Hybrid";
    }
    getMaintenanceChecklist() {
        return `Checklist for ${this.getInfo()}:
        - Check battery health
        - Update software
        - Inspect charging system
        - Check oil levels
        - Inspect spark plugs
        - Check fuel system`;
    }
}
