import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { montgomeryCountyMunicipalities } from "@/data/montgomeryCountyMunicipalities";

// Final remaining Montgomery County Town Pages
// All remaining municipalities and neighborhoods with SEO optimization

// Helper function to find municipality by type and name
const findMunicipality = (type: 'boroughs' | 'townships', name: string) => {
  return montgomeryCountyMunicipalities[type].find(m => m.name === name);
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

// Remaining Town Pages - Final Set

export function RedHillPage() {
  const municipality = findMunicipality('boroughs', 'Red Hill');
  return createTownPage(
    'Red Hill',
    municipality,
    'Golf Carts Red Hill PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Red Hill, PA. Evolution & Denago electric cart sales, rentals & maintenance. Free delivery in Montgomery County.',
    'golf carts Red Hill PA, electric golf carts Red Hill, golf cart rental Red Hill, golf cart dealer Montgomery County',
    '/red-hill-golf-carts'
  );
}

export function RockledgePage() {
  const municipality = findMunicipality('boroughs', 'Rockledge');
  return createTownPage(
    'Rockledge',
    municipality,
    'Golf Carts Rockledge PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Professional golf cart solutions in Rockledge, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery available.',
    'golf carts Rockledge PA, electric golf carts Rockledge, golf cart rental Rockledge, golf cart dealer Montgomery County',
    '/rockledge-golf-carts'
  );
}

export function RoyersfordPage() {
  const municipality = findMunicipality('boroughs', 'Royersford');
  return createTownPage(
    'Royersford',
    municipality,
    'Golf Carts Royersford PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Top golf cart dealer in Royersford, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance available.',
    'golf carts Royersford PA, electric golf carts Royersford, golf cart rental Royersford, golf cart dealer Montgomery County',
    '/royersford-golf-carts'
  );
}

export function SalfordPage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Salford',
    municipality,
    'Golf Carts Salford PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Salford, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Salford Township.',
    'golf carts Salford PA, Salford Township golf carts, electric cart dealer Salford, golf cart service Montgomery County',
    '/salford-golf-carts'
  );
}

export function SalfordvillePage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Salfordville',
    municipality,
    'Golf Carts Salfordville PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Salfordville, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Salford Township.',
    'golf carts Salfordville PA, Salford golf carts, electric cart dealer Salfordville, golf cart rental Montgomery County',
    '/salfordville-golf-carts'
  );
}

export function SassamansvillePage() {
  const municipality = findMunicipality('townships', 'New Hanover');
  return createTownPage(
    'Sassamansville',
    municipality,
    'Golf Carts Sassamansville PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Sassamansville, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in New Hanover Township.',
    'golf carts Sassamansville PA, New Hanover golf carts, electric cart dealer Sassamansville, golf cart service Montgomery County',
    '/sassamansville-golf-carts'
  );
}

export function SchwenksvillePage() {
  const municipality = findMunicipality('boroughs', 'Schwenksville');
  return createTownPage(
    'Schwenksville',
    municipality,
    'Golf Carts Schwenksville PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Schwenksville, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Schwenksville PA, electric golf carts Schwenksville, golf cart rental Schwenksville, golf cart dealer Montgomery County',
    '/schwenksville-golf-carts'
  );
}

export function SkippackPage() {
  const municipality = findMunicipality('townships', 'Skippack');
  return createTownPage(
    'Skippack',
    municipality,
    'Golf Carts Skippack PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Skippack, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Skippack Township.',
    'golf carts Skippack PA, Skippack Township golf carts, electric cart dealer Skippack, golf cart service Montgomery County',
    '/skippack-golf-carts'
  );
}

export function SoudertonPage() {
  const municipality = findMunicipality('boroughs', 'Souderton');
  return createTownPage(
    'Souderton',
    municipality,
    'Golf Carts Souderton PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Souderton, PA. Evolution & Denago electric cart sales, rentals & maintenance. Free delivery in Montgomery County.',
    'golf carts Souderton PA, electric golf carts Souderton, golf cart rental Souderton, golf cart dealer Montgomery County',
    '/souderton-golf-carts'
  );
}

export function SpringfieldPage() {
  const municipality = findMunicipality('townships', 'Springfield');
  return createTownPage(
    'Springfield',
    municipality,
    'Golf Carts Springfield PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Springfield, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Springfield Township.',
    'golf carts Springfield PA, Springfield Township golf carts, electric cart dealer Springfield, golf cart service Montgomery County',
    '/springfield-golf-carts'
  );
}

export function SpringHousePage() {
  const municipality = findMunicipality('townships', 'Lower Salford');
  return createTownPage(
    'Spring House',
    municipality,
    'Golf Carts Spring House PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Spring House, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Lower Salford Township.',
    'golf carts Spring House PA, Lower Salford golf carts, electric cart dealer Spring House, golf cart rental Montgomery County',
    '/spring-house-golf-carts'
  );
}

