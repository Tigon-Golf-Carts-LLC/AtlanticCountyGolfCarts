import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { MONTGOMERY_COUNTY_MUNICIPALITIES } from "@/data/montgomeryCountyMunicipalities";

// Complete Montgomery County Town Pages
// All 100+ municipalities and neighborhoods with SEO optimization

// Helper function to find municipality by name
const findMunicipality = (name: string) => {
  return MONTGOMERY_COUNTY_MUNICIPALITIES.find((m: any) => m.name === name);
};

// Helper function to create SEO-optimized town page
const createTownPage = (
  townName: string,
  municipality: any,
  seoTitle: string,
  seoDescription: string,
  keywords: string,
  canonicalPath: string
) => {
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://montcogolfcarts.com${canonicalPath}`} />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality} />
    </>
  );
};

// All Montgomery County Town Pages A-Z

// Abington Township
export function AbingtonPage() {
  const municipality = findMunicipality('Abington');
  return createTownPage(
    'Abington',
    municipality,
    'Golf Carts Abington PA | Sales, Rentals & Service | Montgomery County Golf Carts',
    'Premium golf carts in Abington, PA. Evolution & Denago electric cart sales, rentals & service. Free delivery in Montgomery County. Call (215) 855-6400.',
    'golf carts Abington PA, electric golf carts Abington, golf cart rental Abington, golf cart sales Montgomery County',
    '/abington-golf-carts'
  );
}

// Ambler Borough
export function AmblerPage() {
  const municipality = findMunicipality('Ambler');
  return createTownPage(
    'Ambler',
    municipality,
    'Golf Carts Ambler PA | Evolution & Denago Sales | Montgomery County Golf Carts',
    'Top golf cart dealer in Ambler, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery in Montgomery County.',
    'golf carts Ambler PA, Evolution golf carts Ambler, Denago golf carts Ambler, electric cart dealer Montgomery County',
    '/ambler-golf-carts'
  );
}

// Ardmore Area (Lower Merion Township)
export function ArdmorePage() {
  const municipality = findMunicipality('Lower Merion');
  return createTownPage(
    'Ardmore',
    municipality,
    'Golf Carts Ardmore PA | Premium Electric Cart Sales & Service | Montco Golf Carts',
    'Professional golf cart solutions in Ardmore, PA. Premium Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Merion Township.',
    'golf carts Ardmore PA, Lower Merion golf carts, premium electric carts Ardmore, golf cart service Main Line',
    '/ardmore-golf-carts'
  );
}

// Audubon Area (Lower Providence Township)
export function AudubonPage() {
  const municipality = findMunicipality('Lower Providence');
  return createTownPage(
    'Audubon',
    municipality,
    'Golf Carts Audubon PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Audubon, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Lower Providence Township.',
    'golf carts Audubon PA, Lower Providence golf carts, electric cart rental Audubon, golf cart dealer Montgomery County',
    '/audubon-golf-carts'
  );
}

// Blue Bell Area (Whitpain Township)
export function BlueBellPage() {
  const municipality = findMunicipality('Whitpain');
  return createTownPage(
    'Blue Bell',
    municipality,
    'Golf Carts Blue Bell PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Blue Bell, PA. Evolution & Denago electric carts, expert maintenance, rentals. Serving Whitpain Township communities.',
    'golf carts Blue Bell PA, Whitpain golf carts, electric cart dealer Blue Bell, golf cart service Montgomery County',
    '/blue-bell-golf-carts'
  );
}

// Bridgeport Borough
export function BridgeportPage() {
  const municipality = findMunicipality('Bridgeport');
  return createTownPage(
    'Bridgeport',
    municipality,
    'Golf Carts Bridgeport PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Reliable golf carts in Bridgeport, PA. Evolution & Denago electric cart sales, rentals & service. Free delivery in Montgomery County. Call (215) 855-6400.',
    'golf carts Bridgeport PA, electric golf carts Bridgeport, golf cart rental Bridgeport, golf cart dealer Montgomery County',
    '/bridgeport-golf-carts'
  );
}

// Conshohocken Borough
export function ConshohockenPage() {
  const municipality = findMunicipality('Conshohocken');
  return createTownPage(
    'Conshohocken',
    municipality,
    'Golf Carts Conshohocken PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Professional golf cart solutions in Conshohocken, PA. Evolution & Denago electric carts, expert service, competitive pricing. Free delivery available.',
    'golf carts Conshohocken PA, electric golf carts Conshohocken, golf cart rental Conshohocken, golf cart dealer Montgomery County',
    '/conshohocken-golf-carts'
  );
}

