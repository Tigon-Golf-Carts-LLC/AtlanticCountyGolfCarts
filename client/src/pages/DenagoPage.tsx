import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Truck, Phone, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import VehicleCard from "@/components/VehicleCard";

// Import DENAGO vehicle images
import denagoEvCityImage from "@assets/DENAGONEVCITY_1751893047472_1753135231313.jpg";
import denagoEvNomadImage from "@assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg";
import denagoEvNomadXLImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";
import denagoEvRoverXLImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";
import denagoEvRoverXL6Image from "@assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg";
import denagoEvRoverXXLImage from "@assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg";

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
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
  description: string;
}

export default function DenagoPage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  // Filter DENAGO vehicles
  const denagoVehicles = vehicles?.filter(vehicle => 
    vehicle.brand.toLowerCase().includes('denago')
  ) || [];

  const denagoFeatures = [
    "Advanced All-Wheel Drive Technology",
    "High-Performance Lithium-Ion Battery Systems", 
    "Premium Suspension & Comfort Seating",
    "Rugged Off-Road Capability",
    "Extended Range & Fast Charging",
    "Durable Weather-Resistant Construction"
  ];

  const denagoSeries = [
    {
      title: "EV CITY Series",
      description: "Urban mobility redefined with sleek design and efficient performance",
      image: denagoEvCityImage,
      features: ["Street Legal Ready", "LED Lighting", "Premium Interior"],
      vehicles: ["DENAGO EV CITY"]
    },
    {
      title: "EV NOMAD Series", 
      description: "Adventure-ready vehicles built for exploration and off-road adventures",
      image: denagoEvNomadImage,
      features: ["All-Terrain Tires", "Lifted Suspension", "Adventure Package"],
      vehicles: ["DENAGO EV NOMAD", "DENAGO EV NOMAD XL"]
    },
    {
      title: "EV ROVER Series",
      description: "Luxury family transportation with maximum comfort and capacity",
      image: denagoEvRoverXLImage,
      features: ["6-Passenger Seating", "Premium Materials", "Advanced Safety"],
      vehicles: ["DENAGO EV ROVER XL", "DENAGO EV ROVER XL6", "DENAGO EV ROVER XXL"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="DENAGO Electric Golf Carts Bucks County | Premium Off-Road Vehicles"
        description="Discover DENAGO electric golf carts in Bucks County, PA. Premium EV CITY, EV NOMAD, and EV ROVER series with advanced all-wheel drive technology. Sales, service & delivery."
        keywords="DENAGO golf carts Bucks County, electric golf carts Pennsylvania, DENAGO EV CITY, DENAGO EV NOMAD, DENAGO EV ROVER, off-road golf carts, all-wheel drive golf carts"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url('${denagoEvNomadXLImage}')`}}
          ></div>
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              PREMIUM ELECTRIC VEHICLES
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              DENAGO<sup className="text-2xl">®</sup>
            </h1>
            <p className="text-2xl mb-8 max-w-4xl mx-auto">
              Experience the ultimate in electric off-road performance. DENAGO vehicles combine cutting-edge 
              technology with rugged durability for unmatched adventure capability in Bucks County, Pennsylvania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (267) 645-6271
              </Button>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                  View DENAGO Models
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Redefining Electric Adventure
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  DENAGO represents the pinnacle of electric vehicle engineering, combining innovative 
                  all-wheel drive technology with premium comfort features. Each DENAGO is built to 
                  exceed expectations on any terrain while delivering exceptional reliability for 
                  Bucks County's diverse landscapes.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {denagoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-6 h-6 text-theme-orange mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={denagoEvRoverXXLImage}
                  alt="DENAGO EV Technology"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 inline mr-2" />
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DENAGO Series Overview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                DENAGO Vehicle Series
              </h2>
              <p className="text-xl text-gray-600">
                Discover the complete lineup of DENAGO electric vehicles available in Bucks County
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {denagoSeries.map((series, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={series.image} 
                      alt={series.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-theme-primary text-white">
                        {series.vehicles.length} Model{series.vehicles.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{series.title}</CardTitle>
                    <p className="text-gray-600">{series.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {series.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Zap className="w-4 h-4 text-theme-orange mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {series.vehicles.map((vehicle, idx) => (
                        <div key={idx} className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded">
                          {vehicle}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Available DENAGO Models */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Available DENAGO Models
              </h2>
              <p className="text-xl text-gray-600">
                Browse our current selection of DENAGO electric vehicles in stock
              </p>
            </div>
            
            {denagoVehicles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {denagoVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Truck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">DENAGO Models Coming Soon</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We're expanding our DENAGO inventory. Contact us to reserve your preferred model 
                    or get notified when new DENAGO vehicles arrive in Bucks County.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                        Reserve Your DENAGO
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white">
                      Get Notified
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Why Choose DENAGO */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose DENAGO in Bucks County?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built to Last</h3>
                <p className="text-gray-600">
                  DENAGO vehicles are engineered for Pennsylvania's challenging terrain with 
                  military-grade components and weather-resistant construction.
                </p>
              </div>
              
              <div className="text-center">
                <Zap className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                <p className="text-gray-600">
                  Cutting-edge all-wheel drive systems and smart battery management deliver 
                  superior performance and extended range for your adventures.
                </p>
              </div>
              
              <div className="text-center">
                <MapPin className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Service</h3>
                <p className="text-gray-600">
                  Expert DENAGO service and support right here in Bucks County with 
                  genuine parts and factory-trained technicians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience DENAGO?
            </h2>
            <p className="text-xl mb-8">
              Contact Bucks County Golf Carts today to schedule a test drive or learn more 
              about DENAGO's revolutionary electric vehicle technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (267) 645-6271
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}