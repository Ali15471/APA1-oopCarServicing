import { PetrolVehicle, ElectricVehicle, HybridVehicle } from './vehicles.js';
import ServiceCentre from './serviceCentre.js';

const main = () => {
    const serviceCenter = new ServiceCentre();

    const tesla = new ElectricVehicle("Tesla", "Model 3", 2023, "75kWh");
    const bmw = new PetrolVehicle("BMW", "M5", 2022, "4.4L");
    const Toyota = new HybridVehicle("Toyota", "Prius", 2019, "1.5L")

    // Schedule future services
    console.log("\nScheduling services:");
    serviceCenter.scheduleService(tesla, "basic");
    serviceCenter.scheduleService(bmw, "full");

    // Record completed services
    console.log("\nRecording completed services:");
    tesla.recordCompletedService("2023-01-01", "Software Update v2.1");
    bmw.recordCompletedService("2023-02-01", "Oil Change");

    // Process all planned services
    serviceCenter.processPlannedServices();

    serviceCenter.calculateServiceCosts(bmw);
};

main();