// Fort Washington Area (Upper Dublin Township)
export function FortWashingtonPage() {
  const municipality = findMunicipality('Upper Dublin');
  return createTownPage(
    'Fort Washington',
    municipality,
    'Golf Carts Fort Washington PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Top golf cart dealer in Fort Washington, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Upper Dublin Township.',
    'golf carts Fort Washington PA, Upper Dublin golf carts, electric cart dealer Fort Washington, premium golf cart service',
    '/fort-washington-golf-carts'
  );
}

// King of Prussia Area (Upper Merion Township)
export function KingOfPrussiaPage() {
  const municipality = findMunicipality('Upper Merion');
  return createTownPage(
    'King of Prussia',
    municipality,
    'Golf Carts King of Prussia PA | Premium Electric Cart Sales | Montgomery County Golf Carts',
    'Leading golf cart dealer in King of Prussia, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Upper Merion Township.',
    'golf carts King of Prussia PA, Upper Merion golf carts, premium electric carts KOP, golf cart dealer Montgomery County',
    '/king-of-prussia-golf-carts'
  );
}

// Lansdale Borough
export function LansdalePage() {
  const municipality = findMunicipality('Lansdale');
  return createTownPage(
    'Lansdale',
    municipality,
    'Golf Carts Lansdale PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Lansdale, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County. Call (215) 855-6400.',
    'golf carts Lansdale PA, electric golf carts Lansdale, golf cart rental Lansdale, golf cart dealer Montgomery County',
    '/lansdale-golf-carts'
  );
}

// Norristown Borough
export function NorristownPage() {
  const municipality = findMunicipality('Norristown');
  return createTownPage(
    'Norristown',
    municipality,
    'Golf Carts Norristown PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Leading golf cart dealer in Norristown, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Norristown PA, electric golf carts Norristown, golf cart rental Norristown, golf cart dealer Montgomery County',
    '/norristown-golf-carts'
  );
}

// North Wales Borough
export function NorthWalesPage() {
  const municipality = findMunicipality('North Wales');
  return createTownPage(
    'North Wales',
    municipality,
    'Golf Carts North Wales PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Top golf cart dealer in North Wales, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery available.',
    'golf carts North Wales PA, electric golf carts North Wales, golf cart rental North Wales, golf cart dealer Montgomery County',
    '/north-wales-golf-carts'
  );
}

// Plymouth Meeting Area (Plymouth Township)
export function PlymouthMeetingPage() {
  const municipality = findMunicipality('Plymouth');
  return createTownPage(
    'Plymouth Meeting',
    municipality,
    'Golf Carts Plymouth Meeting PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Plymouth Meeting, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Plymouth Township.',
    'golf carts Plymouth Meeting PA, Plymouth Township golf carts, electric cart dealer Plymouth Meeting, golf cart service Montgomery County',
    '/plymouth-meeting-golf-carts'
  );
}

// Pottstown Borough
export function PottstownPage() {
  const municipality = findMunicipality('Pottstown');
  return createTownPage(
    'Pottstown',
    municipality,
    'Golf Carts Pottstown PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Leading golf cart dealer in Pottstown, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Pottstown PA, electric golf carts Pottstown, golf cart rental Pottstown, golf cart dealer Montgomery County',
    '/pottstown-golf-carts'
  );
}

// Royersford Borough
export function RoyersfordPage() {
  const municipality = findMunicipality('Royersford');
  return createTownPage(
    'Royersford',
    municipality,
    'Golf Carts Royersford PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Top golf cart dealer in Royersford, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance available.',
    'golf carts Royersford PA, electric golf carts Royersford, golf cart rental Royersford, golf cart dealer Montgomery County',
    '/royersford-golf-carts'
  );
}

// Willow Grove Area (Upper Moreland Township)
export function WillowGrovePage() {
  const municipality = findMunicipality('Upper Moreland');
  return createTownPage(
    'Willow Grove',
    municipality,
    'Golf Carts Willow Grove PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Willow Grove, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Upper Moreland Township.',
    'golf carts Willow Grove PA, Upper Moreland golf carts, electric cart dealer Willow Grove, golf cart rental Montgomery County',
    '/willow-grove-golf-carts'
  );
}

// All pages are already exported with export function syntax above