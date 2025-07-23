import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Truck, Star, Users, Wrench, Battery } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { generateTownPageSchema } from "@/components/SchemaMarkup";
import VehicleCard from "@/components/VehicleCard";
import { BERKS_COUNTY_MUNICIPALITIES, Municipality } from "@/data/berksCountyMunicipalities";

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

interface BerksCountyMunicipalityPageProps {
  municipality: Municipality;
}

// Function to generate Google Maps embed URL for each Berks County municipality
const getGoogleMapsEmbedUrl = (municipality: Municipality) => {
  const fullLocation = `${municipality.name} ${municipality.type}, Berks County, Pennsylvania`;
  const encodedLocation = encodeURIComponent(fullLocation);
  return `https://maps.google.com/maps?q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
};

export default function BerksCountyMunicipalityPage({ municipality }: BerksCountyMunicipalityPageProps) {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const fullName = `${municipality.name} ${municipality.type}`;
  
  // SEO optimization for Berks County
  const pageTitle = `${municipality.name} Golf Carts - Berks County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = `Professional golf cart sales, service, and rentals in ${fullName}. Berks County Golf Carts offers premium DENAGO and EVOLUTION electric golf carts with expert service for ${municipality.name} residents.`;
  const pageKeywords = `${municipality.name} golf carts, ${fullName} golf cart sales, Berks County golf carts, electric golf carts ${municipality.name}, golf cart service ${municipality.name}, golf cart rentals ${municipality.name}, Pennsylvania golf carts`;
  const canonicalUrl = `https://berksgolfcarts.com${municipality.url}`;

  const businessHours = "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed";
  const businessPhone = "(267) 645-6271";
  const businessEmail = "info@berksgolfcarts.com";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
        townName={municipality.name}
      />
      
      <SchemaMarkup schema={generateTownPageSchema(municipality.name)} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="text-theme-primary hover:text-blue-800">Home</Link>
              <span>→</span>
              <Link href="/about" className="text-theme-primary hover:text-blue-800">Service Areas</Link>
              <span>→</span>
              <span className="text-gray-900">{fullName} Golf Carts</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" 
                 style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_c_kG6NR-SA6qC8Vzl1iBww_ILJUjQXFQCGLKMSveOjbrA_1753283141121.png')"}}>
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="bg-theme-orange text-white px-4 py-2 text-sm font-semibold mb-4">
              SERVING {fullName.toUpperCase()}
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Golf Carts in {fullName}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium DENAGO® and EVOLUTION® electric golf carts delivered to {fullName}. 
              Professional sales, service, and rentals with expert support throughout Berks County, Pennsylvania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call {businessPhone}
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
                Professional Golf Cart Services in {municipality.name}
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive golf cart solutions delivered to your {municipality.type.toLowerCase()}
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
                    Complimentary delivery service throughout {fullName} and surrounding Berks County areas.
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
                    Certified technicians providing maintenance, repair, and customization services for {municipality.name} residents.
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
                    Complete battery testing, maintenance, and replacement services with pickup/delivery in {municipality.name}.
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
                    Dedicated customer support and warranty service for all {fullName} golf cart owners.
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
                Popular Golf Carts in {municipality.name}
              </h2>
              <p className="text-xl text-gray-600">
                Premium electric vehicles perfect for {fullName} communities
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
                  Serving {fullName} & Surrounding Areas
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Berks County Golf Carts is proud to serve {fullName} with professional golf cart 
                  sales, service, and rental solutions. Our experienced team provides personalized service 
                  to meet the unique needs of {municipality.name} residents and businesses.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-theme-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Service Coverage</h3>
                      <p className="text-gray-600">
                        Complete coverage throughout {fullName} with convenient pickup and delivery options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-theme-orange mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">{businessHours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                      <p className="text-gray-600">
                        Phone: <a href={`tel:${businessPhone}`} className="text-theme-primary hover:underline">{businessPhone}</a><br />
                        Email: <a href={`mailto:${businessEmail}`} className="text-theme-primary hover:underline">{businessEmail}</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                      <p className="text-gray-600">
                        Deep understanding of {fullName} community needs and terrain requirements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white w-full sm:w-auto sm:ml-4">
                      Learn About Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  {fullName} Location Map
                </h3>
                
                {/* Google Maps Embed for the specific municipality */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src={getGoogleMapsEmbedUrl(municipality)}
                    width="100%" 
                    height="450" 
                    style={{border:0}}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${fullName} Map - Berks County Golf Cart Service Area`}
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
              {BERKS_COUNTY_MUNICIPALITIES.map((muni: Municipality) => (
                <Link 
                  key={muni.slug} 
                  href={muni.url}
                  className={`py-2 px-3 bg-white rounded-lg hover:bg-blue-50 hover:border-theme-primary border transition-colors ${
                    muni.slug === municipality.slug ? 'border-theme-primary bg-blue-50 font-semibold' : 'border-transparent'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-900">{muni.name}</div>
                    <div className="text-xs text-gray-500">{muni.type}</div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Serving all 72 municipalities in Berks County, PA - 1 city, 27 boroughs, and 44 townships
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}