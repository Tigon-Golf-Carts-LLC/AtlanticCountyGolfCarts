import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { montgomeryCountyMunicipalities } from "@/data/montgomeryCountyMunicipalities";

// Comprehensive Montgomery County Town Pages
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

// Remaining Montgomery County Town Pages

export function LederachPage() {
  const municipality = findMunicipality('townships', 'Lower Salford');
  return createTownPage(
    'Lederach',
    municipality,
    'Golf Carts Lederach PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Lederach, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Lower Salford Township.',
    'golf carts Lederach PA, Lower Salford golf carts, electric cart dealer Lederach, golf cart service Montgomery County',
    '/lederach-golf-carts'
  );
}

export function MainlandPage() {
  const municipality = findMunicipality('townships', 'Lower Salford');
  return createTownPage(
    'Mainland',
    municipality,
    'Golf Carts Mainland PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Mainland, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Salford Township.',
    'golf carts Mainland PA, Lower Salford golf carts, electric cart dealer Mainland, golf cart rental Montgomery County',
    '/mainland-golf-carts'
  );
}

export function MarlboroughPage() {
  const municipality = findMunicipality('townships', 'Marlborough');
  return createTownPage(
    'Marlborough',
    municipality,
    'Golf Carts Marlborough PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Marlborough, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Marlborough Township.',
    'golf carts Marlborough PA, Marlborough Township golf carts, electric cart dealer Marlborough, golf cart service Montgomery County',
    '/marlborough-golf-carts'
  );
}

export function MelroseParkPage() {
  const municipality = findMunicipality('townships', 'Cheltenham');
  return createTownPage(
    'Melrose Park',
    municipality,
    'Golf Carts Melrose Park PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Melrose Park, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Cheltenham Township.',
    'golf carts Melrose Park PA, Cheltenham golf carts, electric cart dealer Melrose Park, golf cart service Montgomery County',
    '/melrose-park-golf-carts'
  );
}

export function MerionStationPage() {
  const municipality = findMunicipality('townships', 'Lower Merion');
  return createTownPage(
    'Merion Station',
    municipality,
    'Golf Carts Merion Station PA | Main Line Electric Cart Dealer | Montgomery County Golf Carts',
    'Luxury golf carts in Merion Station, PA. Premium Evolution & Denago electric carts for Main Line communities. Expert service in Lower Merion Township.',
    'golf carts Merion Station PA, Main Line golf carts, luxury electric carts Merion Station, premium golf cart dealer Lower Merion',
    '/merion-station-golf-carts'
  );
}

export function MontClarePage() {
  const municipality = findMunicipality('townships', 'Upper Providence');
  return createTownPage(
    'Mont Clare',
    municipality,
    'Golf Carts Mont Clare PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Mont Clare, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Upper Providence Township.',
    'golf carts Mont Clare PA, Upper Providence golf carts, electric cart dealer Mont Clare, golf cart rental Montgomery County',
    '/mont-clare-golf-carts'
  );
}

export function MontgomeryPage() {
  const municipality = findMunicipality('townships', 'Montgomery');
  return createTownPage(
    'Montgomery',
    municipality,
    'Golf Carts Montgomery PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Montgomery, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Montgomery Township.',
    'golf carts Montgomery PA, Montgomery Township golf carts, electric cart dealer Montgomery, golf cart service Montgomery County',
    '/montgomery-golf-carts'
  );
}

export function MontgomeryvillePage() {
  const municipality = findMunicipality('townships', 'Montgomery');
  return createTownPage(
    'Montgomeryville',
    municipality,
    'Golf Carts Montgomeryville PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Montgomeryville, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Montgomery Township.',
    'golf carts Montgomeryville PA, Montgomery Township golf carts, electric cart dealer Montgomeryville, golf cart service Montgomery County',
    '/montgomeryville-golf-carts'
  );
}

export function NarberthPage() {
  const municipality = findMunicipality('boroughs', 'Narberth');
  return createTownPage(
    'Narberth',
    municipality,
    'Golf Carts Narberth PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Narberth, PA. Evolution & Denago electric cart sales, rentals & maintenance. Free delivery in Montgomery County.',
    'golf carts Narberth PA, electric golf carts Narberth, golf cart rental Narberth, golf cart dealer Montgomery County',
    '/narberth-golf-carts'
  );
}

export function NewHanoverPage() {
  const municipality = findMunicipality('townships', 'New Hanover');
  return createTownPage(
    'New Hanover',
    municipality,
    'Golf Carts New Hanover PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in New Hanover, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in New Hanover Township.',
    'golf carts New Hanover PA, New Hanover Township golf carts, electric cart dealer New Hanover, golf cart service Montgomery County',
    '/new-hanover-golf-carts'
  );
}

export function NorristownPage() {
  const municipality = findMunicipality('boroughs', 'Norristown');
  return createTownPage(
    'Norristown',
    municipality,
    'Golf Carts Norristown PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Leading golf cart dealer in Norristown, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Norristown PA, electric golf carts Norristown, golf cart rental Norristown, golf cart dealer Montgomery County',
    '/norristown-golf-carts'
  );
}

