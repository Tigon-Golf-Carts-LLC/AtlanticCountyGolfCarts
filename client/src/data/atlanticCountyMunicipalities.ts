// Complete list of all Atlantic County municipalities 
// Cities + Boroughs + Townships + Unincorporated Communities

export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township' | 'Community';
  slug: string;
  url: string;
}

export const ATLANTIC_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities
  { name: "Atlantic City", type: "City", slug: "atlantic-city", url: "/atlantic-city-golf-carts" },
  { name: "Brigantine", type: "City", slug: "brigantine", url: "/brigantine-golf-carts" },
  { name: "Egg Harbor City", type: "City", slug: "egg-harbor-city", url: "/egg-harbor-city-golf-carts" },
  { name: "Hammonton", type: "City", slug: "hammonton", url: "/hammonton-golf-carts" },
  { name: "Linwood", type: "City", slug: "linwood", url: "/linwood-golf-carts" },
  { name: "Longport", type: "Borough", slug: "longport", url: "/longport-golf-carts" },
  { name: "Margate City", type: "City", slug: "margate-city", url: "/margate-city-golf-carts" },
  { name: "Northfield", type: "City", slug: "northfield", url: "/northfield-golf-carts" },
  { name: "Pleasantville", type: "City", slug: "pleasantville", url: "/pleasantville-golf-carts" },
  { name: "Somers Point", type: "City", slug: "somers-point", url: "/somers-point-golf-carts" },
  { name: "Ventnor City", type: "City", slug: "ventnor-city", url: "/ventnor-city-golf-carts" },
  
  // Townships
  { name: "Absecon", type: "City", slug: "absecon", url: "/absecon-golf-carts" },
  { name: "Buena", type: "Borough", slug: "buena", url: "/buena-golf-carts" },
  { name: "Egg Harbor Township", type: "Township", slug: "egg-harbor-township", url: "/egg-harbor-township-golf-carts" },
  { name: "Estell Manor", type: "City", slug: "estell-manor", url: "/estell-manor-golf-carts" },
  { name: "Mays Landing", type: "Community", slug: "mays-landing", url: "/mays-landing-golf-carts" },
  { name: "Port Republic", type: "City", slug: "port-republic", url: "/port-republic-golf-carts" },
  
  // Unincorporated Communities
  { name: "Cologne", type: "Community", slug: "cologne", url: "/cologne-golf-carts" },
  { name: "Dorothy", type: "Community", slug: "dorothy", url: "/dorothy-golf-carts" },
  { name: "Elwood", type: "Community", slug: "elwood", url: "/elwood-golf-carts" },
  { name: "Landisville", type: "Community", slug: "landisville", url: "/landisville-golf-carts" },
  { name: "Leeds Point", type: "Community", slug: "leeds-point", url: "/leeds-point-golf-carts" },
  { name: "Milmay", type: "Community", slug: "milmay", url: "/milmay-golf-carts" },
  { name: "Minotola", type: "Community", slug: "minotola", url: "/minotola-golf-carts" },
  { name: "Mizpah", type: "Community", slug: "mizpah", url: "/mizpah-golf-carts" },
  { name: "Newtonville", type: "Community", slug: "newtonville", url: "/newtonville-golf-carts" },
  { name: "Pomona", type: "Community", slug: "pomona", url: "/pomona-golf-carts" },
  { name: "Richland", type: "Community", slug: "richland", url: "/richland-golf-carts" },
];

// Major communities for homepage display (first 24)
export const FEATURED_ATLANTIC_MUNICIPALITIES = ATLANTIC_COUNTY_MUNICIPALITIES.slice(0, 24);

// All municipalities count
export const TOTAL_ATLANTIC_MUNICIPALITIES = ATLANTIC_COUNTY_MUNICIPALITIES.length;