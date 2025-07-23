// Complete list of all Berks County municipalities as provided by the user
// Cities (1) + Boroughs (27) + Townships (44) = 72 total

export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

export const BERKS_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities (1)
  { name: "Reading", type: "City", slug: "reading-city", url: "/reading-city-golf-carts" },
  
  // Boroughs (27)
  { name: "Bally", type: "Borough", slug: "bally-borough", url: "/bally-borough-golf-carts" },
  { name: "Bechtelsville", type: "Borough", slug: "bechtelsville-borough", url: "/bechtelsville-borough-golf-carts" },
  { name: "Bernville", type: "Borough", slug: "bernville-borough", url: "/bernville-borough-golf-carts" },
  { name: "Birdsboro", type: "Borough", slug: "birdsboro-borough", url: "/birdsboro-borough-golf-carts" },
  { name: "Boyertown", type: "Borough", slug: "boyertown-borough", url: "/boyertown-borough-golf-carts" },
  { name: "Centerport", type: "Borough", slug: "centerport-borough", url: "/centerport-borough-golf-carts" },
  { name: "Fleetwood", type: "Borough", slug: "fleetwood-borough", url: "/fleetwood-borough-golf-carts" },
  { name: "Hamburg", type: "Borough", slug: "hamburg-borough", url: "/hamburg-borough-golf-carts" },
  { name: "Kenhorst", type: "Borough", slug: "kenhorst-borough", url: "/kenhorst-borough-golf-carts" },
  { name: "Kutztown", type: "Borough", slug: "kutztown-borough", url: "/kutztown-borough-golf-carts" },
  { name: "Laureldale", type: "Borough", slug: "laureldale-borough", url: "/laureldale-borough-golf-carts" },
  { name: "Leesport", type: "Borough", slug: "leesport-borough", url: "/leesport-borough-golf-carts" },
  { name: "Lenhartsville", type: "Borough", slug: "lenhartsville-borough", url: "/lenhartsville-borough-golf-carts" },
  { name: "Lyons", type: "Borough", slug: "lyons-borough", url: "/lyons-borough-golf-carts" },
  { name: "Mohnton", type: "Borough", slug: "mohnton-borough", url: "/mohnton-borough-golf-carts" },
  { name: "Mount Penn", type: "Borough", slug: "mount-penn-borough", url: "/mount-penn-borough-golf-carts" },
  { name: "New Morgan", type: "Borough", slug: "new-morgan-borough", url: "/new-morgan-borough-golf-carts" },
  { name: "Robesonia", type: "Borough", slug: "robesonia-borough", url: "/robesonia-borough-golf-carts" },
  { name: "St. Lawrence", type: "Borough", slug: "st-lawrence-borough", url: "/st-lawrence-borough-golf-carts" },
  { name: "Shillington", type: "Borough", slug: "shillington-borough", url: "/shillington-borough-golf-carts" },
  { name: "Shoemakersville", type: "Borough", slug: "shoemakersville-borough", url: "/shoemakersville-borough-golf-carts" },
  { name: "Sinking Spring", type: "Borough", slug: "sinking-spring-borough", url: "/sinking-spring-borough-golf-carts" },
  { name: "Topton", type: "Borough", slug: "topton-borough", url: "/topton-borough-golf-carts" },
  { name: "Wernersville", type: "Borough", slug: "wernersville-borough", url: "/wernersville-borough-golf-carts" },
  { name: "West Reading", type: "Borough", slug: "west-reading-borough", url: "/west-reading-borough-golf-carts" },
  { name: "Womelsdorf", type: "Borough", slug: "womelsdorf-borough", url: "/womelsdorf-borough-golf-carts" },
  { name: "Wyomissing", type: "Borough", slug: "wyomissing-borough", url: "/wyomissing-borough-golf-carts" },
  
  // Townships (44)
  { name: "Albany", type: "Township", slug: "albany-township", url: "/albany-township-golf-carts" },
  { name: "Alsace", type: "Township", slug: "alsace-township", url: "/alsace-township-golf-carts" },
  { name: "Amity", type: "Township", slug: "amity-township", url: "/amity-township-golf-carts" },
  { name: "Bern", type: "Township", slug: "bern-township", url: "/bern-township-golf-carts" },
  { name: "Bethel", type: "Township", slug: "bethel-township", url: "/bethel-township-golf-carts" },
  { name: "Brecknock", type: "Township", slug: "brecknock-township", url: "/brecknock-township-golf-carts" },
  { name: "Caernarvon", type: "Township", slug: "caernarvon-township", url: "/caernarvon-township-golf-carts" },
  { name: "Centre", type: "Township", slug: "centre-township", url: "/centre-township-golf-carts" },
  { name: "Colebrookdale", type: "Township", slug: "colebrookdale-township", url: "/colebrookdale-township-golf-carts" },
  { name: "Cumru", type: "Township", slug: "cumru-township", url: "/cumru-township-golf-carts" },
  { name: "District", type: "Township", slug: "district-township", url: "/district-township-golf-carts" },
  { name: "Douglass", type: "Township", slug: "douglass-township", url: "/douglass-township-golf-carts" },
  { name: "Earl", type: "Township", slug: "earl-township", url: "/earl-township-golf-carts" },
  { name: "Exeter", type: "Township", slug: "exeter-township", url: "/exeter-township-golf-carts" },
  { name: "Greenwich", type: "Township", slug: "greenwich-township", url: "/greenwich-township-golf-carts" },
  { name: "Heidelberg", type: "Township", slug: "heidelberg-township", url: "/heidelberg-township-golf-carts" },
  { name: "Hereford", type: "Township", slug: "hereford-township", url: "/hereford-township-golf-carts" },
  { name: "Jefferson", type: "Township", slug: "jefferson-township", url: "/jefferson-township-golf-carts" },
  { name: "Longswamp", type: "Township", slug: "longswamp-township", url: "/longswamp-township-golf-carts" },
  { name: "Lower Alsace", type: "Township", slug: "lower-alsace-township", url: "/lower-alsace-township-golf-carts" },
  { name: "Lower Heidelberg", type: "Township", slug: "lower-heidelberg-township", url: "/lower-heidelberg-township-golf-carts" },
  { name: "Maidencreek", type: "Township", slug: "maidencreek-township", url: "/maidencreek-township-golf-carts" },
  { name: "Marion", type: "Township", slug: "marion-township", url: "/marion-township-golf-carts" },
  { name: "Maxatawny", type: "Township", slug: "maxatawny-township", url: "/maxatawny-township-golf-carts" },
  { name: "Muhlenberg", type: "Township", slug: "muhlenberg-township", url: "/muhlenberg-township-golf-carts" },
  { name: "North Heidelberg", type: "Township", slug: "north-heidelberg-township", url: "/north-heidelberg-township-golf-carts" },
  { name: "Oley", type: "Township", slug: "oley-township", url: "/oley-township-golf-carts" },
  { name: "Ontelaunee", type: "Township", slug: "ontelaunee-township", url: "/ontelaunee-township-golf-carts" },
  { name: "Penn", type: "Township", slug: "penn-township", url: "/penn-township-golf-carts" },
  { name: "Perry", type: "Township", slug: "perry-township", url: "/perry-township-golf-carts" },
  { name: "Pike", type: "Township", slug: "pike-township", url: "/pike-township-golf-carts" },
  { name: "Richmond", type: "Township", slug: "richmond-township", url: "/richmond-township-golf-carts" },
  { name: "Robeson", type: "Township", slug: "robeson-township", url: "/robeson-township-golf-carts" },
  { name: "Rockland", type: "Township", slug: "rockland-township", url: "/rockland-township-golf-carts" },
  { name: "Ruscombmanor", type: "Township", slug: "ruscombmanor-township", url: "/ruscombmanor-township-golf-carts" },
  { name: "South Heidelberg", type: "Township", slug: "south-heidelberg-township", url: "/south-heidelberg-township-golf-carts" },
  { name: "Spring", type: "Township", slug: "spring-township", url: "/spring-township-golf-carts" },
  { name: "Tilden", type: "Township", slug: "tilden-township", url: "/tilden-township-golf-carts" },
  { name: "Tulpehocken", type: "Township", slug: "tulpehocken-township", url: "/tulpehocken-township-golf-carts" },
  { name: "Union", type: "Township", slug: "union-township", url: "/union-township-golf-carts" },
  { name: "Upper Bern", type: "Township", slug: "upper-bern-township", url: "/upper-bern-township-golf-carts" },
  { name: "Upper Tulpehocken", type: "Township", slug: "upper-tulpehocken-township", url: "/upper-tulpehocken-township-golf-carts" },
  { name: "Washington", type: "Township", slug: "washington-township", url: "/washington-township-golf-carts" },
  { name: "Windsor", type: "Township", slug: "windsor-township", url: "/windsor-township-golf-carts" }
];

// Helper functions
export const getMunicipalityBySlug = (slug: string): Municipality | undefined => {
  return BERKS_COUNTY_MUNICIPALITIES.find(m => m.slug === slug);
};

export const getAllCities = (): Municipality[] => {
  return BERKS_COUNTY_MUNICIPALITIES.filter(m => m.type === 'City');
};

export const getAllBoroughs = (): Municipality[] => {
  return BERKS_COUNTY_MUNICIPALITIES.filter(m => m.type === 'Borough');
};

export const getAllTownships = (): Municipality[] => {
  return BERKS_COUNTY_MUNICIPALITIES.filter(m => m.type === 'Township');
};

export const getTotalCount = () => ({
  cities: getAllCities().length,
  boroughs: getAllBoroughs().length,
  townships: getAllTownships().length,
  total: BERKS_COUNTY_MUNICIPALITIES.length
});