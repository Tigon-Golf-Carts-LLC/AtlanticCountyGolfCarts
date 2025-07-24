import MontgomeryCountyMunicipalityPage from "@/components/MontgomeryCountyMunicipalityPage";
import { MONTGOMERY_COUNTY_MUNICIPALITIES } from "@/data/montgomeryCountyMunicipalities";

// Borough Pages (24)
export const AmblerBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Ambler" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const BridgeportBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Bridgeport" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const BrynAthynBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Bryn Athyn" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const CollegevilleBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Collegeville" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const ConshohockenBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Conshohocken" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const EastGreenvilleBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "East Greenville" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const GreenLaneBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Green Lane" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const HatboroBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Hatboro" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const HatfieldBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Hatfield" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const JenkintownBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Jenkintown" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LansdaleBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lansdale" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const NarberthBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Narberth" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const NorristownBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Norristown" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const NorthWalesBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "North Wales" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const PennsburgBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Pennsburg" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const PottstownBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Pottstown" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const RedHillBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Red Hill" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const RockledgeBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Rockledge" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const RoyersfordBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Royersford" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const SchwenksvilleBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Schwenksville" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const SoudertonBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Souderton" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const TelfordBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Telford" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const TrappeBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Trappe" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WestConshohockenBoroughPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "West Conshohocken" && m.type === "Borough")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

// Township Pages (38)
export const AbingtonTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Abington" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const CheltenhamTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Cheltenham" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const DouglassTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Douglass" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const EastNorritonTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "East Norriton" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const FranconiaTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Franconia" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const HatfieldTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Hatfield" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const HorshamTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Horsham" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LimerickTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Limerick" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerFrederickTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Frederick" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerGwyneddTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Gwynedd" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerMerionTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Merion" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerMorelandTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Moreland" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerPottsgroveTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Pottsgrove" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerProvidenceTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Providence" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const LowerSalfordTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Salford" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const MarlboroughTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Marlborough" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const MontgomeryTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Montgomery" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const NewHanoverTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "New Hanover" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const PerkiomenTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Perkiomen" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const PlymouthTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Plymouth" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const SalfordTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Salford" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const SkippackTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Skippack" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const SpringfieldTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Springfield" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const TowamencinTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Towamencin" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperDublinTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Dublin" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperFrederickTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Frederick" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperGwyneddTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Gwynedd" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperHanoverTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Hanover" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperMerionTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Merion" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperMorelandTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Moreland" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperPottsgroveTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Pottsgrove" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperProvidenceTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Providence" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const UpperSalfordTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Salford" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WestNorritonTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "West Norriton" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WestPottsgroveTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "West Pottsgrove" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WhitemarshTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Whitemarsh" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WhitpainTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Whitpain" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};

export const WorcesterTownshipPage = () => {
  const municipality = MONTGOMERY_COUNTY_MUNICIPALITIES.find(m => m.name === "Worcester" && m.type === "Township")!;
  return <MontgomeryCountyMunicipalityPage municipality={municipality} />;
};