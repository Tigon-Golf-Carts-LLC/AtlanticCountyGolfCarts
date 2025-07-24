import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import InventorySection from "@/components/InventorySection";
import BrandsSection from "@/components/BrandsSection";
import OrganizationSchema from "@/components/OrganizationSchema";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title="Montgomery County Golf Carts - Premier Electric Golf Cart Dealership in Pennsylvania"
        description="Discover premium electric golf carts from Denago and Evolution at Montgomery County Golf Carts. Expert sales, service, rentals, and financing throughout Pennsylvania."
        keywords="golf carts Montgomery County PA, electric golf carts Pennsylvania, Denago golf carts, Evolution golf carts, golf cart sales service rentals"
        canonicalUrl="https://montcogolfcarts.com/"
      />
      <OrganizationSchema pageType="home" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(59, 130, 246, 0.8), rgba(14, 46, 85, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
Montgomery County Golf Carts Premier Dealership
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Discover our extensive selection of new electric golf carts from Evolution and Denago with professional services. 
                Serving Montgomery County, and all surrounding towns, townships, and Pennsylvania communities In Montgomery County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    View Inventory
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                  Call Now 1-844-844-6638
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png" 
                alt="Golf Cart" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose Montgomery County Golf Carts?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're more than just a dealership - we're your partner in golf cart ownership 
            with comprehensive services and unmatched expertise.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated brands including Yamaha, Club Car, EZGO, and Evolution with rigorous quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance, repairs, and customization by certified technicians.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible payment options with 0% financing available on select models.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Electric golf carts for sustainable, quiet, and efficient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Montgomery County Golf Carts - Top Golf Cart and LSV Brands
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We carry the most trusted names in Golf Carts and Low Speed Vehicles
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Club Car</h3>
              <p className="text-sm text-gray-600">Premium golf carts with advanced technology</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">EZ-GO</h3>
              <p className="text-sm text-gray-600">Reliable and efficient golf cart solutions</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Denago</h3>
              <p className="text-sm text-gray-600">High-quality performance golf carts</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Evolution</h3>
              <p className="text-sm text-gray-600">Luxury golf carts with premium features</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Tomberlin</h3>
              <p className="text-sm text-gray-600">Street-legal LSV and golf cart options</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Swift EV</h3>
              <p className="text-sm text-gray-600">Electric vehicle innovation</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-green-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Factory Warranties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Certified Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Golf Carts
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Check out some of our most popular models
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Evolution D5 Maverick 4 Plus */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg" 
                  alt="Evolution D5 Maverick 4 Plus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D5 Maverick 4 Plus</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $12,995
                  </span>
                  <Link href="/vehicles/evolution-d5-maverick-4-plus">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Evolution D6 Max GT4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg" 
                  alt="Evolution D6 Max GT4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D6 Max GT4</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  High-performance 4-passenger golf cart with cutting-edge technology and sporty design.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $16,995
                  </span>
                  <Link href="/vehicles/evolution-d6-max-gt4">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Denago EV City */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg" 
                  alt="Denago EV City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Denago EV City</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Urban mobility solution with street-legal capabilities and modern design for city transportation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $11,995
                  </span>
                  <Link href="/vehicles/denago-ev-city">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Link href="/inventory">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View Full Inventory
            </Button>
          </Link>
        </div>
      </section>

      {/* About Montgomery County Golf Carts Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                About Montgomery County Golf Carts
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                With over 15 years of experience in the golf cart industry, we've built our reputation on providing exceptional service and quality products to customers throughout Montgomery County and surrounding areas.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">15+</div>
                  <div className="text-sm md:text-base text-gray-600">Years Experience</div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full md:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196350.40123456789!2d-75.4119873!3d40.2259765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6998fd82b5e07%3A0xf5e3f4f5a2b8b7a6!2sMontgomery%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753377000000!5m2!1sen!2sus" 
                  className="w-full h-64 md:h-80 lg:h-96"
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Montgomery County, PA Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montgomery County Municipalities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Carts for Every Montgomery County Municipality
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional golf cart services delivered to your city, borough, or township
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {/* Complete Montgomery County Municipality List */}
            <Link href="/abington" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Abington</div>
            </Link>
            <Link href="/ambler" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Ambler</div>
            </Link>
            <Link href="/ardmore" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Ardmore</div>
            </Link>
            <Link href="/audubon" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Audubon</div>
            </Link>
            <Link href="/bala-cynwyd" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bala Cynwyd</div>
            </Link>
            <Link href="/blue-bell" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Blue Bell</div>
            </Link>
            <Link href="/bridgeport" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bridgeport</div>
            </Link>
            <Link href="/bryn-athyn" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bryn Athyn</div>
            </Link>
            <Link href="/cedars" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Cedars</div>
            </Link>
            <Link href="/cheltenham" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Cheltenham</div>
            </Link>
            <Link href="/collegeville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Collegeville</div>
            </Link>
            <Link href="/colmar" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Colmar</div>
            </Link>
            <Link href="/conshohocken" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Conshohocken</div>
            </Link>
            <Link href="/creamery" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Creamery</div>
            </Link>
            <Link href="/dresher" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Dresher</div>
            </Link>
            <Link href="/eagleville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Eagleville</div>
            </Link>
            <Link href="/east-greenville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">East Greenville</div>
            </Link>
            <Link href="/elkins-park" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Elkins Park</div>
            </Link>
            <Link href="/fairview-village" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Fairview Village</div>
            </Link>
            <Link href="/flourtown" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Flourtown</div>
            </Link>
            <Link href="/fort-washington" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Fort Washington</div>
            </Link>
            <Link href="/franconia" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Franconia</div>
            </Link>
            <Link href="/frederick" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Frederick</div>
            </Link>
            <Link href="/gilbertsville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Gilbertsville</div>
            </Link>
            <Link href="/gladwyne" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Gladwyne</div>
            </Link>
            <Link href="/glenside" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Glenside</div>
            </Link>
            <Link href="/green-lane" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Green Lane</div>
            </Link>
            <Link href="/gwynedd" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Gwynedd</div>
            </Link>
            <Link href="/gwynedd-valley" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Gwynedd Valley</div>
            </Link>
            <Link href="/harleysville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Harleysville</div>
            </Link>
            <Link href="/hatboro" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Hatboro</div>
            </Link>
            <Link href="/hatfield" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Hatfield</div>
            </Link>
            <Link href="/haverford" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Haverford</div>
            </Link>
            <Link href="/horsham" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Horsham</div>
            </Link>
            <Link href="/huntingdon-valley" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Huntingdon Valley</div>
            </Link>
            <Link href="/jenkintown" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Jenkintown</div>
            </Link>
            <Link href="/king-of-prussia" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">King of Prussia</div>
            </Link>
            <Link href="/kulpsville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Kulpsville</div>
            </Link>
            <Link href="/lafayette-hill" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lafayette Hill</div>
            </Link>
            <Link href="/lansdale" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lansdale</div>
            </Link>
            <Link href="/lederach" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lederach</div>
            </Link>
            <Link href="/mainland" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Mainland</div>
            </Link>
            <Link href="/marlborough" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Marlborough</div>
            </Link>
            <Link href="/melrose-park" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Melrose Park</div>
            </Link>
            <Link href="/merion-station" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Merion Station</div>
            </Link>
            <Link href="/mont-clare" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Mont Clare</div>
            </Link>
            <Link href="/montgomery" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Montgomery</div>
            </Link>
            <Link href="/montgomeryville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Montgomeryville</div>
            </Link>
            <Link href="/narberth" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Narberth</div>
            </Link>
            <Link href="/new-hanover" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">New Hanover</div>
            </Link>
            <Link href="/norristown" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Norristown</div>
            </Link>
            <Link href="/north-wales" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">North Wales</div>
            </Link>
            <Link href="/oaks" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Oaks</div>
            </Link>
            <Link href="/oreland" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Oreland</div>
            </Link>
            <Link href="/palm" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Palm</div>
            </Link>
            <Link href="/pennsburg" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Pennsburg</div>
            </Link>
            <Link href="/perkiomen" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Perkiomen</div>
            </Link>
            <Link href="/perkiomenville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Perkiomenville</div>
            </Link>
            <Link href="/plymouth" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Plymouth</div>
            </Link>
            <Link href="/plymouth-meeting" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Plymouth Meeting</div>
            </Link>
            <Link href="/pottstown" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Pottstown</div>
            </Link>
            <Link href="/red-hill" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Red Hill</div>
            </Link>
            <Link href="/rockledge" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Rockledge</div>
            </Link>
            <Link href="/royersford" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Royersford</div>
            </Link>
            <Link href="/salford" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Salford</div>
            </Link>
            <Link href="/salfordville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Salfordville</div>
            </Link>
            <Link href="/sassamansville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Sassamansville</div>
            </Link>
            <Link href="/schwenksville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Schwenksville</div>
            </Link>
            <Link href="/skippack" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Skippack</div>
            </Link>
            <Link href="/souderton" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Souderton</div>
            </Link>
            <Link href="/springfield" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Springfield</div>
            </Link>
            <Link href="/spring-house" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Spring House</div>
            </Link>
            <Link href="/spring-mount" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Spring Mount</div>
            </Link>
            <Link href="/sumneytown" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Sumneytown</div>
            </Link>
            <Link href="/telford" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Telford</div>
            </Link>
            <Link href="/towamencin" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Towamencin</div>
            </Link>
            <Link href="/trappe" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Trappe</div>
            </Link>
            <Link href="/tylersport" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Tylersport</div>
            </Link>
            <Link href="/upper-dublin" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Dublin</div>
            </Link>
            <Link href="/upper-frederick" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Frederick</div>
            </Link>
            <Link href="/upper-gwynedd" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Gwynedd</div>
            </Link>
            <Link href="/upper-hanover" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Hanover</div>
            </Link>
            <Link href="/upper-merion" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Merion</div>
            </Link>
            <Link href="/upper-moreland" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Moreland</div>
            </Link>
            <Link href="/upper-pottsgrove" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Pottsgrove</div>
            </Link>
            <Link href="/upper-providence" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Providence</div>
            </Link>
            <Link href="/upper-salford" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Salford</div>
            </Link>
            <Link href="/west-conshohocken" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">West Conshohocken</div>
            </Link>
            <Link href="/west-norriton" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">West Norriton</div>
            </Link>
            <Link href="/west-point" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">West Point</div>
            </Link>
            <Link href="/west-pottsgrove" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">West Pottsgrove</div>
            </Link>
            <Link href="/whitemarsh" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Whitemarsh</div>
            </Link>
            <Link href="/whitpain" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Whitpain</div>
            </Link>
            <Link href="/willow-grove" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Willow Grove</div>
            </Link>
            <Link href="/worcester" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Worcester</div>
            </Link>
            <Link href="/woxall" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Woxall</div>
            </Link>
            <Link href="/wyncote" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Wyncote</div>
            </Link>
            <Link href="/wynnewood" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Wynnewood</div>
            </Link>
            <Link href="/zieglerville" className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Zieglerville</div>
            </Link>
          </div>
          
          <p className="text-gray-600 mb-8">
            Serving all Montgomery County municipalities! Professional golf cart sales, service, and rentals delivered throughout the region.
          </p>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact us today for personalized service and expert advice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Hatfield</h3>
              <p className="text-sm text-gray-600 mb-2">2333 Bethlehem Pike, Hatfield, PA 19440</p>
              <p className="text-theme-orange font-semibold">(215) 595-8736</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Poconos</h3>
              <p className="text-sm text-gray-600 mb-2">1712 Pennsylvania 940, Pocono Pines, PA 18350</p>
              <p className="text-theme-orange font-semibold">(570) 643-0152</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support throughout Montgomery County</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <span className="text-2xl font-bold text-theme-orange">1-844-844-6638</span>
              <Link href="/contact">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
