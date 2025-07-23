import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, Clock, Heart, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import OrganizationSchema from "@/components/OrganizationSchema";


export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "General Manager",
      experience: "15+ years",
      description: "Leading our team with passion for customer service and golf cart expertise"
    },
    {
      name: "Sarah Davis",
      role: "Service Manager",
      experience: "12+ years",
      description: "Certified technician ensuring quality service and customer satisfaction"
    },
    {
      name: "Tom Wilson",
      role: "Sales Director",
      experience: "10+ years",
      description: "Helping customers find the perfect golf cart for their needs"
    }
  ];

  const milestones = [
    { year: "2010", event: "Berks County Golf Carts founded in Berks County" },
    { year: "2012", event: "Became authorized EVOLUTION dealer" },
    { year: "2015", event: "Expanded to serve all of Pennsylvania" },
    { year: "2018", event: "Added DENAGO to our brand portfolio" },
    { year: "2020", event: "Opened second service location" },
    { year: "2023", event: "Reached 500+ satisfied customers" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title="About Berks County Golf Carts - Premier Golf Cart Dealership Since 2010"
        description="Learn about Berks County Golf Carts, Pennsylvania's premier golf cart dealership since 2010. Expert team, authorized Denago and Evolution dealer with comprehensive service."
        keywords="about Berks County Golf Carts, golf cart dealership Pennsylvania, Denago Evolution dealer, golf cart service team"
        canonicalUrl="https://berksgolfcarts.com/about"
      />
      <OrganizationSchema pageType="about" />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_8elKPzmBTsyxj7iHgPaXpg_gCWvAKP5Rm65AC6RGdU8FA_1753302323501.png')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Berks County Golf Carts</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Berks County's premier golf cart dealership, rooted in Pennsylvania Dutch heritage 
            and dedicated to providing exceptional service since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 in the heart of Pennsylvania Dutch Country, Berks County Golf Carts began with a simple mission: 
                to provide high-quality golf carts and exceptional service to customers throughout this historic region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Berks County is renowned for its rich Pennsylvania Dutch heritage, agricultural excellence, and historic landmarks 
                including the famous Pagoda atop Mount Penn and the Hawk Mountain Sanctuary. Reading, known as "The Pretzel City," 
                represents the entrepreneurial spirit that drives our business forward.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our county boasts remarkable "firsts" - from the world's only Pagoda with a fireplace and chimney, to the first 
                menthol cough drops produced by W.H. Luden Candy Company. This tradition of innovation continues in our approach 
                to golf cart sales and service.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve the diverse communities across Berks County's 72 municipalities, from Reading city 
                to the Old Order Mennonite communities near Kutztown and Fleetwood, as authorized dealers for EVOLUTION and DENAGO.
              </p>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <div className="bg-blue-100 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-700">Counties Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-700">Models Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers' needs and satisfaction in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our products, services, and customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest, transparent business practices build lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-blue-600 font-semibold">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.experience}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <p className="text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Berks County Golf Carts</h2>
              <p className="text-lg text-gray-600 mb-6">
                From our locations serving Berks County and beyond, we proudly serve customers throughout 
                Pennsylvania Dutch Country. Our commitment to quality service extends across our 
                entire service area with multiple convenient locations.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">TIGON Golf Carts Poconos</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">TIGON Golf Carts Hatfield</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">TIGON Golf Carts Pennsylvania</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-6 h-6 text-theme-orange" />
                <span className="text-gray-700">Monday-Friday: 9AM-5PM, Saturday: 9AM-5PM</span>
              </div>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us Today
              </Button>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194476.0359916091!2d-75.93669447832032!3d40.42041019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5ee4b5e3f3ab3%3A0x4f2cb4c0b7b0b0b0!2sBerks%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753302400000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Berks County, PA Map"
              />
            </div>
          </div>
          
          {/* Towns List Below Map */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Berks County Municipalities We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-700">
              {[
                "Reading", "Bally", "Bechtelsville", "Bernville", "Birdsboro", "Boyertown", "Centerport", 
                "Fleetwood", "Hamburg", "Kenhorst", "Kutztown", "Laureldale", "Leesport", "Lenhartsville", 
                "Lyons", "Mohnton", "Mount Penn", "New Morgan", "Robesonia", "St. Lawrence", "Shillington", 
                "Shoemakersville", "Sinking Spring", "Topton", "Wernersville", "West Reading", "Womelsdorf", 
                "Wyomissing", "Albany Township", "Alsace Township", "Amity Township", "Bern Township", 
                "Bethel Township", "Brecknock Township", "Caernarvon Township", "Centre Township", 
                "Colebrookdale Township", "Cumru Township", "District Township", "Douglass Township", 
                "Earl Township", "Exeter Township", "Greenwich Township", "Heidelberg Township", 
                "Hereford Township", "Jefferson Township", "Longswamp Township", "Lower Alsace Township", 
                "Lower Heidelberg Township", "Maidencreek Township", "Marion Township", "Maxatawny Township", 
                "Muhlenberg Township", "North Heidelberg Township", "Oley Township", "Ontelaunee Township", 
                "Penn Township", "Perry Township", "Pike Township", "Richmond Township", "Robeson Township", 
                "Rockland Township", "Ruscombmanor Township", "South Heidelberg Township", "Spring Township", 
                "Tilden Township", "Tulpehocken Township", "Union Township", "Upper Bern Township", 
                "Upper Tulpehocken Township", "Washington Township", "Windsor Township"
              ].map((town, index) => (
                <div key={index} className="py-1">
                  {town}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8">
            Experience the Berks County Golf Carts difference in Pennsylvania Dutch Country
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Visit Our Showroom
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Call 1-844-844-6638
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}