import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { montgomeryCountyMunicipalities } from "@/data/montgomeryCountyMunicipalities";

// Extended Montgomery County Town Pages - Part 2
// SEO-optimized pages for remaining municipalities and neighborhoods

// Dresher Area Page (Upper Dublin Township)
export function DresherPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Dublin");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Dresher PA | Premium Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Dresher, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Upper Dublin Township." />
        <meta name="keywords" content="golf carts Dresher PA, Upper Dublin golf carts, premium electric carts Dresher, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/dresher-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Eagleville Area Page (Lower Providence Township)
export function EaglevillePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Providence");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Eagleville PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Eagleville, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Providence Township." />
        <meta name="keywords" content="golf carts Eagleville PA, Lower Providence golf carts, electric cart dealer Eagleville, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/eagleville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// East Greenville Borough Page
export function EastGreenvillePage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "East Greenville");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts East Greenville PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in East Greenville, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery available." />
        <meta name="keywords" content="golf carts East Greenville PA, electric golf carts East Greenville, golf cart rental East Greenville, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/east-greenville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Elkins Park Area Page (Cheltenham Township)
export function ElkinsParkPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Cheltenham");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Elkins Park PA | Premium Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Elkins Park, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Cheltenham Township." />
        <meta name="keywords" content="golf carts Elkins Park PA, Cheltenham golf carts, premium electric carts Elkins Park, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/elkins-park-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Fairview Village Area Page (Upper Providence Township)
export function FairviewVillagePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Providence");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Fairview Village PA | Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Reliable golf carts in Fairview Village, PA. Evolution & Denago electric cart sales, rentals & expert service. Serving Upper Providence Township." />
        <meta name="keywords" content="golf carts Fairview Village PA, Upper Providence golf carts, electric cart dealer Fairview Village, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/fairview-village-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Flourtown Area Page (Springfield Township)
export function FlourtownPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Springfield");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Flourtown PA | Premium Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Flourtown, PA. Evolution & Denago electric carts, expert maintenance, competitive pricing. Serving Springfield Township." />
        <meta name="keywords" content="golf carts Flourtown PA, Springfield golf carts, premium electric carts Flourtown, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/flourtown-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Fort Washington Area Page (Upper Dublin Township)
export function FortWashingtonPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Dublin");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Fort Washington PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Fort Washington, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Upper Dublin Township." />
        <meta name="keywords" content="golf carts Fort Washington PA, Upper Dublin golf carts, electric cart dealer Fort Washington, premium golf cart service" />
        <link rel="canonical" href="https://montcogolfcarts.com/fort-washington-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Franconia Township Page
export function FranconiaPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Franconia");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Franconia PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Franconia, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Franconia Township." />
        <meta name="keywords" content="golf carts Franconia PA, Franconia Township golf carts, electric cart dealer Franconia, golf cart rental Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/franconia-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Frederick Area Page (Upper Frederick Township)
export function FrederickPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Frederick");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Frederick PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Frederick, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Upper Frederick Township." />
        <meta name="keywords" content="golf carts Frederick PA, Upper Frederick golf carts, electric cart dealer Frederick, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/frederick-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Gilbertsville Area Page (New Hanover Township)
export function GilbertsvillePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "New Hanover");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Gilbertsville PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Reliable golf carts in Gilbertsville, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in New Hanover Township." />
        <meta name="keywords" content="golf carts Gilbertsville PA, New Hanover golf carts, electric cart dealer Gilbertsville, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/gilbertsville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Gladwyne Area Page (Lower Merion Township)
export function GladwynePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Merion");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Gladwyne PA | Luxury Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Premium golf carts in Gladwyne, PA. Luxury Evolution & Denago electric carts for Main Line communities. Expert service & competitive pricing in Lower Merion." />
        <meta name="keywords" content="golf carts Gladwyne PA, Main Line golf carts, luxury electric carts Gladwyne, premium golf cart dealer Lower Merion" />
        <link rel="canonical" href="https://montcogolfcarts.com/gladwyne-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Glenside Area Page (Cheltenham Township)
export function GlensidePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Cheltenham");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Glenside PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Glenside, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Cheltenham Township." />
        <meta name="keywords" content="golf carts Glenside PA, Cheltenham golf carts, electric cart dealer Glenside, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/glenside-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Green Lane Borough Page
export function GreenLanePage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Green Lane");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Green Lane PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Green Lane, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery in Montgomery County." />
        <meta name="keywords" content="golf carts Green Lane PA, electric golf carts Green Lane, golf cart rental Green Lane, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/green-lane-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Export all extended town pages
export {
  DresherPage, EaglevillePage, EastGreenvillePage, ElkinsParkPage, FairviewVillagePage,
  FlourtownPage, FortWashingtonPage, FranconiaPage, FrederickPage, GilbertsvillePage,
  GladwynePage, GlensidePage, GreenLanePage
};