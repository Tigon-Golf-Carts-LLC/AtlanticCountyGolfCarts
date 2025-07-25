import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, ShoppingCart, Wrench } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { ATLANTIC_COUNTY_MUNICIPALITIES } from "@/data/atlanticCountyMunicipalities";

interface MunicipalityPageProps {
  municipalityName: string;
}

export default function AtlanticCountyMunicipalityPage({ municipalityName }: MunicipalityPageProps) {
  const municipality = ATLANTIC_COUNTY_MUNICIPALITIES.find(m => 
    m.name.toLowerCase().replace(/\s+/g, '-') === municipalityName.toLowerCase()
  );

  if (!municipality) {
    return <div>Municipality not found</div>;
  }

  const businessPhone = "1-844-844-6638";
  const businessEmail = "info@AtlanticCountyGolfCarts.com";

  const generateGoogleMapsUrl = (location: string) => {
    const encodedLocation = encodeURIComponent(`${location}, Atlantic County, NJ`);
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedLocation}&zoom=13`;
  };

  return (
    <>
      <SEOHead 
        title={`${municipality.name} Golf Carts - Atlantic County Golf Cart Sales & Service NJ`}
        description={`Premium golf cart sales and service in ${municipality.name}, Atlantic County, NJ. DENAGO and EVOLUTION electric golf carts with delivery, rentals, and repair services. Call 1-844-844-6638.`}
        keywords={`${municipality.name} golf carts, Atlantic County golf cart dealer, ${municipality.name} golf cart sales, ${municipality.name} golf cart rental, New Jersey golf carts, DENAGO ${municipality.name}, EVOLUTION golf carts`}
        canonicalUrl={`https://AtlanticCountyGolfCarts.com/${municipality.url.substring(1)}`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" 
                 style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png')"}}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {municipality.name} Golf Carts - Atlantic County, NJ
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Premium DENAGO and EVOLUTION golf cart sales, service, and rentals serving {municipality.name} and all of Atlantic County, New Jersey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Browse Golf Carts
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                {businessPhone}
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Golf Cart Services in {municipality.name}
              </h2>
              <p className="text-lg text-gray-600">
                Complete golf cart solutions for residents and businesses in {municipality.name}, Atlantic County
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ShoppingCart className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>New Golf Cart Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Premium DENAGO and EVOLUTION electric golf carts with full warranty and delivery to {municipality.name}.
                  </p>
                  <Link href="/inventory">
                    <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                      View Inventory
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Service & Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Expert golf cart maintenance, repair, and parts service for all brands serving {municipality.name}.
                  </p>
                  <Link href="/services">
                    <Button variant="outline" className="border-theme-primary text-theme-primary hover:bg-blue-50">
                      Service Info
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Golf Cart Rentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Short-term and long-term golf cart rentals with delivery service to {municipality.name}.
                  </p>
                  <Link href={`${municipality.url}/rentals`}>
                    <Button variant="outline" className="border-theme-primary text-theme-primary hover:bg-blue-50">
                      Rental Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Serving {municipality.name}, Atlantic County
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Why Choose Atlantic County Golf Carts?</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Star className="w-5 h-5 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                        Authorized dealer for DENAGO and EVOLUTION golf carts
                      </li>
                      <li className="flex items-start">
                        <Star className="w-5 h-5 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                        Professional delivery and setup service to {municipality.name}
                      </li>
                      <li className="flex items-start">
                        <Star className="w-5 h-5 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                        Expert service and repair for all golf cart brands
                      </li>
                      <li className="flex items-start">
                        <Star className="w-5 h-5 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                        Flexible rental options for events and temporary needs
                      </li>
                      <li className="flex items-start">
                        <Star className="w-5 h-5 text-theme-orange mt-0.5 mr-2 flex-shrink-0" />
                        Serving all 27 Atlantic County municipalities
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
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
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Location Map</h3>
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={generateGoogleMapsUrl(municipality.name)}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${municipality.name}, Atlantic County, NJ Map`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Your Golf Cart in {municipality.name}?
            </h2>
            <p className="text-xl mb-8">
              Contact Atlantic County Golf Carts today for sales, service, or rental information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us Today
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white bg-white text-theme-primary hover:bg-gray-100">
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