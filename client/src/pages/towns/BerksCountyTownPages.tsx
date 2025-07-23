import BerksCountyTownPage from "@/components/BerksCountyTownPage";

// Template function to create Berks County town-specific pages
export const createBerksCountyTownPage = (townName: string, townType: string) => {
  return function TownSpecificPage() {
    return <BerksCountyTownPage townName={townName} townType={townType} />;
  };
};

// Borough Pages - Berks County
export const ReadingPage = createBerksCountyTownPage("Reading", "City");
export const BoyertownPage = createBerksCountyTownPage("Boyertown", "Borough");
export const FleetwoodPage = createBerksCountyTownPage("Fleetwood", "Borough");
export const HamburgPage = createBerksCountyTownPage("Hamburg", "Borough");
export const KenhorstPage = createBerksCountyTownPage("Kenhorst", "Borough");
export const KutzownPage = createBerksCountyTownPage("Kutztown", "Borough");
export const LaureldalePage = createBerksCountyTownPage("Laureldale", "Borough");
export const LehightonPage = createBerksCountyTownPage("Leesport", "Borough");
export const LyonsPage = createBerksCountyTownPage("Lyons", "Borough");
export const MohntonPage = createBerksCountyTownPage("Mohnton", "Borough");
export const MountPennPage = createBerksCountyTownPage("Mount Penn", "Borough");
export const NewMorganPage = createBerksCountyTownPage("New Morgan", "Borough");
export const RobersoniaPage = createBerksCountyTownPage("Robesonia", "Borough");
export const ShillingtonPage = createBerksCountyTownPage("Shillington", "Borough");
export const SinkingSpringPage = createBerksCountyTownPage("Sinking Spring", "Borough");
export const St_LawrencePage = createBerksCountyTownPage("St. Lawrence", "Borough");
export const WernervillePage = createBerksCountyTownPage("Wernersville", "Borough");
export const WomelsdrfPage = createBerksCountyTownPage("Womelsdorf", "Borough");
export const WyomissingPage = createBerksCountyTownPage("Wyomissing", "Borough");

// Township Pages - Berks County
export const AlsaceTownshipPage = createBerksCountyTownPage("Alsace", "Township");
export const BernTownshipPage = createBerksCountyTownPage("Bern", "Township");
export const BethhelTownshipPage = createBerksCountyTownPage("Bethel", "Township");
export const BrecknockTownshipPage = createBerksCountyTownPage("Brecknock", "Township");
export const CaernarvonTownshipPage = createBerksCountyTownPage("Caernarvon", "Township");
export const CentreTownshipPage = createBerksCountyTownPage("Centre", "Township");
export const ColebrookdaleTownshipPage = createBerksCountyTownPage("Colebrookdale", "Township");
export const CumruTownshipPage = createBerksCountyTownPage("Cumru", "Township");
export const DouglassTownshipPage = createBerksCountyTownPage("Douglass", "Township");
export const ExeterTownshipPage = createBerksCountyTownPage("Exeter", "Township");
export const HeidelburgTownshipPage = createBerksCountyTownPage("Heidelburg", "Township");
export const HerefordTownshipPage = createBerksCountyTownPage("Hereford", "Township");
export const JeffersonTownshipPage = createBerksCountyTownPage("Jefferson", "Township");
export const KenhorstTownshipPage = createBerksCountyTownPage("Kenhorst", "Township");
export const LongswampTownshipPage = createBerksCountyTownPage("Longswamp", "Township");
export const LowerAlsaceTownshipPage = createBerksCountyTownPage("Lower Alsace", "Township");
export const LowerHeidelburgTownshipPage = createBerksCountyTownPage("Lower Heidelburg", "Township");
export const MaxatawnyTownshipPage = createBerksCountyTownPage("Maxatawny", "Township");
export const MuhlenbergTownshipPage = createBerksCountyTownPage("Muhlenberg", "Township");
export const OntelauneeTownshipPage = createBerksCountyTownPage("Ontelaunee", "Township");
export const PerryTownshipPage = createBerksCountyTownPage("Perry", "Township");
export const PikeTownshipPage = createBerksCountyTownPage("Pike", "Township");
export const RichlandTownshipPage = createBerksCountyTownPage("Richland", "Township");
export const RobertsonTownshipPage = createBerksCountyTownPage("Robeson", "Township");
export const RuscombmanorTownshipPage = createBerksCountyTownPage("Ruscombmanor", "Township");
export const SpringTownshipPage = createBerksCountyTownPage("Spring", "Township");
export const TildenTownshipPage = createBerksCountyTownPage("Tilden", "Township");
export const TulpehockenTownshipPage = createBerksCountyTownPage("Tulpehocken", "Township");
export const UnionTownshipPage = createBerksCountyTownPage("Union", "Township");
export const UpperBernTownshipPage = createBerksCountyTownPage("Upper Bern", "Township");
export const UpperTulpehockenTownshipPage = createBerksCountyTownPage("Upper Tulpehocken", "Township");
export const WashingtonTownshipPage = createBerksCountyTownPage("Washington", "Township");
export const WindsorTownshipPage = createBerksCountyTownPage("Windsor", "Township");