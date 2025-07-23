import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";
// Municipality Rental Pages
import {
  // Cities
  ReadingCityRentalPage,
  // Boroughs
  BallyBoroughRentalPage, BechtelvilleBoroughRentalPage, BernvilleBoroughRentalPage, BirdsboroBoroughRentalPage,
  BoyertownBoroughRentalPage, CenterportBoroughRentalPage, FleetwoodBoroughRentalPage, HamburgBoroughRentalPage,
  KenhorstBoroughRentalPage, KutzownBoroughRentalPage, LaureldaleBoroughRentalPage, LeesportBoroughRentalPage,
  LenhartsvilleBoroughRentalPage, LyonsBoroughRentalPage, MohntonBoroughRentalPage, MountPennBoroughRentalPage,
  NewMorganBoroughRentalPage, RobosoniaBoroughRentalPage, StLawrenceBoroughRentalPage, ShillingtonBoroughRentalPage,
  ShoemakersvilleBoroughRentalPage, SinkingSpringBoroughRentalPage, ToptonBoroughRentalPage, WernersvilleBoroughRentalPage,
  WestReadingBoroughRentalPage, WomelsdorfBoroughRentalPage, WyomissingBoroughRentalPage,
  // Townships
  AlbanyTownshipRentalPage, AlsaceTownshipRentalPage, AmityTownshipRentalPage, BernTownshipRentalPage,
  BethelTownshipRentalPage, BrecknockTownshipRentalPage, CaernarvonTownshipRentalPage, CentreTownshipRentalPage,
  ColebrookdaleTownshipRentalPage, CumruTownshipRentalPage, DistrictTownshipRentalPage, DouglassTownshipRentalPage,
  EarlTownshipRentalPage, ExeterTownshipRentalPage, GreenwichTownshipRentalPage, HeidelbergTownshipRentalPage,
  HerefordTownshipRentalPage, JeffersonTownshipRentalPage, LongswampTownshipRentalPage, LowerAlsaceTownshipRentalPage,
  LowerHeidelbergTownshipRentalPage, MaidencreekTownshipRentalPage, MarionTownshipRentalPage, MaxatawnyTownshipRentalPage,
  MuhlenbergTownshipRentalPage, NorthHeidelbergTownshipRentalPage, OleyTownshipRentalPage, OntelauneeTownshipRentalPage,
  PennTownshipRentalPage, PerryTownshipRentalPage, PikeTownshipRentalPage, RichmondTownshipRentalPage,
  RobesonTownshipRentalPage, RocklandTownshipRentalPage, RuscombmanorTownshipRentalPage, SouthHeidelbergTownshipRentalPage,
  SpringTownshipRentalPage, TildenTownshipRentalPage, TulpehockenTownshipRentalPage, UnionTownshipRentalPage,
  UpperBernTownshipRentalPage, UpperTulpehockenTownshipRentalPage, WashingtonTownshipRentalPage, WindsorTownshipRentalPage
} from "@/pages/rentals/BerksCountyMunicipalityRentals";
// Vehicle Page Imports
import EvolutionD5Ranger6Plus from "@/pages/vehicles/EvolutionD5Ranger6Plus";
import EvolutionD5Ranger22Plus from "@/pages/vehicles/EvolutionD5Ranger22Plus";
import EvolutionForester4Plus from "@/pages/vehicles/EvolutionForester4Plus";
import EvolutionTurfman1000 from "@/pages/vehicles/EvolutionTurfman1000";
import DenagoEvCity from "@/pages/vehicles/DenagoEvCity";
import EvolutionD6MaxGT4 from "@/pages/vehicles/EvolutionD6MaxGT4";
import DenagoEvNomad from "@/pages/vehicles/DenagoEvNomad";
import EvolutionClassic4Plus from "@/pages/vehicles/EvolutionClassic4Plus";
import DenagoEVRoverXL from "@/pages/vehicles/DenagoEVRoverXL";
import DenagoEvNomadXL from "@/pages/vehicles/DenagoEvNomadXL";
import DenagoEvRoverXL6 from "@/pages/vehicles/DenagoEvRoverXL6";
import DenagoEvRoverXXL from "@/pages/vehicles/DenagoEvRoverXXL";
import EvolutionCarrier6Plus from "@/pages/vehicles/EvolutionCarrier6Plus";
import EvolutionCarrier8Plus from "@/pages/vehicles/EvolutionCarrier8Plus";
import EvolutionClassic2Plus from "@/pages/vehicles/EvolutionClassic2Plus";
import EvolutionClassic2Pro from "@/pages/vehicles/EvolutionClassic2Pro";
import EvolutionD5Maverick4 from "@/pages/vehicles/EvolutionD5Maverick4";
import EvolutionD5Maverick6 from "@/pages/vehicles/EvolutionD5Maverick6";
import EvolutionD5Maverick4Plus from "@/pages/vehicles/EvolutionD5Maverick4Plus";
import EvolutionD5Maverick6Plus from "@/pages/vehicles/EvolutionD5Maverick6Plus";
import EvolutionD6MaxGT6 from "@/pages/vehicles/EvolutionD6MaxGT6";
import EvolutionD6MaxXT4 from "@/pages/vehicles/EvolutionD6MaxXT4";
import EvolutionD6MaxXT6 from "@/pages/vehicles/EvolutionD6MaxXT6";
// New Berks County Municipality Pages - All 72 municipalities
import {
  // Cities (1)
  ReadingCityPage,
  // Boroughs (27)
  BallyBoroughPage, BechtelvilleBoroughPage, BernvilleBoroughPage, BirdsboroBoroughPage,
  BoyertownBoroughPage, CenterportBoroughPage, FleetwoodBoroughPage, HamburgBoroughPage,
  KenhorstBoroughPage, KutzownBoroughPage, LaureldaleBoroughPage, LeesportBoroughPage,
  LenhartsvilleBoroughPage, LyonsBoroughPage, MohntonBoroughPage, MountPennBoroughPage,
  NewMorganBoroughPage, RobosoniaBoroughPage, StLawrenceBoroughPage, ShillingtonBoroughPage,
  ShoemakersvilleBoroughPage, SinkingSpringBoroughPage, ToptonBoroughPage, WernersvilleBoroughPage,
  WestReadingBoroughPage, WomelsdorfBoroughPage, WyomissingBoroughPage,
  // Townships (44)
  AlbanyTownshipPage, AlsaceTownshipPage, AmityTownshipPage, BernTownshipPage,
  BethelTownshipPage, BrecknockTownshipPage, CaernarvonTownshipPage, CentreTownshipPage,
  ColebrookdaleTownshipPage, CumruTownshipPage, DistrictTownshipPage, DouglassTownshipPage,
  EarlTownshipPage, ExeterTownshipPage, GreenwichTownshipPage, HeidelbergTownshipPage,
  HerefordTownshipPage, JeffersonTownshipPage, LongswampTownshipPage, LowerAlsaceTownshipPage,
  LowerHeidelbergTownshipPage, MaidencreekTownshipPage, MarionTownshipPage, MaxatawnyTownshipPage,
  MuhlenbergTownshipPage, NorthHeidelbergTownshipPage, OleyTownshipPage, OntelauneeTownshipPage,
  PennTownshipPage, PerryTownshipPage, PikeTownshipPage, RichmondTownshipPage,
  RobesonTownshipPage, RocklandTownshipPage, RuscombmanorTownshipPage, SouthHeidelbergTownshipPage,
  SpringTownshipPage, TildenTownshipPage, TulpehockenTownshipPage, UnionTownshipPage,
  UpperBernTownshipPage, UpperTulpehockenTownshipPage, WashingtonTownshipPage, WindsorTownshipPage
} from "@/pages/towns/NewBerksCountyTownPages";