export function SpringMountPage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Spring Mount',
    municipality,
    'Golf Carts Spring Mount PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Spring Mount, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Salford Township.',
    'golf carts Spring Mount PA, Salford golf carts, electric cart dealer Spring Mount, golf cart service Montgomery County',
    '/spring-mount-golf-carts'
  );
}

export function SumneytownPage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Sumneytown',
    municipality,
    'Golf Carts Sumneytown PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Sumneytown, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Salford Township.',
    'golf carts Sumneytown PA, Salford golf carts, electric cart dealer Sumneytown, golf cart rental Montgomery County',
    '/sumneytown-golf-carts'
  );
}

export function TelfordPage() {
  const municipality = findMunicipality('boroughs', 'Telford');
  return createTownPage(
    'Telford',
    municipality,
    'Golf Carts Telford PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Telford, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Telford PA, electric golf carts Telford, golf cart rental Telford, golf cart dealer Montgomery County',
    '/telford-golf-carts'
  );
}

export function TowamencinPage() {
  const municipality = findMunicipality('townships', 'Towamencin');
  return createTownPage(
    'Towamencin',
    municipality,
    'Golf Carts Towamencin PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Towamencin, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Towamencin Township.',
    'golf carts Towamencin PA, Towamencin Township golf carts, electric cart dealer Towamencin, golf cart service Montgomery County',
    '/towamencin-golf-carts'
  );
}

export function TrappePage() {
  const municipality = findMunicipality('boroughs', 'Trappe');
  return createTownPage(
    'Trappe',
    municipality,
    'Golf Carts Trappe PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Trappe, PA. Evolution & Denago electric cart sales, rentals & maintenance. Free delivery in Montgomery County.',
    'golf carts Trappe PA, electric golf carts Trappe, golf cart rental Trappe, golf cart dealer Montgomery County',
    '/trappe-golf-carts'
  );
}

export function TylersportPage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Tylersport',
    municipality,
    'Golf Carts Tylersport PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Tylersport, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Salford Township.',
    'golf carts Tylersport PA, Salford golf carts, electric cart dealer Tylersport, golf cart service Montgomery County',
    '/tylersport-golf-carts'
  );
}

export function WestConshohockenPageFinal() {
  const municipality = findMunicipality('boroughs', 'West Conshohocken');
  return createTownPage(
    'West Conshohocken',
    municipality,
    'Golf Carts West Conshohocken PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in West Conshohocken, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery available.',
    'golf carts West Conshohocken PA, electric golf carts West Conshohocken, golf cart rental West Conshohocken, golf cart dealer Montgomery County',
    '/west-conshohocken-golf-carts'
  );
}

export function WestPointPageFinal() {
  const municipality = findMunicipality('townships', 'Upper Merion');
  return createTownPage(
    'West Point',
    municipality,
    'Golf Carts West Point PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in West Point, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Upper Merion Township.',
    'golf carts West Point PA, Upper Merion golf carts, electric cart dealer West Point, golf cart service Montgomery County',
    '/west-point-golf-carts'
  );
}

export function WillowGrovePageFinal() {
  const municipality = findMunicipality('townships', 'Upper Moreland');
  return createTownPage(
    'Willow Grove',
    municipality,
    'Golf Carts Willow Grove PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Willow Grove, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Upper Moreland Township.',
    'golf carts Willow Grove PA, Upper Moreland golf carts, electric cart dealer Willow Grove, golf cart rental Montgomery County',
    '/willow-grove-golf-carts'
  );
}

export function WynnewoodPageFinal() {
  const municipality = findMunicipality('townships', 'Lower Merion');
  return createTownPage(
    'Wynnewood',
    municipality,
    'Golf Carts Wynnewood PA | Main Line Electric Cart Dealer | Montgomery County Golf Carts',
    'Luxury golf carts in Wynnewood, PA. Premium Evolution & Denago electric carts for Main Line communities. Expert service in Lower Merion Township.',
    'golf carts Wynnewood PA, Main Line golf carts, luxury electric carts Wynnewood, premium golf cart dealer Lower Merion',
    '/wynnewood-golf-carts'
  );
}

export function ZieglervillePageFinal() {
  const municipality = findMunicipality('townships', 'New Hanover');
  return createTownPage(
    'Zieglerville',
    municipality,
    'Golf Carts Zieglerville PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Zieglerville, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in New Hanover Township.',
    'golf carts Zieglerville PA, New Hanover golf carts, electric cart dealer Zieglerville, golf cart service Montgomery County',
    '/zieglerville-golf-carts'
  );
}