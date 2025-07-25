// Complete list of all Atlantic County municipalities 
// Cities + Boroughs + Townships + Unincorporated Communities

export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township' | 'Community';
  slug: string;
  url: string;
}

export const ATLANTIC_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities and Primary Municipalities
  { name: "Absecon", type: "City", slug: "absecon", url: "/absecon" },
  { name: "Atlantic City", type: "City", slug: "atlantic-city", url: "/atlantic-city" },
  { name: "Brigantine", type: "City", slug: "brigantine", url: "/brigantine" },
  { name: "Buena", type: "Borough", slug: "buena", url: "/buena" },
  { name: "Buena Vista Township", type: "Township", slug: "buena-vista-township", url: "/buena-vista-township" },
  { name: "Cologne", type: "Community", slug: "cologne", url: "/cologne" },
  { name: "Corvallis Township", type: "Township", slug: "corvallis-township", url: "/corvallis-township" },
  { name: "Egg Harbor City", type: "City", slug: "egg-harbor-city", url: "/egg-harbor-city" },
  { name: "Egg Harbor Township", type: "Township", slug: "egg-harbor-township", url: "/egg-harbor-township" },
  { name: "Estell Manor", type: "City", slug: "estell-manor", url: "/estell-manor" },
  { name: "Folsom", type: "Borough", slug: "folsom", url: "/folsom" },
  { name: "Galloway Township", type: "Township", slug: "galloway-township", url: "/galloway-township" },
  { name: "Hamilton Township", type: "Township", slug: "hamilton-township", url: "/hamilton-township" },
  { name: "Hammonton", type: "City", slug: "hammonton", url: "/hammonton" },
  { name: "Linwood", type: "City", slug: "linwood", url: "/linwood" },
  { name: "Longport", type: "Borough", slug: "longport", url: "/longport" },
  { name: "Margate City", type: "City", slug: "margate-city", url: "/margate-city" },
  { name: "Mays Landing", type: "Community", slug: "mays-landing", url: "/mays-landing" },
  { name: "Mullica Township", type: "Township", slug: "mullica-township", url: "/mullica-township" },
  { name: "Newtonville", type: "Community", slug: "newtonville", url: "/newtonville" },
  { name: "Northfield", type: "City", slug: "northfield", url: "/northfield" },
  { name: "Pleasantville", type: "City", slug: "pleasantville", url: "/pleasantville" },
  { name: "Port Republic", type: "City", slug: "port-republic", url: "/port-republic" },
  { name: "Somers Dale Point", type: "Community", slug: "somers-dale-point", url: "/somers-dale-point" },
  { name: "Somers Point", type: "City", slug: "somers-point", url: "/somers-point" },
  { name: "Ventnor City", type: "City", slug: "ventnor-city", url: "/ventnor-city" },
  { name: "Weymouth Township", type: "Township", slug: "weymouth-township", url: "/weymouth-township" },
];

// Major communities for homepage display (first 24)
export const FEATURED_ATLANTIC_MUNICIPALITIES = ATLANTIC_COUNTY_MUNICIPALITIES.slice(0, 24);

// All municipalities count
export const TOTAL_ATLANTIC_MUNICIPALITIES = ATLANTIC_COUNTY_MUNICIPALITIES.length;