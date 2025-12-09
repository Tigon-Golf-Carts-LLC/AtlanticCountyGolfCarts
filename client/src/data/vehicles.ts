// Vehicle data for static site deployment
// This data is used by the frontend components to display vehicle inventory

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  specifications: {
    topSpeed: string;
    range: string;
    seatingCapacity: number;
    batteryType: string;
    chargingTime: string;
    payload: string;
  };
  features: string[];
  inStock: boolean;
  isNew: boolean;
}

// DENAGO Electric Vehicles
export const denagoVehicles: Vehicle[] = [
  {
    id: "denago-ev-city",
    name: "DENAGO EV CITY",
    brand: "DENAGO",
    category: "Street Legal",
    price: 15000,
    description: "The DENAGO EV CITY is perfect for urban adventures with street-legal capabilities and premium features.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "500 lbs"
    },
    features: ["Street Legal", "LED Lights", "Premium Sound", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "DENAGO EV NOMAD",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Built for adventure with rugged off-road capabilities and reliable performance.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["All-Terrain Tires", "LED Lighting", "Storage Compartment", "Durable Frame"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad-xl",
    name: "DENAGO EV NOMAD XL",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Extended version with 4-seater capacity for family adventures.",
    images: ["/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "600 lbs"
    },
    features: ["Extended Seating", "All-Terrain Tires", "LED Package", "Cargo Space"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "DENAGO EV ROVER XL",
    brand: "DENAGO",
    category: "Utility",
    price: 9995,
    description: "Heavy-duty utility vehicle perfect for work applications.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Heavy Duty Suspension", "Cargo Bed", "All-Terrain Package", "Work Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl6",
    name: "DENAGO EV ROVER XL6",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "6-passenger utility vehicle for large group transportation.",
    images: ["/attached_assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["6-Passenger Seating", "Heavy Duty Frame", "Extended Range", "Premium Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xxl",
    name: "DENAGO EV ROVER XXL",
    brand: "DENAGO",
    category: "Commercial",
    price: 11995,
    description: "Commercial-grade vehicle for demanding professional applications.",
    images: ["/attached_assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 2,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Commercial Grade", "Extended Range", "Heavy Payload", "Professional Package"],
    inStock: true,
    isNew: true
  }
];

// EVOLUTION Electric Vehicles
export const evolutionVehicles: Vehicle[] = [
  {
    id: "evolution-d5-ranger-4-plus",
    name: "EVOLUTION D5 RANGER 4 PLUS",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 9595,
    description: "Perfect family vehicle with 4-passenger seating and premium features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["4-Passenger Seating", "LED Light Package", "Premium Seats", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6-plus",
    name: "EVOLUTION D5 RANGER 6 PLUS",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 11595,
    description: "Extended 6-passenger vehicle for large group transportation.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger Seating", "Extended Chassis", "Premium Package", "Enhanced Suspension"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-plus",
    name: "EVOLUTION D5 MAVERICK 4 PLUS",
    brand: "EVOLUTION",
    category: "Sport",
    price: 9995,
    description: "Sport-tuned 4-passenger vehicle with enhanced performance features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135350621.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["Sport Suspension", "Performance Package", "4-Passenger", "Enhanced Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "EVOLUTION CLASSIC 4 PLUS",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Classic design with modern reliability and 4-passenger capacity.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "500 lbs"
    },
    features: ["Classic Styling", "4-Passenger", "Value Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-6-plus",
    name: "EVOLUTION CARRIER 6 PLUS",
    brand: "EVOLUTION",
    category: "Utility",
    price: 9595,
    description: "6-passenger utility vehicle perfect for commercial transportation needs.",
    images: ["/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["6-Passenger Transport", "Utility Package", "Extended Range", "Commercial Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt4",
    name: "EVOLUTION D6 MAX XT4",
    brand: "EVOLUTION",
    category: "Premium",
    price: 15595,
    description: "Premium 4-passenger vehicle with luxury features and extended range.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "50 miles",
      seatingCapacity: 4,
      batteryType: "96V Lithium",
      chargingTime: "8-10 hours",
      payload: "700 lbs"
    },
    features: ["Premium Package", "Extended Range", "4WD Option", "Luxury Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-4-plus",
    name: "EVOLUTION FORESTER 4 PLUS",
    brand: "EVOLUTION",
    category: "Recreation",
    price: 9595,
    description: "Versatile 4-passenger vehicle with rugged design for outdoor adventures.",
    images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["All-Terrain Capable", "4-Passenger Seating", "LED Package", "Rugged Build"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-100",
    name: "EVOLUTION TURFMAN 100",
    brand: "EVOLUTION",
    category: "Commercial",
    price: 4995,
    description: "Entry-level commercial utility vehicle for light-duty work applications.",
    images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
    specifications: {
      topSpeed: "15 mph",
      range: "25 miles",
      seatingCapacity: 2,
      batteryType: "36V Lithium",
      chargingTime: "3-4 hours",
      payload: "400 lbs"
    },
    features: ["Work Ready", "Utility Bed", "Commercial Grade", "Maintenance Package"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-200",
    name: "EVOLUTION TURFMAN 200",
    brand: "EVOLUTION",
    category: "Commercial",
    price: 5995,
    description: "Mid-range commercial vehicle with enhanced performance and capacity.",
    images: ["/attached_assets/EVOLUTIONTURFMAN200_1751893159006_1753135437837.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-5 hours",
      payload: "500 lbs"
    },
    features: ["Enhanced Performance", "Larger Bed", "Commercial Ready", "Extended Range"],
    inStock: true,
    isNew: true
  }
];

// Combined vehicle array
export const vehicles: Vehicle[] = [...denagoVehicles, ...evolutionVehicles];

// Helper functions for filtering vehicles
export function getVehiclesByBrand(brand: string): Vehicle[] {
  return vehicles.filter(v => v.brand.toUpperCase() === brand.toUpperCase());
}

export function getVehiclesByCategory(category: string): Vehicle[] {
  return vehicles.filter(v => v.category.toLowerCase() === category.toLowerCase());
}

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find(v => v.id === id);
}

export function filterVehicles(brand?: string, category?: string): Vehicle[] {
  let filtered = vehicles;

  if (brand) {
    filtered = filtered.filter(v => v.brand.toUpperCase() === brand.toUpperCase());
  }

  if (category) {
    filtered = filtered.filter(v => v.category.toLowerCase() === category.toLowerCase());
  }

  return filtered;
}

// Get featured vehicles (first 3 vehicles for homepage)
export function getFeaturedVehicles(count: number = 3): Vehicle[] {
  return vehicles.slice(0, count);
}

export default vehicles;
