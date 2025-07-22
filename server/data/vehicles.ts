import type { Vehicle } from "@shared/schema";

export const vehicleData: Vehicle[] = [
  {
    id: "evolution-d5-maverick-4-plus",
    name: "Evolution D5 Maverick 4 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 12995,
    description: "Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Premium Seating", "LED Lighting", "USB Charging", "All-Terrain Tires"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-gt4",
    name: "Evolution D6 Max GT4",
    brand: "EVOLUTION",
    category: "Performance Series",
    price: 16995,
    description: "High-performance 4-passenger golf cart with cutting-edge technology and sporty design.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg"],
    specifications: {
      topSpeed: "25+ mph",
      range: "40-55 miles",
      seatingCapacity: 4,
      batteryType: "High Performance Lithium",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["Sport Performance", "Premium Interior", "Advanced Suspension", "Digital Dashboard"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-city",
    name: "Denago EV City",
    brand: "DENAGO",
    category: "Urban Series",
    price: 11995,
    description: "Urban mobility solution with street-legal capabilities and modern design for city transportation.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40-50 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["Street Legal", "DOT Approved", "Modern Design", "City Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6-plus",
    name: "Evolution D5 Maverick 6 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 14995,
    description: "Six-passenger luxury golf cart with premium amenities and extended range for larger groups.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6PLUS_1751893115781_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger Seating", "Premium Comfort", "Extended Range", "Family Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4",
    name: "Evolution D5 Maverick 4",
    brand: "EVOLUTION",
    category: "Maverick Series", 
    price: 11995,
    description: "Standard 4-passenger version of the popular Maverick series with reliable performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4_1751893115780_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles",
      seatingCapacity: 4,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Reliable Performance", "Standard Features", "Comfortable Seating", "Proven Design"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6",
    name: "Evolution D5 Maverick 6",
    brand: "EVOLUTION", 
    category: "Maverick Series",
    price: 13995,
    description: "Six-passenger golf cart perfect for family outings and group transportation.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6_1751893115781_1753135350621.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles", 
      seatingCapacity: 6,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger Capacity", "Group Transportation", "Reliable Performance", "Family Friendly"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-4-plus",
    name: "Evolution Forester 4 Plus",
    brand: "EVOLUTION",
    category: "Utility Series",
    price: 13995,
    description: "Premium utility golf cart with heavy-duty features and rugged construction for work applications.",
    images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-50 miles",
      seatingCapacity: 4,
      batteryType: "Deep Cycle",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Utility Bed", "Heavy Duty", "Work Ready", "Rugged Construction"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-1000",
    name: "Evolution Turfman 1000", 
    brand: "EVOLUTION",
    category: "Commercial Series",
    price: 15995,
    description: "Heavy-duty commercial utility vehicle for landscaping and maintenance work with superior durability.",
    images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
    specifications: {
      topSpeed: "15 mph",
      range: "40-60 miles",
      seatingCapacity: 2,
      batteryType: "Commercial Grade",
      chargingTime: "8-10 hours",
      payload: "1000 lbs"
    },
    features: ["Commercial Grade", "Heavy Duty", "Landscaping Ready", "Professional Use"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "Denago EV Nomad",
    brand: "DENAGO",
    category: "Adventure Series",
    price: 14995,
    description: "Adventure-ready electric vehicle designed for off-road capability and outdoor exploration.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "45-60 miles",
      seatingCapacity: 4,
      batteryType: "All-Terrain Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["Off-Road Ready", "Adventure Features", "All-Terrain", "Outdoor Equipment"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "Denago EV Rover XL", 
    brand: "DENAGO",
    category: "Luxury Series",
    price: 17995,
    description: "Extended range luxury electric vehicle with premium amenities and superior comfort for discerning customers.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "50-65 miles",
      seatingCapacity: 6,
      batteryType: "Premium Lithium",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Extended Range", "Luxury Features", "Premium Comfort", "Executive Class"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "Evolution Classic 4 Plus",
    brand: "EVOLUTION",
    category: "Classic Series",
    price: 12995,
    description: "Timeless design meets modern performance in this classic 4-passenger golf cart with premium features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "19 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Classic Design", "Premium Seating", "Traditional Styling", "Comfortable Ride"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6-plus", 
    name: "Evolution D5 Ranger 6 Plus",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 15995,
    description: "Premium 6-passenger Ranger with advanced features and superior performance for larger groups.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40-55 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger", "Premium Features", "Extended Range", "Group Ready"],
    inStock: true,
    isNew: true
  }
];