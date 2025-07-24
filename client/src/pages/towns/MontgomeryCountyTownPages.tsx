import { Helmet } from "react-helmet-async";
import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { montgomeryCountyMunicipalities } from "@/data/montgomeryCountyMunicipalities";

// SEO-optimized individual town pages for Montgomery County, PA
// Each page targets specific search intent for golf cart sales, rentals, and services

// Abington Township Page
export function AbingtonPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Abington");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Abington PA | Sales, Rentals & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Premium golf carts in Abington, PA. Evolution & Denago electric cart sales, rentals & service. Free delivery in Montgomery County. Call (215) 855-6400." />
        <meta name="keywords" content="golf carts Abington PA, electric golf carts Abington, golf cart rental Abington, golf cart sales Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/abington-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Ambler Borough Page
export function AmblerPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Ambler");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Ambler PA | Evolution & Denago Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Ambler, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery in Montgomery County." />
        <meta name="keywords" content="golf carts Ambler PA, Evolution golf carts Ambler, Denago golf carts Ambler, electric cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/ambler-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Ardmore Area Page (Lower Merion Township)
export function ArdmorePage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Merion");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Ardmore PA | Premium Electric Cart Sales & Service | Montco Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Ardmore, PA. Premium Evolution & Denago electric carts, expert service, competitive pricing. Serving Lower Merion Township." />
        <meta name="keywords" content="golf carts Ardmore PA, Lower Merion golf carts, premium electric carts Ardmore, golf cart service Main Line" />
        <link rel="canonical" href="https://montcogolfcarts.com/ardmore-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Audubon Area Page (Lower Providence Township)
export function AudubonPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Providence");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Audubon PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Audubon, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Lower Providence Township." />
        <meta name="keywords" content="golf carts Audubon PA, Lower Providence golf carts, electric cart rental Audubon, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/audubon-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Bala Cynwyd Area Page (Lower Merion Township)
export function BalaCynwydPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Lower Merion");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Bala Cynwyd PA | Main Line Electric Cart Dealer | Montco Golf Carts</title>
        <meta name="description" content="Luxury golf carts in Bala Cynwyd, PA. Premium Evolution & Denago electric carts for Main Line communities. Expert service & competitive pricing." />
        <meta name="keywords" content="golf carts Bala Cynwyd PA, Main Line golf carts, luxury electric carts Bala Cynwyd, premium golf cart dealer" />
        <link rel="canonical" href="https://montcogolfcarts.com/bala-cynwyd-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Blue Bell Area Page (Whitpain Township)
export function BlueBellPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Whitpain");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Blue Bell PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Blue Bell, PA. Evolution & Denago electric carts, expert maintenance, rentals. Serving Whitpain Township communities." />
        <meta name="keywords" content="golf carts Blue Bell PA, Whitpain golf carts, electric cart dealer Blue Bell, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/blue-bell-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Bridgeport Borough Page
export function BridgeportPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Bridgeport");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Bridgeport PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Reliable golf carts in Bridgeport, PA. Evolution & Denago electric cart sales, rentals & service. Free delivery in Montgomery County. Call (215) 855-6400." />
        <meta name="keywords" content="golf carts Bridgeport PA, electric golf carts Bridgeport, golf cart rental Bridgeport, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/bridgeport-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Bryn Athyn Borough Page
export function BrynAthynPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Bryn Athyn");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Bryn Athyn PA | Premium Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Bryn Athyn, PA. Evolution & Denago electric cart sales, professional service & rentals. Expert maintenance in Montgomery County." />
        <meta name="keywords" content="golf carts Bryn Athyn PA, electric golf carts Bryn Athyn, golf cart service Bryn Athyn, premium golf cart dealer" />
        <link rel="canonical" href="https://montcogolfcarts.com/bryn-athyn-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Cedars Area Page (Abington Township)
export function CedarsPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Abington");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Cedars PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Cedars, PA. Evolution & Denago electric carts, expert service, competitive pricing. Serving Abington Township." />
        <meta name="keywords" content="golf carts Cedars PA, Abington golf carts, electric cart dealer Cedars, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/cedars-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Cheltenham Township Page
export function CheltenhamPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Cheltenham");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Cheltenham PA | Electric Cart Sales & Rentals | Montgomery County Golf Carts</title>
        <meta name="description" content="Top golf cart dealer in Cheltenham, PA. New & used Evolution, Denago electric carts. Professional service, rentals & parts. Free delivery in Montgomery County." />
        <meta name="keywords" content="golf carts Cheltenham PA, electric golf carts Cheltenham, golf cart rental Cheltenham, Cheltenham Township golf carts" />
        <link rel="canonical" href="https://montcogolfcarts.com/cheltenham-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Collegeville Borough Page
export function CollegevillePage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Collegeville");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Collegeville PA | Evolution & Denago Sales | Montgomery County Golf Carts</title>
        <meta name="description" content="Premium golf carts in Collegeville, PA. Evolution & Denago electric cart sales, rentals & expert service. Free delivery in Montgomery County. Call today!" />
        <meta name="keywords" content="golf carts Collegeville PA, Evolution golf carts Collegeville, Denago golf carts Collegeville, electric cart dealer" />
        <link rel="canonical" href="https://montcogolfcarts.com/collegeville-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Colmar Area Page (Hatfield Township)
export function ColmarPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Hatfield");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Colmar PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Quality golf carts in Colmar, PA. Evolution & Denago electric cart sales, rentals & maintenance. Professional service in Hatfield Township." />
        <meta name="keywords" content="golf carts Colmar PA, Hatfield golf carts, electric cart dealer Colmar, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/colmar-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Conshohocken Borough Page
export function ConshohockenPage() {
  const municipality = montgomeryCountyMunicipalities.boroughs.find(b => b.name === "Conshohocken");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Conshohocken PA | Electric Cart Dealer | Montgomery County Golf Carts</title>
        <meta name="description" content="Professional golf cart solutions in Conshohocken, PA. Evolution & Denago electric carts, expert service, competitive pricing. Free delivery available." />
        <meta name="keywords" content="golf carts Conshohocken PA, electric golf carts Conshohocken, golf cart rental Conshohocken, golf cart dealer Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/conshohocken-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Continue with remaining towns... I'll create more pages in batches
// This is getting quite long, so I'll continue with the rest

// Creamery Area Page (Upper Providence Township)
export function CreameryPage() {
  const municipality = montgomeryCountyMunicipalities.townships.find(t => t.name === "Upper Providence");
  
  return (
    <>
      <Helmet>
        <title>Golf Carts Creamery PA | Electric Cart Sales & Service | Montgomery County Golf Carts</title>
        <meta name="description" content="Reliable golf carts in Creamery, PA. Evolution & Denago electric cart sales, rentals & maintenance. Serving Upper Providence Township communities." />
        <meta name="keywords" content="golf carts Creamery PA, Upper Providence golf carts, electric cart dealer Creamery, golf cart service Montgomery County" />
        <link rel="canonical" href="https://montcogolfcarts.com/creamery-golf-carts" />
      </Helmet>
      <MontgomeryCountyMunicipalityPage municipality={municipality!} />
    </>
  );
}

// Due to length constraints, I'll create the remaining pages in separate components
// Export all town pages for easy import
export {
  AbingtonPage, AmblerPage, ArdmorePage, AudubonPage, BalaCynwydPage,
  BlueBellPage, BridgeportPage, BrynAthynPage, CedarsPage, CheltenhamPage,
  CollegevillePage, ColmarPage, ConshohockenPage, CreameryPage
};