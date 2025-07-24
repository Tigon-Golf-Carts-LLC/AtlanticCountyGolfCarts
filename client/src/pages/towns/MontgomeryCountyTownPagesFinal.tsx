import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { montgomeryCountyMunicipalities } from "@/data/montgomeryCountyMunicipalities";

// Final batch of Montgomery County Town Pages
// Comprehensive SEO-optimized pages for all remaining municipalities and communities

// Gwynedd Area Page (Lower Gwynedd Township)
export function GwyneddPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Gwynedd");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Gwynedd PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Gwynedd, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Gwynedd Township." />
        <meta name="keywords" content="golf carts Gwynedd PA, Lower Gwynedd golf carts, electric cart dealer Gwynedd, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/gwynedd-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Gwynedd Valley Area Page (Lower Gwynedd Township)
export function GwyneddValleyPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Gwynedd");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Gwynedd Valley PA | Premium Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Gwynedd Valley, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Lower Gwynedd Township." />
        <meta name="keywords" content="golf carts Gwynedd Valley PA, Lower Gwynedd golf carts, premium electric carts Gwynedd Valley, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/gwynedd-valley-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Harleysville Area Page (Salford Township)
export function HarleysvillePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Salford");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Harleysville PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Harleysville, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Salford Township." />
        <meta name="keywords" content="golf carts Harleysville PA, Salford golf carts, electric cart dealer Harleysville, golf cart rental Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/harleysville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Hatboro Borough Page
export function HatboroPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Hatboro");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Hatboro PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Reliable golf carts in Hatboro, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County. Call (215) 855-6400." />
        <meta name="keywords" content="golf carts Hatboro PA, electric golf carts Hatboro, golf cart rental Hatboro, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/hatboro-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Hatfield Borough Page
export function HatfieldTownPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Hatfield");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Hatfield PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Hatfield, PA. Evolution & Denago electric cart sales, rentals & maintenance. Expert service in Montgomery County." />
        <meta name="keywords" content="golf carts Hatfield PA, electric golf carts Hatfield, golf cart rental Hatfield, Hatfield Borough golf carts" />
        <link rel="canonical" href="https://montcogolfcarts.com/hatfield-borough-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Haverford Area Page (Lower Merion Township)
export function HaverfordPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Merion");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Haverford PA | Main Line Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Luxury golf carts in Haverford, PA. Premium Evolution & Denago electric carts for Main Line communities. Expert service & competitive pricing in Lower Merion." />
        <meta name="keywords" content="golf carts Haverford PA, Main Line golf carts, luxury electric carts Haverford, premium golf cart dealer Lower Merion" />
        <link rel="canonical" href="https://montcogolfcarts.com/haverford-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Horsham Township Page
export function HorshamPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Horsham");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Horsham PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Horsham, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Horsham Township." />
        <meta name="keywords" content="golf carts Horsham PA, Horsham Township golf carts, electric cart dealer Horsham, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/horsham-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Huntingdon Valley Area Page (Lower Moreland Township)
export function HuntingdonValleyPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Moreland");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Huntingdon Valley PA | Premium Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Huntingdon Valley, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Moreland Township." />
        <meta name="keywords" content="golf carts Huntingdon Valley PA, Lower Moreland golf carts, premium electric carts Huntingdon Valley, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/huntingdon-valley-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Jenkintown Borough Page
export function JenkintownPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Jenkintown");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Jenkintown PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Jenkintown, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery in Montgomery County." />
        <meta name="keywords" content="golf carts Jenkintown PA, electric golf carts Jenkintown, golf cart rental Jenkintown, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/jenkintown-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// King of Prussia Area Page (Upper Merion Township)
export function KingOfPrussiaPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Merion");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts King of Prussia PA | Premium Electric Cart Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Leading golf cart dealer in King of Prussia, PA. Evolution & Denago electric cart sales, rentals & expert service. Professional maintenance in Upper Merion Township." />
        <meta name="keywords" content="golf carts King of Prussia PA, Upper Merion golf carts, premium electric carts KOP, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/king-of-prussia-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Kulpsville Area Page (Towamencin Township)
export function KulpsvillePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Towamencin");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Kulpsville PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Kulpsville, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Towamencin Township." />
        <meta name="keywords" content="golf carts Kulpsville PA, Towamencin golf carts, electric cart dealer Kulpsville, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/kulpsville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Lafayette Hill Area Page (Whitemarsh Township)
export function LafayetteHillPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Whitemarsh");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Lafayette Hill PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Lafayette Hill, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Whitemarsh Township." />
        <meta name="keywords" content="golf carts Lafayette Hill PA, Whitemarsh golf carts, electric cart dealer Lafayette Hill, golf cart rental Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/lafayette-hill-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Lansdale Borough Page
export function LansdalePage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Lansdale");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Lansdale PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Lansdale, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County. Call (215) 855-6400." />
        <meta name="keywords" content="golf carts Lansdale PA, electric golf carts Lansdale, golf cart rental Lansdale, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/lansdale-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Continue with more pages... Export current batch
export {
  GwyneddPage, GwyneddValleyPage, HarleysvillePage, HatboroPage, HatfieldTownPage,
  HaverfordPage, HorshamPage, HuntingdonValleyPage, JenkintownPage, KingOfPrussiaPage,
  KulpsvillePage, LafayetteHillPage, LansdalePage
};