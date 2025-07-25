import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Calendar, DollarSign, Truck } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { ATLANTIC_COUNTY_MUNICIPALITIES } from "@/data/atlanticCountyMunicipalities";

interface MunicipalityRentalPageProps {
  municipalityName: string;
}

export default function AtlanticCountyMunicipalityRentalPage({ municipalityName }: MunicipalityRentalPageProps) {
  const municipality = ATLANTIC_COUNTY_MUNICIPALITIES.find(m => 
    m.name.toLowerCase().replace(/\s+/g, '-') === municipalityName.toLowerCase()
  );

  if (!municipality) {
    return <div>Municipality not found</div>;
  }

  const businessPhone = "1-844-844-6638";
  const businessEmail = "info@AtlanticCountyGolfCarts.com";

  const rentalPackages = [
    {
      title: "Daily Rental",
      price: "$75",
      period: "per day",
      features: [
        "4-passenger golf cart",
        "Full charge for 8+ hours",
        "Basic safety equipment",
        "Local delivery in Atlantic County",
        "24/7 support"
      ],
      popular: false
    },
    {
      title: "Weekly Rental",
      price: "$450",
      period: "per week",
      features: [
        "4 or 6-passenger golf cart options",
        "Extended battery life",
        "Safety equipment included",
        "Free delivery to " + municipality.name,
        "Priority customer support",
        "Flexible pickup times"
      ],
      popular: true
    },
    {
      title: "Monthly Rental",
      price: "$1,200",
      period: "per month",
      features: [
        "Premium golf cart selection",
        "Maintenance included",
        "Insurance coverage options",
        "Free delivery and pickup",
        "Dedicated account manager",
        "Upgrade options available"
      ],
      popular: false
    },
    {
      title: "Event Rental",
      price: "Custom",
      period: "pricing",
      features: [
        "Multiple cart packages",
        "Event coordination",
        "Setup and breakdown service",
        "Custom branding options",
        "Professional event support",
        "Group discounts available"
      ],
      popular: false
    }
  ];

  const cartTypes = [
    {
      name: "4-Seater Standard",
      description: "Perfect for families and small groups exploring " + municipality.name,
      features: ["Comfortable seating for 4", "Standard range battery", "Safety equipment", "Weather protection"]
    },
    {
      name: "6-Seater Extended",
      description: "Ideal for larger groups and extended trips around Atlantic County",
      features: ["Spacious 6-person seating", "Extended range battery", "Premium comfort", "Enhanced safety features"]
    },
    {
      name: "Utility Cart",
      description: "Great for business use and cargo transport in " + municipality.name,
      features: ["Heavy-duty construction", "Large cargo bed", "Commercial-grade components", "Work-ready design"]
    }
  ];

  return (
    <>
      <SEOHead 
        title={`${municipality.name} Golf Cart Rentals - Atlantic County NJ | Daily, Weekly, Monthly`}
        description={`Golf cart rentals in ${municipality.name}, Atlantic County, NJ. Daily, weekly, and monthly rental packages with free delivery. Call 1-844-844-6638 for the best rates.`}
        keywords={`${municipality.name} golf cart rental, Atlantic County golf cart rental, ${municipality.name} golf cart hire, New Jersey golf cart rental, daily golf cart rental ${municipality.name}, weekly golf cart rental`}
        canonicalUrl={`https://AtlanticCountyGolfCarts.com/${municipality.url.substring(1)}/rentals`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" 
                 style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png')"}}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Cart Rentals in {municipality.name}, NJ
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium golf cart rentals for {municipality.name} and Atlantic County. Daily, weekly, and monthly packages with free delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Book Rental Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theme-primary">
                <Phone className="w-5 h-5 mr-2" />
                {businessPhone}
              </Button>
            </div>
          </div>
        </section>

        {/* Rental Packages */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Golf Cart Rental Packages for {municipality.name}
              </h2>
              <p className="text-lg text-gray-600">
                Flexible rental options to meet your needs in Atlantic County
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rentalPackages.map((pkg, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? 'border-2 border-theme-orange' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-theme-orange text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-theme-primary">{pkg.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-theme-orange">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-theme-orange hover:bg-orange-600 text-white">
                      Reserve Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Golf Cart Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available Golf Cart Types
              </h2>
              <p className="text-lg text-gray-600">
                Choose the perfect golf cart for your {municipality.name} adventure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cartTypes.map((cart, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-theme-primary">{cart.name}</CardTitle>
                    <p className="text-gray-600">{cart.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cart.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-theme-orange mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Easy Rental Process
              </h2>
              <p className="text-lg text-gray-600">
                Getting your golf cart rental in {municipality.name} is simple
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Call or Book Online</h3>
                <p className="text-gray-600">Contact us at {businessPhone} or book through our website</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Schedule Delivery</h3>
                <p className="text-gray-600">We'll arrange convenient delivery to your location in {municipality.name}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Setup & Training</h3>
                <p className="text-gray-600">Our team provides setup and safety training for your rental</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Enjoy Your Rental</h3>
                <p className="text-gray-600">Explore {municipality.name} and Atlantic County with confidence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area & Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Rental Service Area
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We provide golf cart rental delivery throughout {municipality.name} and all of Atlantic County, New Jersey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-theme-orange mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-semibold">Primary Service Area</h3>
                      <p className="text-gray-600">{municipality.name} and surrounding Atlantic County communities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Truck className="w-5 h-5 text-theme-orange mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-semibold">Free Delivery</h3>
                      <p className="text-gray-600">Complimentary delivery and pickup within Atlantic County</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-theme-orange mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-semibold">Flexible Scheduling</h3>
                      <p className="text-gray-600">7-day availability with same-day delivery options</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-theme-orange mr-3" />
                      <span className="font-medium">{businessPhone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-theme-orange mr-3" />
                      <span>Serving {municipality.name}, Atlantic County, NJ</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-theme-orange mr-3" />
                      <span>Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Popular Rental Destinations in {municipality.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-theme-primary">Beach Areas</h4>
                    <p className="text-sm text-gray-600">Perfect for coastal exploration and beach access</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-theme-primary">Golf Courses</h4>
                    <p className="text-sm text-gray-600">Tournament and recreational golf facilities</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-theme-primary">Residential Communities</h4>
                    <p className="text-sm text-gray-600">Neighborhood and community transportation</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-theme-primary">Events & Venues</h4>
                    <p className="text-sm text-gray-600">Weddings, parties, and special occasions</p>
                  </div>
                </div>

                <div className="bg-theme-primary text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Why Rent From Us?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Latest model DENAGO and EVOLUTION golf carts
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Professional maintenance and cleaning
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      24/7 customer support during rental period
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Competitive rates with no hidden fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Book Your Golf Cart Rental in {municipality.name} Today
            </h2>
            <p className="text-xl mb-8">
              Experience Atlantic County with a premium golf cart rental. Call now for availability and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={municipality.url}>
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Back to {municipality.name} Page
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theme-primary">
                <Phone className="w-5 h-5 mr-2" />
                {businessPhone}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Individual rental page components for each Atlantic County municipality
export function AbseconRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="absecon" />;
}

export function AtlanticCityRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="atlantic-city" />;
}

export function BrigantineRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="brigantine" />;
}

export function BuenaRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="buena" />;
}

export function BuenaVistaTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="buena-vista-township" />;
}

export function CologneRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="cologne" />;
}

export function CorvallisTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="corvallis-township" />;
}

export function EggHarborCityRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="egg-harbor-city" />;
}

export function EggHarborTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="egg-harbor-township" />;
}

export function EstellManorRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="estell-manor" />;
}

export function FolsomRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="folsom" />;
}

export function GallowayTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="galloway-township" />;
}

export function HamilitonTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="hamilton-township" />;
}

export function HammontonRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="hammonton" />;
}

export function LinwoodRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="linwood" />;
}

export function LongportRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="longport" />;
}

export function MargateCityRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="margate-city" />;
}

export function MaysLandingRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="mays-landing" />;
}

export function MullicaTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="mullica-township" />;
}

export function NewtonvilleRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="newtonville" />;
}

export function NorthfieldRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="northfield" />;
}

export function PleasantvilleRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="pleasantville" />;
}

export function PortRepublicRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="port-republic" />;
}

export function SomersDalePointRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="somers-dale-point" />;
}

export function SomersPointRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="somers-point" />;
}

export function VentnorCityRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="ventnor-city" />;
}

export function WeymouthTownshipRentalPage() {
  return <AtlanticCountyMunicipalityRentalPage municipalityName="weymouth-township" />;
}