export function NorthWalesPage() {
  const municipality = findMunicipality('boroughs', 'North Wales');
  return createTownPage(
    'North Wales',
    municipality,
    'Golf Carts North Wales PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Top golf cart dealer in North Wales, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery available.',
    'golf carts North Wales PA, electric golf carts North Wales, golf cart rental North Wales, golf cart dealer Montgomery County',
    '/north-wales-golf-carts'
  );
}

export function OaksPage() {
  const municipality = findMunicipality('townships', 'Upper Providence');
  return createTownPage(
    'Oaks',
    municipality,
    'Golf Carts Oaks PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Oaks, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Upper Providence Township.',
    'golf carts Oaks PA, Upper Providence golf carts, electric cart dealer Oaks, golf cart service Montgomery County',
    '/oaks-golf-carts'
  );
}

export function OrelandPage() {
  const municipality = findMunicipality('townships', 'Springfield');
  return createTownPage(
    'Oreland',
    municipality,
    'Golf Carts Oreland PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Quality golf carts in Oreland, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Springfield Township.',
    'golf carts Oreland PA, Springfield golf carts, electric cart dealer Oreland, golf cart rental Montgomery County',
    '/oreland-golf-carts'
  );
}

export function PalmPage() {
  const municipality = findMunicipality('townships', 'Salford');
  return createTownPage(
    'Palm',
    municipality,
    'Golf Carts Palm PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Professional golf cart solutions in Palm, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Salford Township.',
    'golf carts Palm PA, Salford golf carts, electric cart dealer Palm, golf cart service Montgomery County',
    '/palm-golf-carts'
  );
}

export function PennsburgPage() {
  const municipality = findMunicipality('boroughs', 'Pennsburg');
  return createTownPage(
    'Pennsburg',
    municipality,
    'Golf Carts Pennsburg PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Pennsburg, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Pennsburg PA, electric golf carts Pennsburg, golf cart rental Pennsburg, golf cart dealer Montgomery County',
    '/pennsburg-golf-carts'
  );
}

export function PerkiomenPage() {
  const municipality = findMunicipality('townships', 'Perkiomen');
  return createTownPage(
    'Perkiomen',
    municipality,
    'Golf Carts Perkiomen PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Perkiomen, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Perkiomen Township.',
    'golf carts Perkiomen PA, Perkiomen Township golf carts, electric cart dealer Perkiomen, golf cart service Montgomery County',
    '/perkiomen-golf-carts'
  );
}

export function PerkiomenvillePage() {
  const municipality = findMunicipality('townships', 'Perkiomen');
  return createTownPage(
    'Perkiomenville',
    municipality,
    'Golf Carts Perkiomenville PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Professional golf cart solutions in Perkiomenville, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Perkiomen Township.',
    'golf carts Perkiomenville PA, Perkiomen golf carts, electric cart dealer Perkiomenville, golf cart rental Montgomery County',
    '/perkiomenville-golf-carts'
  );
}

export function PlymouthPage() {
  const municipality = findMunicipality('townships', 'Plymouth');
  return createTownPage(
    'Plymouth',
    municipality,
    'Golf Carts Plymouth PA | Electric Cart Sales & Service | Montgomery County Golf Carts',
    'Quality golf carts in Plymouth, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Plymouth Township.',
    'golf carts Plymouth PA, Plymouth Township golf carts, electric cart dealer Plymouth, golf cart service Montgomery County',
    '/plymouth-golf-carts'
  );
}

export function PlymouthMeetingPage() {
  const municipality = findMunicipality('townships', 'Plymouth');
  return createTownPage(
    'Plymouth Meeting',
    municipality,
    'Golf Carts Plymouth Meeting PA | Electric Cart Dealer | Montgomery County Golf Carts',
    'Top golf cart dealer in Plymouth Meeting, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Plymouth Township.',
    'golf carts Plymouth Meeting PA, Plymouth Township golf carts, electric cart dealer Plymouth Meeting, golf cart service Montgomery County',
    '/plymouth-meeting-golf-carts'
  );
}

export function PottstownPage() {
  const municipality = findMunicipality('boroughs', 'Pottstown');
  return createTownPage(
    'Pottstown',
    municipality,
    'Golf Carts Pottstown PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts',
    'Leading golf cart dealer in Pottstown, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County.',
    'golf carts Pottstown PA, electric golf carts Pottstown, golf cart rental Pottstown, golf cart dealer Montgomery County',
    '/pottstown-golf-carts'
  );
}

// Export all comprehensive town pages
export {
  LederachPage, MainlandPage, MarlboroughPage, MelroseParkPage, MerionStationPage,
  MontClarePage, MontgomeryPage, MontgomeryvillePage, NarberthPage, NewHanoverPage,
  NorristownPage, NorthWalesPage, OaksPage, OrelandPage, PalmPage,
  PennsburgPage, PerkiomenPage, PerkiomenvillePage, PlymouthPage, PlymouthMeetingPage,
  PottstownPage
};