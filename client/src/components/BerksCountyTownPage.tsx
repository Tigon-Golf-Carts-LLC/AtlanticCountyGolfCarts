import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Truck, Star, Users, Wrench, Battery } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { generateTownPageSchema } from "@/components/SchemaMarkup";
import VehicleCard from "@/components/VehicleCard";

interface Vehicle {
  description: string;
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
}

interface BerksCountyTownPageProps {
  townName: string;
  townType: string; // "Township", "Borough", etc.
}

// Function to generate Google Maps embed URL for each Berks County town
const getGoogleMapsEmbedUrl = (townName: string, townType: string) => {
  const fullLocation = `${townName} ${townType}, Berks County, Pennsylvania`;
  const encodedLocation = encodeURIComponent(fullLocation);
  // Using standard Google Maps search URL that works reliably
  return `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
};

// Function to generate URL slug for town pages
const getTownPageUrl = (townName: string, townType: string) => {
  const slug = `${townName.toLowerCase().replace(/\s+/g, '-')}-${townType.toLowerCase()}-golf-carts`;
  return `/${slug}`;
};

// Generate Berks County towns data with proper links
const getBerksCountyTownsData = () => [
  { name: "Reading", type: "City" },
  { name: "Boyertown", type: "Borough" },
  { name: "Fleetwood", type: "Borough" },
  { name: "Hamburg", type: "Borough" },
  { name: "Kenhorst", type: "Borough" },
  { name: "Kutztown", type: "Borough" },
  { name: "Laureldale", type: "Borough" },
  { name: "Leesport", type: "Borough" },
  { name: "Lyons", type: "Borough" },
  { name: "Mohnton", type: "Borough" },
  { name: "Mount Penn", type: "Borough" },
  { name: "New Morgan", type: "Borough" },
  { name: "Robesonia", type: "Borough" },
  { name: "Shillington", type: "Borough" },
  { name: "Sinking Spring", type: "Borough" },
  { name: "St. Lawrence", type: "Borough" },
  { name: "Wernersville", type: "Borough" },
  { name: "Womelsdorf", type: "Borough" },
  { name: "Wyomissing", type: "Borough" },
  { name: "Alsace", type: "Township" },
  { name: "Bern", type: "Township" },
  { name: "Bethel", type: "Township" },
  { name: "Brecknock", type: "Township" },
  { name: "Caernarvon", type: "Township" },
  { name: "Centre", type: "Township" },
  { name: "Colebrookdale", type: "Township" },
  { name: "Cumru", type: "Township" },
  { name: "Douglass", type: "Township" },
  { name: "Exeter", type: "Township" },
  { name: "Heidelburg", type: "Township" },
  { name: "Hereford", type: "Township" },
  { name: "Jefferson", type: "Township" },
  { name: "Longswamp", type: "Township" },
  { name: "Lower Alsace", type: "Township" },
  { name: "Lower Heidelburg", type: "Township" },
  { name: "Maxatawny", type: "Township" },
  { name: "Muhlenberg", type: "Township" },
  { name: "Ontelaunee", type: "Township" },
  { name: "Perry", type: "Township" },
  { name: "Pike", type: "Township" },
  { name: "Richland", type: "Township" },
  { name: "Robeson", type: "Township" },
  { name: "Ruscombmanor", type: "Township" },
  { name: "Spring", type: "Township" },
  { name: "Tilden", type: "Township" },
  { name: "Tulpehocken", type: "Township" },
  { name: "Union", type: "Township" },
  { name: "Upper Bern", type: "Township" },
  { name: "Upper Tulpehocken", type: "Township" },
  { name: "Washington", type: "Township" },
  { name: "Windsor", type: "Township" }
];

export default function BerksCountyTownPage({ townName, townType }: BerksCountyTownPageProps) {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const fullTownName = `${townName} ${townType}`;
  
  // SEO optimization for Berks County
  const pageTitle = `${townName} Golf Carts - Berks County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = `Professional golf cart sales, service, and rentals in ${fullTownName}. Berks County Golf Carts offers premium DENAGO and EVOLUTION electric golf carts with expert service for ${townName} residents.`;
  const pageKeywords = `${townName} golf carts, ${fullTownName} golf cart sales, Berks County golf carts, electric golf carts ${townName}, golf cart service ${townName}, golf cart rentals ${townName}, Pennsylvania golf carts`;
  const canonicalUrl = `https://berksgolfcarts.com/${townName.toLowerCase().replace(/\s+/g, '-')}-${townType.toLowerCase()}-golf-carts`;

  const breadcrumbItems = [
    { name: "Home", url: "https://berksgolfcarts.com" },
    { name: `${townName} Golf Carts`, url: canonicalUrl }
  ];

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
      />
      
      <SchemaMarkup schema={generateTownPageSchema(townName)} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="text-theme-primary hover:text-blue-800">Home</Link>
              <span>→</span>
              <Link href="/berks-county-golf-carts" className="text-theme-primary hover:text-blue-800">Berks County</Link>
              <span>→</span>
              <span className="text-gray-900">{fullTownName} Golf Carts</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/0f46bdfb-c558-4e28-9473-6c85686c5a80 (1)_1753279436268.png')"}}>
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="bg-theme-orange text-white px-4 py-2 text-sm font-semibold mb-4">
              SERVING {fullTownName.toUpperCase()}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Golf Carts in {fullTownName}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium DENAGO® and EVOLUTION® electric golf carts delivered to {fullTownName}. 
              Professional sales, service, and rentals with expert support throughout Berks County, Pennsylvania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (267) 645-6271
              </Button>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  View Inventory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Professional Golf Cart Services in {townName}
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive golf cart solutions delivered to your {townType.toLowerCase()}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Truck className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Free Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complimentary delivery service throughout {fullTownName} and surrounding Bucks County areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Expert Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Certified technicians providing maintenance, repair, and customization services for {townName} residents.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Battery className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Battery Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete battery testing, maintenance, and replacement services with pickup/delivery in {townName}.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Premium Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dedicated customer support and warranty service for all {fullTownName} golf cart owners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Popular Golf Carts in {townName}
              </h2>
              <p className="text-xl text-gray-600">
                Premium electric vehicles perfect for {fullTownName} communities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-primary hover:bg-blue-800 text-white">
                  View All Golf Carts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Information & Map */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Serving {fullTownName} & Surrounding Areas
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Bucks County Golf Carts is proud to serve {fullTownName} with professional golf cart 
                  sales, service, and rental solutions. Our experienced team provides personalized service 
                  to meet the unique needs of {townName} residents and businesses.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-theme-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Service Coverage</h3>
                      <p className="text-gray-600">
                        Complete coverage throughout {fullTownName} with convenient pickup and delivery options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-theme-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">
                        Same-day service available for {townName} customers with advance scheduling.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                      <p className="text-gray-600">
                        Deep understanding of {fullTownName} community needs and terrain requirements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us Today
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  {fullTownName} Location
                </h3>
                
                {/* Google Maps Embed for the specific town */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src={getGoogleMapsEmbedUrl(townName, townType)}
                    width="100%" 
                    height="450" 
                    style={{border:0}}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${fullTownName} Map`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Berks County Locations */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                All Berks County Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Professional golf cart services throughout Berks County, Pennsylvania
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {getBerksCountyTownsData().map((town: any, index: number) => (
                <Link 
                  key={index} 
                  href={getTownPageUrl(town.name, town.type)}
                  className="py-2 px-3 bg-white rounded-lg hover:bg-blue-50 hover:border-theme-primary border border-transparent transition-all duration-200 group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-theme-primary">
                    {town.name} {town.type}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your location? We serve all of Berks County, Pennsylvania.
              </p>
              <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white">
                Contact Us About Your Area
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Your New Golf Cart in {townName}?
            </h2>
            <p className="text-xl mb-8">
              Contact Berks County Golf Carts today for personalized service and expert advice 
              on the perfect golf cart for your {fullTownName} lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call (267) 645-6271
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}