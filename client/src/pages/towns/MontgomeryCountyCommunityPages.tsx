import React from 'react';
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Battery, Wrench, Calendar, Star } from "lucide-react";
import { generateSimpleGoogleMapsEmbed } from "@/utils/googleMaps";

interface CommunityPageProps {
  communityName: string;
  isUnincorporated?: boolean;
  parentMunicipality?: string;
}

function MontgomeryCountyCommunityPage({ communityName, isUnincorporated = false, parentMunicipality }: CommunityPageProps) {
  const pageTitle = `${communityName} Golf Carts - Montgomery County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = `Professional golf cart sales, service, and rentals in ${communityName}, Montgomery County. Premium DENAGO and EVOLUTION electric golf carts with expert service for ${communityName} residents.`;
  const pageKeywords = `${communityName} golf carts, Montgomery County golf carts, electric golf carts ${communityName}, golf cart service ${communityName}, golf cart rentals ${communityName}, Pennsylvania golf carts`;
  const canonicalUrl = `https://montcogolfcarts.com/${communityName.toLowerCase().replace(/\s+/g, '-')}`;

  const businessHours = "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed";
  const businessPhone = "(267) 645-6271";
  const businessEmail = "info@montcogolfcarts.com";

  const locationDescription = isUnincorporated 
    ? `${communityName} is a vibrant community in Montgomery County, Pennsylvania${parentMunicipality ? ` within ${parentMunicipality}` : ''}.`
    : `${communityName} is an important community in Montgomery County, Pennsylvania.`;

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
        townName={communityName}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/locations" className="text-gray-500 hover:text-gray-700">Montgomery County Locations</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{communityName}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Montgomery County Golf Carts</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Premium Golf Carts in {communityName}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Montgomery County's trusted source for premium electric golf carts. Professional sales, 
              service, and rental solutions delivered directly to {communityName} residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/inventory" className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  Browse Golf Carts
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Location Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Serving {communityName} with Premium Golf Carts
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {locationDescription} Our team at Montgomery County Golf Carts is proud to serve 
                  this wonderful community with the highest quality electric golf carts and 
                  professional service you can trust.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We offer comprehensive sales, service, and rental solutions with same-day delivery 
                  available throughout {communityName} and the greater Montgomery County area.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src={generateSimpleGoogleMapsEmbed(communityName)} 
                    className="w-full h-96"
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${communityName}, Montgomery County, PA Map`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Services in {communityName}
              </h2>
              <p className="text-xl text-gray-600">
                Professional golf cart solutions with expert service and support
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Battery className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sales</h3>
                <p className="text-gray-600 mb-6">
                  Premium DENAGO and EVOLUTION electric golf carts with financing options available.
                </p>
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Link href="/inventory">Browse Inventory</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Wrench className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Service</h3>
                <p className="text-gray-600 mb-6">
                  Expert maintenance and repair services to keep your golf cart running perfectly.
                </p>
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <Calendar className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Rentals</h3>
                <p className="text-gray-600 mb-6">
                  Flexible rental options for events, vacations, and short-term needs.
                </p>
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Link href="/rentals">View Rentals</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Ready to Get Started in {communityName}?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact us today for personalized service and expert advice
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Hatfield</h3>
                <p className="text-sm text-gray-600 mb-2">2333 Bethlehem Pike, Hatfield, PA 19440</p>
                <p className="text-theme-orange font-semibold">(215) 595-8736</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Poconos</h3>
                <p className="text-sm text-gray-600 mb-2">1712 Pennsylvania 940, Pocono Pines, PA 18350</p>
                <p className="text-theme-orange font-semibold">(570) 643-0152</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
              <p className="text-gray-600 mb-4">For general inquiries and support throughout {communityName}</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <span className="text-2xl font-bold text-theme-orange">{businessPhone}</span>
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
    </>
  );
}

// Community Pages for all additional Montgomery County communities not covered by official municipalities

export const ArdmorePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Ardmore" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const AudubonPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Audubon" 
    isUnincorporated={true}
    parentMunicipality="Lower Providence Township"
  />
);

export const BalaCynwydPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Bala Cynwyd" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const BlueBellPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Blue Bell" 
    isUnincorporated={true}
    parentMunicipality="Whitpain Township"
  />
);

export const CedarsPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Cedars" 
    isUnincorporated={true}
  />
);

export const ColmarPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Colmar" 
    isUnincorporated={true}
    parentMunicipality="Hatfield Township"
  />
);

export const CreameryPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Creamery" 
    isUnincorporated={true}
    parentMunicipality="Upper Providence Township"
  />
);

export const DresherPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Dresher" 
    isUnincorporated={true}
    parentMunicipality="Upper Dublin Township"
  />
);

export const EaglevillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Eagleville" 
    isUnincorporated={true}
    parentMunicipality="Lower Providence Township"
  />
);

export const ElkinsParkPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Elkins Park" 
    isUnincorporated={true}
    parentMunicipality="Cheltenham Township"
  />
);

export const FairviewVillagePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Fairview Village" 
    isUnincorporated={true}
    parentMunicipality="Upper Providence Township"
  />
);

export const FlourtownPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Flourtown" 
    isUnincorporated={true}
    parentMunicipality="Springfield Township"
  />
);

export const FortWashingtonPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Fort Washington" 
    isUnincorporated={true}
    parentMunicipality="Upper Dublin Township"
  />
);

export const FrederickPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Frederick" 
    isUnincorporated={true}
    parentMunicipality="Upper Frederick Township"
  />
);

export const GilbertsvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Gilbertsville" 
    isUnincorporated={true}
    parentMunicipality="New Hanover Township"
  />
);

export const GladwynePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Gladwyne" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const GlensidePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Glenside" 
    isUnincorporated={true}
    parentMunicipality="Cheltenham Township"
  />
);

export const GwyneddPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Gwynedd" 
    isUnincorporated={true}
    parentMunicipality="Upper Gwynedd Township"
  />
);

export const GwyneddValleyPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Gwynedd Valley" 
    isUnincorporated={true}
    parentMunicipality="Lower Gwynedd Township"
  />
);

export const HarleysvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Harleysville" 
    isUnincorporated={true}
    parentMunicipality="Salford Township"
  />
);

export const HaverfordPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Haverford" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const HuntingdonValleyPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Huntingdon Valley" 
    isUnincorporated={true}
    parentMunicipality="Lower Moreland Township"
  />
);

export const KingOfPrussiaPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="King of Prussia" 
    isUnincorporated={true}
    parentMunicipality="Upper Merion Township"
  />
);

export const KulpsvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Kulpsville" 
    isUnincorporated={true}
    parentMunicipality="Montgomery Township"
  />
);

export const LafayetteHillPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Lafayette Hill" 
    isUnincorporated={true}
    parentMunicipality="Whitemarsh Township"
  />
);

export const LederachPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Lederach" 
    isUnincorporated={true}
    parentMunicipality="Salford Township"
  />
);

export const MainlandPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Mainland" 
    isUnincorporated={true}
    parentMunicipality="Montgomery Township"
  />
);

export const MelroseParkPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Melrose Park" 
    isUnincorporated={true}
    parentMunicipality="Cheltenham Township"
  />
);

export const MerionStationPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Merion Station" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const MontClarePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Mont Clare" 
    isUnincorporated={true}
    parentMunicipality="Upper Providence Township"
  />
);

export const MontgomeryvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Montgomeryville" 
    isUnincorporated={true}
    parentMunicipality="Montgomery Township"
  />
);

export const OaksPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Oaks" 
    isUnincorporated={true}
    parentMunicipality="Upper Providence Township"
  />
);

export const OrelandPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Oreland" 
    isUnincorporated={true}
    parentMunicipality="Springfield Township"
  />
);

export const PalmPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Palm" 
    isUnincorporated={true}
    parentMunicipality="Marlborough Township"
  />
);

export const PerkiomenPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Perkiomen" 
    isUnincorporated={true}
    parentMunicipality="Perkiomen Township"
  />
);

export const PerkiomenvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Perkiomenville" 
    isUnincorporated={true}
    parentMunicipality="Perkiomen Township"
  />
);

export const PlymouthPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Plymouth" 
    isUnincorporated={true}
    parentMunicipality="Plymouth Township"
  />
);

export const PlymouthMeetingPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Plymouth Meeting" 
    isUnincorporated={true}
    parentMunicipality="Plymouth Township"
  />
);

export const SalfordvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Salfordville" 
    isUnincorporated={true}
    parentMunicipality="Salford Township"
  />
);

export const SassamansvillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Sassamansville" 
    isUnincorporated={true}
    parentMunicipality="New Hanover Township"
  />
);

export const SpringfieldPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Springfield" 
    isUnincorporated={true}
    parentMunicipality="Springfield Township"
  />
);

export const SpringHousePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Spring House" 
    isUnincorporated={true}
    parentMunicipality="Lower Gwynedd Township"
  />
);

export const SpringMountPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Spring Mount" 
    isUnincorporated={true}
    parentMunicipality="Marlborough Township"
  />
);

export const SumneytownPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Sumneytown" 
    isUnincorporated={true}
    parentMunicipality="Marlborough Township"
  />
);

export const TylersportPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Tylersport" 
    isUnincorporated={true}
    parentMunicipality="Franconia Township"
  />
);

export const WestPointPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="West Point" 
    isUnincorporated={true}
    parentMunicipality="Upper Salford Township"
  />
);

export const WorcesterPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Worcester" 
    isUnincorporated={true}
    parentMunicipality="Worcester Township"
  />
);

export const WoxallPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Woxall" 
    isUnincorporated={true}
    parentMunicipality="Upper Gwynedd Township"
  />
);

export const WyncotePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Wyncote" 
    isUnincorporated={true}
    parentMunicipality="Cheltenham Township"
  />
);

export const WynnewoodPage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Wynnewood" 
    isUnincorporated={true}
    parentMunicipality="Lower Merion Township"
  />
);

export const ZieglervillePage = () => (
  <MontgomeryCountyCommunityPage 
    communityName="Zieglerville" 
    isUnincorporated={true}
    parentMunicipality="Perkiomen Township"
  />
);

export default MontgomeryCountyCommunityPage;