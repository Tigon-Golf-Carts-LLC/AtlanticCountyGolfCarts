// Complete list of all Montgomery County municipalities 
// Boroughs (24) + Townships (38) = 62 total (no incorporated cities)

export interface Municipality {
  name: string;
  type: 'Borough' | 'Township';
  slug: string;
  url: string;
}

export const MONTGOMERY_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Boroughs (24)
  { name: "Ambler", type: "Borough", slug: "ambler-borough", url: "/ambler-borough-golf-carts" },
  { name: "Bridgeport", type: "Borough", slug: "bridgeport-borough", url: "/bridgeport-borough-golf-carts" },
  { name: "Bryn Athyn", type: "Borough", slug: "bryn-athyn-borough", url: "/bryn-athyn-borough-golf-carts" },
  { name: "Collegeville", type: "Borough", slug: "collegeville-borough", url: "/collegeville-borough-golf-carts" },
  { name: "Conshohocken", type: "Borough", slug: "conshohocken-borough", url: "/conshohocken-borough-golf-carts" },
  { name: "East Greenville", type: "Borough", slug: "east-greenville-borough", url: "/east-greenville-borough-golf-carts" },
  { name: "Green Lane", type: "Borough", slug: "green-lane-borough", url: "/green-lane-borough-golf-carts" },
  { name: "Hatboro", type: "Borough", slug: "hatboro-borough", url: "/hatboro-borough-golf-carts" },
  { name: "Hatfield", type: "Borough", slug: "hatfield-borough", url: "/hatfield-borough-golf-carts" },
  { name: "Jenkintown", type: "Borough", slug: "jenkintown-borough", url: "/jenkintown-borough-golf-carts" },
  { name: "Lansdale", type: "Borough", slug: "lansdale-borough", url: "/lansdale-borough-golf-carts" },
  { name: "Narberth", type: "Borough", slug: "narberth-borough", url: "/narberth-borough-golf-carts" },
  { name: "Norristown", type: "Borough", slug: "norristown-borough", url: "/norristown-borough-golf-carts" },
  { name: "North Wales", type: "Borough", slug: "north-wales-borough", url: "/north-wales-borough-golf-carts" },
  { name: "Pennsburg", type: "Borough", slug: "pennsburg-borough", url: "/pennsburg-borough-golf-carts" },
  { name: "Pottstown", type: "Borough", slug: "pottstown-borough", url: "/pottstown-borough-golf-carts" },
  { name: "Red Hill", type: "Borough", slug: "red-hill-borough", url: "/red-hill-borough-golf-carts" },
  { name: "Rockledge", type: "Borough", slug: "rockledge-borough", url: "/rockledge-borough-golf-carts" },
  { name: "Royersford", type: "Borough", slug: "royersford-borough", url: "/royersford-borough-golf-carts" },
  { name: "Schwenksville", type: "Borough", slug: "schwenksville-borough", url: "/schwenksville-borough-golf-carts" },
  { name: "Souderton", type: "Borough", slug: "souderton-borough", url: "/souderton-borough-golf-carts" },
  { name: "Telford", type: "Borough", slug: "telford-borough", url: "/telford-borough-golf-carts" },
  { name: "Trappe", type: "Borough", slug: "trappe-borough", url: "/trappe-borough-golf-carts" },
  { name: "West Conshohocken", type: "Borough", slug: "west-conshohocken-borough", url: "/west-conshohocken-borough-golf-carts" },
  
  // Townships (38)
  { name: "Abington", type: "Township", slug: "abington-township", url: "/abington-township-golf-carts" },
  { name: "Cheltenham", type: "Township", slug: "cheltenham-township", url: "/cheltenham-township-golf-carts" },
  { name: "Douglass", type: "Township", slug: "douglass-township", url: "/douglass-township-golf-carts" },
  { name: "East Norriton", type: "Township", slug: "east-norriton-township", url: "/east-norriton-township-golf-carts" },
  { name: "Franconia", type: "Township", slug: "franconia-township", url: "/franconia-township-golf-carts" },
  { name: "Hatfield", type: "Township", slug: "hatfield-township", url: "/hatfield-township-golf-carts" },
  { name: "Horsham", type: "Township", slug: "horsham-township", url: "/horsham-township-golf-carts" },
  { name: "Limerick", type: "Township", slug: "limerick-township", url: "/limerick-township-golf-carts" },
  { name: "Lower Frederick", type: "Township", slug: "lower-frederick-township", url: "/lower-frederick-township-golf-carts" },
  { name: "Lower Gwynedd", type: "Township", slug: "lower-gwynedd-township", url: "/lower-gwynedd-township-golf-carts" },
  { name: "Lower Merion", type: "Township", slug: "lower-merion-township", url: "/lower-merion-township-golf-carts" },
  { name: "Lower Moreland", type: "Township", slug: "lower-moreland-township", url: "/lower-moreland-township-golf-carts" },
  { name: "Lower Pottsgrove", type: "Township", slug: "lower-pottsgrove-township", url: "/lower-pottsgrove-township-golf-carts" },
  { name: "Lower Providence", type: "Township", slug: "lower-providence-township", url: "/lower-providence-township-golf-carts" },
  { name: "Lower Salford", type: "Township", slug: "lower-salford-township", url: "/lower-salford-township-golf-carts" },
  { name: "Marlborough", type: "Township", slug: "marlborough-township", url: "/marlborough-township-golf-carts" },
  { name: "Montgomery", type: "Township", slug: "montgomery-township", url: "/montgomery-township-golf-carts" },
  { name: "New Hanover", type: "Township", slug: "new-hanover-township", url: "/new-hanover-township-golf-carts" },
  { name: "Perkiomen", type: "Township", slug: "perkiomen-township", url: "/perkiomen-township-golf-carts" },
  { name: "Plymouth", type: "Township", slug: "plymouth-township", url: "/plymouth-township-golf-carts" },
  { name: "Salford", type: "Township", slug: "salford-township", url: "/salford-township-golf-carts" },
  { name: "Skippack", type: "Township", slug: "skippack-township", url: "/skippack-township-golf-carts" },
  { name: "Springfield", type: "Township", slug: "springfield-township", url: "/springfield-township-golf-carts" },
  { name: "Towamencin", type: "Township", slug: "towamencin-township", url: "/towamencin-township-golf-carts" },
  { name: "Upper Dublin", type: "Township", slug: "upper-dublin-township", url: "/upper-dublin-township-golf-carts" },
  { name: "Upper Frederick", type: "Township", slug: "upper-frederick-township", url: "/upper-frederick-township-golf-carts" },
  { name: "Upper Gwynedd", type: "Township", slug: "upper-gwynedd-township", url: "/upper-gwynedd-township-golf-carts" },
  { name: "Upper Hanover", type: "Township", slug: "upper-hanover-township", url: "/upper-hanover-township-golf-carts" },
  { name: "Upper Merion", type: "Township", slug: "upper-merion-township", url: "/upper-merion-township-golf-carts" },
  { name: "Upper Moreland", type: "Township", slug: "upper-moreland-township", url: "/upper-moreland-township-golf-carts" },
  { name: "Upper Pottsgrove", type: "Township", slug: "upper-pottsgrove-township", url: "/upper-pottsgrove-township-golf-carts" },
  { name: "Upper Providence", type: "Township", slug: "upper-providence-township", url: "/upper-providence-township-golf-carts" },
  { name: "Upper Salford", type: "Township", slug: "upper-salford-township", url: "/upper-salford-township-golf-carts" },
  { name: "West Norriton", type: "Township", slug: "west-norriton-township", url: "/west-norriton-township-golf-carts" },
  { name: "West Pottsgrove", type: "Township", slug: "west-pottsgrove-township", url: "/west-pottsgrove-township-golf-carts" },
  { name: "Whitemarsh", type: "Township", slug: "whitemarsh-township", url: "/whitemarsh-township-golf-carts" },
  { name: "Whitpain", type: "Township", slug: "whitpain-township", url: "/whitpain-township-golf-carts" },
  { name: "Worcester", type: "Township", slug: "worcester-township", url: "/worcester-township-golf-carts" }
];

// Helper functions
export const getMunicipalityBySlug = (slug: string): Municipality | undefined => {
  return MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.slug === slug);
};

export const getAllBoroughs = (): Municipality[] => {
  return MONTGOMERY_COUNTY_MUNICIPALITIES.filter(m => m.type === 'Borough');
};

export const getAllTownships = (): Municipality[] => {
  return MONTGOMERY_COUNTY_MUNICIPALITIES.filter(m => m.type === 'Township');
};

export const getTotalCount = () => ({
  boroughs: getAllBoroughs().length,
  townships: getAllTownships().length,
  total: MONTGOMERY_COUNTY_MUNICIPALITIES.length
});