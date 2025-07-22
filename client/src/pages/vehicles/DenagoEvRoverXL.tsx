import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import roverImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXL() {
  return (
    <>
      <SEOHead 
        title="DENAGO® EV ROVER XL - Extended Range Electric Vehicle | Ocean County Golf Carts"
        description="Discover the DENAGO® EV ROVER XL with extended range and superior comfort. Perfect for longer journeys and premium transportation needs."
        keywords="DENAGO EV ROVER XL, extended range electric vehicle, luxury golf cart, long range NEV, DENAGO dealer Ocean County"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <span>→</span>
              <Link href="/inventory" className="text-blue-600 hover:text-blue-800">Vehicles</Link>
              <span>→</span>
              <Link href="/denago" className="text-blue-600 hover:text-blue-800">DENAGO</Link>
              <span>→</span>
              <span className="text-gray-900">EV ROVER XL</span>
            </div>
          </div>
        </nav>

        {/* Vehicle Hero Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                    DENAGO®
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  EV ROVER XL
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover the DENAGO® EV ROVER XL with extended range and superior comfort. Designed for those who demand the ultimate in electric vehicle performance and luxury.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-blue-600">Extended Range</div>
                    <div className="text-gray-900">60+ Miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-blue-600">Top Speed</div>
                    <div className="text-gray-900">25 mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-blue-600">Luxury Features</div>
                    <div className="text-gray-900">Premium Interior</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-blue-600">Seating</div>
                    <div className="text-gray-900">6 Passengers</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Schedule Test Drive
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={roverImage} 
                    alt="DENAGO® EV ROVER XL - Extended range luxury electric vehicle" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">Luxury Features</h2>
              <p className="text-xl text-gray-600">Extended range meets premium comfort</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Extended Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced battery technology for extended range up to 60+ miles per charge.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <CardTitle>Premium Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced safety systems and features for maximum protection and peace of mind.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Luxury Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Premium seating, climate features, and luxury appointments throughout.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Premium Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Elegant styling with premium materials and sophisticated design elements.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Technical Specifications</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Gauge className="w-6 h-6" />
                    Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Top Speed:</span>
                      <span>25 mph</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Range:</span>
                      <span>50-65 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging Time:</span>
                      <span>8-10 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Motor Type:</span>
                      <span>High Efficiency AC</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Car className="w-6 h-6" />
                    Dimensions
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Length:</span>
                      <span>156 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Width:</span>
                      <span>60 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Height:</span>
                      <span>76 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Wheelbase:</span>
                      <span>108 inches</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Capacity & Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Seating Capacity:</span>
                      <span>6 Adults</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Payload Capacity:</span>
                      <span>1,200 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Battery:</span>
                      <span>Lithium Ion Pack</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging:</span>
                      <span>110V Standard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the DENAGO® EV ROVER XL?
            </h2>
            <p className="text-xl mb-8">
              Contact Ocean County Golf Carts today for pricing, availability, and to schedule a luxury test drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Luxury Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Speak with our luxury vehicle specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 9AM-5PM</p>
                    <p>Saturday: 9AM-5PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Ocean County Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    White-glove delivery and service available throughout Ocean County.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}