const queryClient = new QueryClient();

function App() {
  // Global scroll-to-top on route changes
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />
            
            {/* Vehicle Detail Pages */}
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6Plus} />
            <Route path="/vehicles/evolution-d5-ranger-22-plus" component={EvolutionD5Ranger22Plus} />
            <Route path="/vehicles/evolution-forester-4-plus" component={EvolutionForester4Plus} />
            <Route path="/vehicles/evolution-turfman-1000" component={EvolutionTurfman1000} />
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCity} />
            <Route path="/vehicles/evolution-d6-max-gt4" component={EvolutionD6MaxGT4} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomad} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4Plus} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEVRoverXL} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXL} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXL6} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXXL} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6Plus} />
            <Route path="/vehicles/evolution-carrier-8-plus" component={EvolutionCarrier8Plus} />
            <Route path="/vehicles/evolution-classic-2-plus" component={EvolutionClassic2Plus} />
            <Route path="/vehicles/evolution-classic-2-pro" component={EvolutionClassic2Pro} />
            <Route path="/vehicles/evolution-d5-maverick-4" component={EvolutionD5Maverick4} />
            <Route path="/vehicles/evolution-d5-maverick-6" component={EvolutionD5Maverick6} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4Plus} />
            <Route path="/vehicles/evolution-d5-maverick-6-plus" component={EvolutionD5Maverick6Plus} />
            <Route path="/vehicles/evolution-d6-max-gt6" component={EvolutionD6MaxGT6} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXT4} />
            <Route path="/vehicles/evolution-d6-max-xt6" component={EvolutionD6MaxXT6} />
            
            {/* Berks County Cities (1) */}
            <Route path="/reading-city-golf-carts" component={ReadingCityPage} />
            
            {/* Berks County Boroughs (27) */}
            <Route path="/bally-borough-golf-carts" component={BallyBoroughPage} />
            <Route path="/bechtelsville-borough-golf-carts" component={BechtelvilleBoroughPage} />
            <Route path="/bernville-borough-golf-carts" component={BernvilleBoroughPage} />
            <Route path="/birdsboro-borough-golf-carts" component={BirdsboroBoroughPage} />
            <Route path="/boyertown-borough-golf-carts" component={BoyertownBoroughPage} />
            <Route path="/centerport-borough-golf-carts" component={CenterportBoroughPage} />
            <Route path="/fleetwood-borough-golf-carts" component={FleetwoodBoroughPage} />
            <Route path="/hamburg-borough-golf-carts" component={HamburgBoroughPage} />
            <Route path="/kenhorst-borough-golf-carts" component={KenhorstBoroughPage} />
            <Route path="/kutztown-borough-golf-carts" component={KutzownBoroughPage} />
            <Route path="/laureldale-borough-golf-carts" component={LaureldaleBoroughPage} />
            <Route path="/leesport-borough-golf-carts" component={LeesportBoroughPage} />
            <Route path="/lenhartsville-borough-golf-carts" component={LenhartsvilleBoroughPage} />
            <Route path="/lyons-borough-golf-carts" component={LyonsBoroughPage} />
            <Route path="/mohnton-borough-golf-carts" component={MohntonBoroughPage} />
            <Route path="/mount-penn-borough-golf-carts" component={MountPennBoroughPage} />
            <Route path="/new-morgan-borough-golf-carts" component={NewMorganBoroughPage} />
            <Route path="/robesonia-borough-golf-carts" component={RobosoniaBoroughPage} />
            <Route path="/st-lawrence-borough-golf-carts" component={StLawrenceBoroughPage} />
            <Route path="/shillington-borough-golf-carts" component={ShillingtonBoroughPage} />
            <Route path="/shoemakersville-borough-golf-carts" component={ShoemakersvilleBoroughPage} />
            <Route path="/sinking-spring-borough-golf-carts" component={SinkingSpringBoroughPage} />
            <Route path="/topton-borough-golf-carts" component={ToptonBoroughPage} />
            <Route path="/wernersville-borough-golf-carts" component={WernersvilleBoroughPage} />
            <Route path="/west-reading-borough-golf-carts" component={WestReadingBoroughPage} />
            <Route path="/womelsdorf-borough-golf-carts" component={WomelsdorfBoroughPage} />
            <Route path="/wyomissing-borough-golf-carts" component={WyomissingBoroughPage} />
            
            {/* Berks County Townships (44) */}
            <Route path="/albany-township-golf-carts" component={AlbanyTownshipPage} />
            <Route path="/alsace-township-golf-carts" component={AlsaceTownshipPage} />
            <Route path="/amity-township-golf-carts" component={AmityTownshipPage} />
            <Route path="/bern-township-golf-carts" component={BernTownshipPage} />
            <Route path="/bethel-township-golf-carts" component={BethelTownshipPage} />
            <Route path="/brecknock-township-golf-carts" component={BrecknockTownshipPage} />
            <Route path="/caernarvon-township-golf-carts" component={CaernarvonTownshipPage} />
            <Route path="/centre-township-golf-carts" component={CentreTownshipPage} />
            <Route path="/colebrookdale-township-golf-carts" component={ColebrookdaleTownshipPage} />
            <Route path="/cumru-township-golf-carts" component={CumruTownshipPage} />
            <Route path="/district-township-golf-carts" component={DistrictTownshipPage} />
            <Route path="/douglass-township-golf-carts" component={DouglassTownshipPage} />
            <Route path="/earl-township-golf-carts" component={EarlTownshipPage} />
            <Route path="/exeter-township-golf-carts" component={ExeterTownshipPage} />
            <Route path="/greenwich-township-golf-carts" component={GreenwichTownshipPage} />
            <Route path="/heidelberg-township-golf-carts" component={HeidelbergTownshipPage} />
            <Route path="/hereford-township-golf-carts" component={HerefordTownshipPage} />
            <Route path="/jefferson-township-golf-carts" component={JeffersonTownshipPage} />
            <Route path="/longswamp-township-golf-carts" component={LongswampTownshipPage} />
            <Route path="/lower-alsace-township-golf-carts" component={LowerAlsaceTownshipPage} />
            <Route path="/lower-heidelberg-township-golf-carts" component={LowerHeidelbergTownshipPage} />
            <Route path="/maidencreek-township-golf-carts" component={MaidencreekTownshipPage} />
            <Route path="/marion-township-golf-carts" component={MarionTownshipPage} />
            <Route path="/maxatawny-township-golf-carts" component={MaxatawnyTownshipPage} />
            <Route path="/muhlenberg-township-golf-carts" component={MuhlenbergTownshipPage} />
            <Route path="/north-heidelberg-township-golf-carts" component={NorthHeidelbergTownshipPage} />
            <Route path="/oley-township-golf-carts" component={OleyTownshipPage} />
            <Route path="/ontelaunee-township-golf-carts" component={OntelauneeTownshipPage} />
            <Route path="/penn-township-golf-carts" component={PennTownshipPage} />
            <Route path="/perry-township-golf-carts" component={PerryTownshipPage} />
            <Route path="/pike-township-golf-carts" component={PikeTownshipPage} />
            <Route path="/richmond-township-golf-carts" component={RichmondTownshipPage} />
            <Route path="/robeson-township-golf-carts" component={RobesonTownshipPage} />
            <Route path="/rockland-township-golf-carts" component={RocklandTownshipPage} />
            <Route path="/ruscombmanor-township-golf-carts" component={RuscombmanorTownshipPage} />
            <Route path="/south-heidelberg-township-golf-carts" component={SouthHeidelbergTownshipPage} />
            <Route path="/spring-township-golf-carts" component={SpringTownshipPage} />
            <Route path="/tilden-township-golf-carts" component={TildenTownshipPage} />
            <Route path="/tulpehocken-township-golf-carts" component={TulpehockenTownshipPage} />
            <Route path="/union-township-golf-carts" component={UnionTownshipPage} />
            <Route path="/upper-bern-township-golf-carts" component={UpperBernTownshipPage} />
            <Route path="/upper-tulpehocken-township-golf-carts" component={UpperTulpehockenTownshipPage} />
            <Route path="/washington-township-golf-carts" component={WashingtonTownshipPage} />
            <Route path="/windsor-township-golf-carts" component={WindsorTownshipPage} />
            
            {/* Municipality Rental Pages - Berks County Cities (1) */}
            <Route path="/reading-city-golf-carts/rentals" component={ReadingCityRentalPage} />
            
            {/* Municipality Rental Pages - Berks County Boroughs (27) */}
            <Route path="/bally-borough-golf-carts/rentals" component={BallyBoroughRentalPage} />
            <Route path="/bechtelsville-borough-golf-carts/rentals" component={BechtelvilleBoroughRentalPage} />
            <Route path="/bernville-borough-golf-carts/rentals" component={BernvilleBoroughRentalPage} />
            <Route path="/birdsboro-borough-golf-carts/rentals" component={BirdsboroBoroughRentalPage} />
            <Route path="/boyertown-borough-golf-carts/rentals" component={BoyertownBoroughRentalPage} />
            <Route path="/centerport-borough-golf-carts/rentals" component={CenterportBoroughRentalPage} />
            <Route path="/fleetwood-borough-golf-carts/rentals" component={FleetwoodBoroughRentalPage} />
            <Route path="/hamburg-borough-golf-carts/rentals" component={HamburgBoroughRentalPage} />
            <Route path="/kenhorst-borough-golf-carts/rentals" component={KenhorstBoroughRentalPage} />
            <Route path="/kutztown-borough-golf-carts/rentals" component={KutzownBoroughRentalPage} />
            <Route path="/laureldale-borough-golf-carts/rentals" component={LaureldaleBoroughRentalPage} />
            <Route path="/leesport-borough-golf-carts/rentals" component={LeesportBoroughRentalPage} />
            <Route path="/lenhartsville-borough-golf-carts/rentals" component={LenhartsvilleBoroughRentalPage} />
            <Route path="/lyons-borough-golf-carts/rentals" component={LyonsBoroughRentalPage} />
            <Route path="/mohnton-borough-golf-carts/rentals" component={MohntonBoroughRentalPage} />
            <Route path="/mount-penn-borough-golf-carts/rentals" component={MountPennBoroughRentalPage} />
            <Route path="/new-morgan-borough-golf-carts/rentals" component={NewMorganBoroughRentalPage} />
            <Route path="/robesonia-borough-golf-carts/rentals" component={RobosoniaBoroughRentalPage} />
            <Route path="/st-lawrence-borough-golf-carts/rentals" component={StLawrenceBoroughRentalPage} />
            <Route path="/shillington-borough-golf-carts/rentals" component={ShillingtonBoroughRentalPage} />
            <Route path="/shoemakersville-borough-golf-carts/rentals" component={ShoemakersvilleBoroughRentalPage} />
            <Route path="/sinking-spring-borough-golf-carts/rentals" component={SinkingSpringBoroughRentalPage} />
            <Route path="/topton-borough-golf-carts/rentals" component={ToptonBoroughRentalPage} />
            <Route path="/wernersville-borough-golf-carts/rentals" component={WernersvilleBoroughRentalPage} />
            <Route path="/west-reading-borough-golf-carts/rentals" component={WestReadingBoroughRentalPage} />
            <Route path="/womelsdorf-borough-golf-carts/rentals" component={WomelsdorfBoroughRentalPage} />
            <Route path="/wyomissing-borough-golf-carts/rentals" component={WyomissingBoroughRentalPage} />
            
            {/* Municipality Rental Pages - Berks County Townships (44) */}
            <Route path="/albany-township-golf-carts/rentals" component={AlbanyTownshipRentalPage} />
            <Route path="/alsace-township-golf-carts/rentals" component={AlsaceTownshipRentalPage} />
            <Route path="/amity-township-golf-carts/rentals" component={AmityTownshipRentalPage} />
            <Route path="/bern-township-golf-carts/rentals" component={BernTownshipRentalPage} />
            <Route path="/bethel-township-golf-carts/rentals" component={BethelTownshipRentalPage} />
            <Route path="/brecknock-township-golf-carts/rentals" component={BrecknockTownshipRentalPage} />
            <Route path="/caernarvon-township-golf-carts/rentals" component={CaernarvonTownshipRentalPage} />
            <Route path="/centre-township-golf-carts/rentals" component={CentreTownshipRentalPage} />
            <Route path="/colebrookdale-township-golf-carts/rentals" component={ColebrookdaleTownshipRentalPage} />
            <Route path="/cumru-township-golf-carts/rentals" component={CumruTownshipRentalPage} />
            <Route path="/district-township-golf-carts/rentals" component={DistrictTownshipRentalPage} />
            <Route path="/douglass-township-golf-carts/rentals" component={DouglassTownshipRentalPage} />
            <Route path="/earl-township-golf-carts/rentals" component={EarlTownshipRentalPage} />
            <Route path="/exeter-township-golf-carts/rentals" component={ExeterTownshipRentalPage} />
            <Route path="/greenwich-township-golf-carts/rentals" component={GreenwichTownshipRentalPage} />
            <Route path="/heidelberg-township-golf-carts/rentals" component={HeidelbergTownshipRentalPage} />
            <Route path="/hereford-township-golf-carts/rentals" component={HerefordTownshipRentalPage} />
            <Route path="/jefferson-township-golf-carts/rentals" component={JeffersonTownshipRentalPage} />
            <Route path="/longswamp-township-golf-carts/rentals" component={LongswampTownshipRentalPage} />
            <Route path="/lower-alsace-township-golf-carts/rentals" component={LowerAlsaceTownshipRentalPage} />
            <Route path="/lower-heidelberg-township-golf-carts/rentals" component={LowerHeidelbergTownshipRentalPage} />
            <Route path="/maidencreek-township-golf-carts/rentals" component={MaidencreekTownshipRentalPage} />
            <Route path="/marion-township-golf-carts/rentals" component={MarionTownshipRentalPage} />
            <Route path="/maxatawny-township-golf-carts/rentals" component={MaxatawnyTownshipRentalPage} />
            <Route path="/muhlenberg-township-golf-carts/rentals" component={MuhlenbergTownshipRentalPage} />
            <Route path="/north-heidelberg-township-golf-carts/rentals" component={NorthHeidelbergTownshipRentalPage} />
            <Route path="/oley-township-golf-carts/rentals" component={OleyTownshipRentalPage} />
            <Route path="/ontelaunee-township-golf-carts/rentals" component={OntelauneeTownshipRentalPage} />
            <Route path="/penn-township-golf-carts/rentals" component={PennTownshipRentalPage} />
            <Route path="/perry-township-golf-carts/rentals" component={PerryTownshipRentalPage} />
            <Route path="/pike-township-golf-carts/rentals" component={PikeTownshipRentalPage} />
            <Route path="/richmond-township-golf-carts/rentals" component={RichmondTownshipRentalPage} />
            <Route path="/robeson-township-golf-carts/rentals" component={RobesonTownshipRentalPage} />
            <Route path="/rockland-township-golf-carts/rentals" component={RocklandTownshipRentalPage} />
            <Route path="/ruscombmanor-township-golf-carts/rentals" component={RuscombmanorTownshipRentalPage} />
            <Route path="/south-heidelberg-township-golf-carts/rentals" component={SouthHeidelbergTownshipRentalPage} />
            <Route path="/spring-township-golf-carts/rentals" component={SpringTownshipRentalPage} />
            <Route path="/tilden-township-golf-carts/rentals" component={TildenTownshipRentalPage} />
            <Route path="/tulpehocken-township-golf-carts/rentals" component={TulpehockenTownshipRentalPage} />
            <Route path="/union-township-golf-carts/rentals" component={UnionTownshipRentalPage} />
            <Route path="/upper-bern-township-golf-carts/rentals" component={UpperBernTownshipRentalPage} />
            <Route path="/upper-tulpehocken-township-golf-carts/rentals" component={UpperTulpehockenTownshipRentalPage} />
            <Route path="/washington-township-golf-carts/rentals" component={WashingtonTownshipRentalPage} />
            <Route path="/windsor-township-golf-carts/rentals" component={WindsorTownshipRentalPage} />
            
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
