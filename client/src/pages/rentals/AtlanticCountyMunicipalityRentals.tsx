import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Calendar, DollarSign, Truck } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
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

  // 4-Seater Golf Cart Rental Plans
  const fourSeaterPlans = [
    {
      title: "Daily Rental",
      subtitle: "When you just need one day.",
      price: "$245",
      period: "1 day*",
      renewal: "Renews at $245/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: null,
      recommended: true
    },
    {
      title: "3 Day Rental", 
      subtitle: "When you need a few days",
      price: "$685",
      period: "3 days*",
      renewal: "Renews at $228.34/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 6.8%",
      recommended: true
    },
    {
      title: "Weekly Rental",
      subtitle: "When you need a week of fun.",
      price: "$1,050", 
      period: "7 days*",
      renewal: "Renews at $150/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 38.7%",
      recommended: true
    },
    {
      title: "Monthly Rental",
      subtitle: "When you need a month to explore.",
      price: "$2,800",
      period: "30 days*", 
      renewal: "Renews at $94/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 61.6%",
      recommended: true
    }
  ];

  // 6-Seater Golf Cart Rental Plans
  const sixSeaterPlans = [
    {
      title: "Daily Rental",
      subtitle: "When you just need one day.",
      price: "$295",
      period: "1 day*",
      renewal: "Renews at $295/daily term*", 
      delivery: "Delivery Fee $6/mile term*",
      savings: null,
      recommended: true
    },
    {
      title: "3 Day Rental",
      subtitle: "When you need a few days",
      price: "$735",
      period: "3 days*",
      renewal: "Renews at $245/daily term*",
      delivery: "Delivery Fee $6/mile term*", 
      savings: "SAVE 16.9%",
      recommended: true
    },
    {
      title: "Weekly Rental",
      subtitle: "When you need a week of fun.",
      price: "$1,400",
      period: "7 days*",
      renewal: "Renews at $200/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 32.2%", 
      recommended: true
    },
    {
      title: "Monthly Rental", 
      subtitle: "When you need a month to explore.",
      price: "$3,500",
      period: "30 days*",
      renewal: "Renews at $116.67/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 60.4%",
      recommended: true
    }
  ];

  // Utility Golf Cart Rental Plans
  const utilityPlans = [
    {
      title: "Daily Rental",
      subtitle: "When you just need one day.",
      price: "$245", 
      period: "1 day*",
      renewal: "Renews at $245/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: null,
      recommended: true
    },
    {
      title: "3 Day Rental",
      subtitle: "When you need a few days",
      price: "$685",
      period: "3 days*", 
      renewal: "Renews at $228.34/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 6.8%",
      recommended: true
    },
    {
      title: "Weekly Rental",
      subtitle: "When you need a week of fun.",
      price: "$1,050",
      period: "7 days*",
      renewal: "Renews at $150/daily term*",
      delivery: "Delivery Fee $6/mile term*", 
      savings: "SAVE 38.7%",
      recommended: true
    },
    {
      title: "Monthly Rental",
      subtitle: "When you need a month to explore.", 
      price: "$2,800",
      period: "30 days*",
      renewal: "Renews at $94/daily term*",
      delivery: "Delivery Fee $6/mile term*",
      savings: "SAVE 61.6%",
      recommended: true
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
      <AllSchemas 
        pageType="location-rental" 
        pageData={{
          title: `${municipality.name} Golf Cart Rentals - Atlantic County NJ | Daily, Weekly, Monthly`,
          description: `Golf cart rentals in ${municipality.name}, Atlantic County, NJ. Daily, weekly, and monthly rental packages with free delivery.`,
          url: `https://AtlanticCountyGolfCarts.com/${municipality.url.substring(1)}/rentals`,
          breadcrumbs: [
            { name: "Home", url: "https://AtlanticCountyGolfCarts.com/" },
            { name: municipality.name, url: `https://AtlanticCountyGolfCarts.com${municipality.url}` },
            { name: "Rentals", url: `https://AtlanticCountyGolfCarts.com/${municipality.url.substring(1)}/rentals` }
          ],
          locationName: municipality.name,
          locationType: municipality.type === 'City' ? 'Borough' : municipality.type as 'Borough' | 'Township',
          locationLatitude: "39.3643",
          locationLongitude: "-74.4229",
          reviews: [
            {
              author: "Family Vacation Renter",
              reviewBody: `Fantastic rental experience in ${municipality.name}! The golf cart was delivered on time and in perfect condition. Made our Atlantic County vacation so much more enjoyable.`,
              reviewRating: 5,
              datePublished: "2025-01-22",
              headline: `Perfect rental in ${municipality.name}`
            },
            {
              author: "Local Business Owner",
              reviewBody: `Used Atlantic County Golf Carts for our ${municipality.name} business event. Professional service, competitive pricing, and reliable equipment.`,
              reviewRating: 5,
              datePublished: "2025-01-20",
              headline: "Excellent business rental service"
            },
            {
              author: "Weekend Explorer",
              reviewBody: `The weekly rental package was perfect for exploring ${municipality.name} and the surrounding Atlantic County area. Great value and easy booking process.`,
              reviewRating: 4,
              datePublished: "2025-01-18",
              headline: "Great value rental packages"
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" 
                 style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png')"}}>
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
              <Button size="lg" variant="outline" className="border-white bg-white text-theme-primary hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                {businessPhone}
              </Button>
            </div>
          </div>
        </section>

        {/* 4 Seater Golf Cart Rental Plans */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">4 Seater Golf Cart Rental Plans</h2>
              </div>
              <p className="text-gray-600">Choose the perfect rental duration for your needs in {municipality.name}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {fourSeaterPlans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <Badge className="bg-theme-orange text-white text-xs px-3 py-1 mb-4">
                        RECOMMENDED
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                      
                      {plan.savings && (
                        <div className="bg-green-100 border border-green-300 rounded-full px-3 py-1 text-green-700 text-sm font-medium mb-4">
                          {plan.savings}
                        </div>
                      )}
                      
                      <div className="text-4xl font-bold text-theme-primary mb-2">
                        {plan.price}
                      </div>
                      <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        <div>{plan.renewal}</div>
                        <div>{plan.delivery}</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      RESERVE TODAY
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6 Seater Golf Cart Rental Plans */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">6 Seater Golf Cart Rental Plans</h2>
              </div>
              <p className="text-gray-600">Choose the perfect rental duration for your needs in {municipality.name}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {sixSeaterPlans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <Badge className="bg-theme-orange text-white text-xs px-3 py-1 mb-4">
                        RECOMMENDED
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                      
                      {plan.savings && (
                        <div className="bg-green-100 border border-green-300 rounded-full px-3 py-1 text-green-700 text-sm font-medium mb-4">
                          {plan.savings}
                        </div>
                      )}
                      
                      <div className="text-4xl font-bold text-theme-primary mb-2">
                        {plan.price}
                      </div>
                      <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        <div>{plan.renewal}</div>
                        <div>{plan.delivery}</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      RESERVE TODAY
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Utility Golf Cart Rental Plans */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Utility Golf Cart Rental Plans</h2>
              </div>
              <p className="text-gray-600">Choose the perfect rental duration for your needs in {municipality.name}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {utilityPlans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <Badge className="bg-theme-orange text-white text-xs px-3 py-1 mb-4">
                        RECOMMENDED
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                      
                      {plan.savings && (
                        <div className="bg-green-100 border border-green-300 rounded-full px-3 py-1 text-green-700 text-sm font-medium mb-4">
                          {plan.savings}
                        </div>
                      )}
                      
                      <div className="text-4xl font-bold text-theme-primary mb-2">
                        {plan.price}
                      </div>
                      <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
                      
                      <div className="text-xs text-gray-500 mb-4">
                        <div>{plan.renewal}</div>
                        <div>{plan.delivery}</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      RESERVE TODAY
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Choosing? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our friendly team is here to help you select the perfect golf cart rental for your needs in {municipality.name}. Whether it's for a special event, vacation, or business use, we have the right cart at the right price.
            </p>
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now 1-844-844-6638
            </Button>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              * All prices subject to availability and terms of service. Delivery fee applies for locations beyond 10 miles.<br />
              Rental periods are calculated in 24-hour increments. Early returns do not qualify for refunds.
            </p>
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