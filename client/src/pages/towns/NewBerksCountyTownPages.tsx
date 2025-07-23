import BerksCountyMunicipalityPage from "@/components/BerksCountyMunicipalityPage";
import { BERKS_COUNTY_MUNICIPALITIES } from "@/data/berksCountyMunicipalities";

// Generate individual components for each municipality
// Cities (1)
export const ReadingCityPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Reading" && m.type === "City")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

// Boroughs (27)
export const BallyBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Bally" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BechtelvilleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Bechtelsville" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BernvilleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Bernville" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BirdsboroBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Birdsboro" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BoyertownBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Boyertown" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const CenterportBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Centerport" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const FleetwoodBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Fleetwood" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const HamburgBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Hamburg" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const KenhorstBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Kenhorst" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const KutzownBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Kutztown" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LaureldaleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Laureldale" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LeesportBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Leesport" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LenhartsvilleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Lenhartsville" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LyonsBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Lyons" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MohntonBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Mohnton" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MountPennBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Mount Penn" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const NewMorganBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "New Morgan" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const RobosoniaBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Robesonia" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const StLawrenceBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "St. Lawrence" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const ShillingtonBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Shillington" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const ShoemakersvilleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Shoemakersville" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const SinkingSpringBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Sinking Spring" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const ToptonBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Topton" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WernersvilleBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Wernersville" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WestReadingBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "West Reading" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WomelsdorfBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Womelsdorf" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WyomissingBoroughPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Wyomissing" && m.type === "Borough")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

// Townships (44)
export const AlbanyTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Albany" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const AlsaceTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Alsace" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const AmityTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Amity" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BernTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Bern" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BethelTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Bethel" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const BrecknockTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Brecknock" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const CaernarvonTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Caernarvon" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const CentreTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Centre" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const ColebrookdaleTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Colebrookdale" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const CumruTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Cumru" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const DistrictTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "District" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const DouglassTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Douglass" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const EarlTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Earl" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const ExeterTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Exeter" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const GreenwichTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Greenwich" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const HeidelbergTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Heidelberg" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const HerefordTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Hereford" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const JeffersonTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Jefferson" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LongswampTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Longswamp" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LowerAlsaceTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Alsace" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const LowerHeidelbergTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Lower Heidelberg" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MaidencreekTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Maidencreek" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MarionTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Marion" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MaxatawnyTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Maxatawny" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const MuhlenbergTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Muhlenberg" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const NorthHeidelbergTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "North Heidelberg" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const OleyTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Oley" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const OntelauneeTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Ontelaunee" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const PennTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Penn" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const PerryTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Perry" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const PikeTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Pike" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const RichmondTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Richmond" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const RobesonTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Robeson" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const RocklandTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Rockland" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const RuscombmanorTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Ruscombmanor" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const SouthHeidelbergTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "South Heidelberg" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const SpringTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Spring" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const TildenTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Tilden" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const TulpehockenTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Tulpehocken" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const UnionTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Union" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const UpperBernTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Bern" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const UpperTulpehockenTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Upper Tulpehocken" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WashingtonTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Washington" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};

export const WindsorTownshipPage = () => {
  const municipality = BERKS_COUNTY_MUNICIPALITIES.find(m => m.name === "Windsor" && m.type === "Township")!;
  return <BerksCountyMunicipalityPage municipality={municipality} />;
};