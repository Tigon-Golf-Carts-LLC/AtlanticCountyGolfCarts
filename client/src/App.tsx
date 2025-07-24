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
  // Boroughs
  AmblerBoroughRentalPage, BridgeportBoroughRentalPage, BrynAthynBoroughRentalPage, CollegevilleBoroughRentalPage,
  ConshohockenBoroughRentalPage, EastGreenvilleBoroughRentalPage, GreenLaneBoroughRentalPage, HatboroBoroughRentalPage,
  HatfieldBoroughRentalPage, JenkintownBoroughRentalPage, LansdaleBoroughRentalPage, NarberthBoroughRentalPage,
  NorristownBoroughRentalPage, NorthWalesBoroughRentalPage, PennsburgBoroughRentalPage, PottstownBoroughRentalPage,
  RedHillBoroughRentalPage, RockledgeBoroughRentalPage, RoyersfordBoroughRentalPage, SchwenksvilleBoroughRentalPage,
  SoudertonBoroughRentalPage, TelfordBoroughRentalPage, TrappeBoroughRentalPage, WestConshohockenBoroughRentalPage,
  // Townships
  AbingtonTownshipRentalPage, CheltenhamTownshipRentalPage, DouglassTownshipRentalPage, EastNorritonTownshipRentalPage,
  FranconiaTownshipRentalPage, HatfieldTownshipRentalPage, HorshamTownshipRentalPage, LimerickTownshipRentalPage,
  LowerFrederickTownshipRentalPage, LowerGwyneddTownshipRentalPage, LowerMerionTownshipRentalPage, LowerMorelandTownshipRentalPage,
  LowerPottsgroveTownshipRentalPage, LowerProvidenceTownshipRentalPage, LowerSalfordTownshipRentalPage, MarlboroughTownshipRentalPage,
  MontgomeryTownshipRentalPage, NewHanoverTownshipRentalPage, PerkiomenTownshipRentalPage, PlymouthTownshipRentalPage,
  SalfordTownshipRentalPage, SkippackTownshipRentalPage, SpringfieldTownshipRentalPage, TowamencinTownshipRentalPage,
  UpperDublinTownshipRentalPage, UpperFrederickTownshipRentalPage, UpperGwyneddTownshipRentalPage, UpperHanoverTownshipRentalPage,
  UpperMerionTownshipRentalPage, UpperMorelandTownshipRentalPage, UpperPottsgroveTownshipRentalPage, UpperProvidenceTownshipRentalPage,
  UpperSalfordTownshipRentalPage, WestNorritonTownshipRentalPage, WestPottsgroveTownshipRentalPage, WhitemarshTownshipRentalPage,
  WhitpainTownshipRentalPage, WorcesterTownshipRentalPage
} from "@/pages/rentals/MontgomeryCountyMunicipalityRentals";
// Community Rental Pages
import {
  KingOfPrussiaRentalPage, ArdmoreRentalPage, BlueBellRentalPage, FortWashingtonRentalPage,
  PlymouthMeetingRentalPage, WillowGroveRentalPage, GladswyneRentalPage, ElkinsParkRentalPage,
  LafayetteHillRentalPage, SpringHouseRentalPage, WyncoteRentalPage, WynnewoodRentalPage,
  HarleysvilleRentalPage, AudubonRentalPage, BalaCynwydRentalPage
} from "@/pages/rentals/MontgomeryCountyCommunityRentals";
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
// New Montgomery County Municipality Pages - All 62 municipalities
import {
  // Boroughs (24)
  AmblerBoroughPage, BridgeportBoroughPage, BrynAthynBoroughPage, CollegevilleBoroughPage,
  ConshohockenBoroughPage, EastGreenvilleBoroughPage, GreenLaneBoroughPage, HatboroBoroughPage,
  HatfieldBoroughPage, JenkintownBoroughPage, LansdaleBoroughPage, NarberthBoroughPage,
  NorristownBoroughPage, NorthWalesBoroughPage, PennsburgBoroughPage, PottstownBoroughPage,
  RedHillBoroughPage, RockledgeBoroughPage, RoyersfordBoroughPage, SchwenksvilleBoroughPage,
  SoudertonBoroughPage, TelfordBoroughPage, TrappeBoroughPage, WestConshohockenBoroughPage,
  // Townships (38)
  AbingtonTownshipPage, CheltenhamTownshipPage, DouglassTownshipPage, EastNorritonTownshipPage,
  FranconiaTownshipPage, HatfieldTownshipPage, HorshamTownshipPage, LimerickTownshipPage,
  LowerFrederickTownshipPage, LowerGwyneddTownshipPage, LowerMerionTownshipPage, LowerMorelandTownshipPage,
  LowerPottsgroveTownshipPage, LowerProvidenceTownshipPage, LowerSalfordTownshipPage, MarlboroughTownshipPage,
  MontgomeryTownshipPage, NewHanoverTownshipPage, PerkiomenTownshipPage, PlymouthTownshipPage,
  SalfordTownshipPage, SkippackTownshipPage, SpringfieldTownshipPage, TowamencinTownshipPage,
  UpperDublinTownshipPage, UpperFrederickTownshipPage, UpperGwyneddTownshipPage, UpperHanoverTownshipPage,
  UpperMerionTownshipPage, UpperMorelandTownshipPage, UpperPottsgroveTownshipPage, UpperProvidenceTownshipPage,
  UpperSalfordTownshipPage, WestNorritonTownshipPage, WestPottsgroveTownshipPage, WhitemarshTownshipPage,
  WhitpainTownshipPage, WorcesterTownshipPage
} from "@/pages/towns/NewMontgomeryCountyTownPages";

// Import comprehensive town pages - consolidated for clean structure
import {
  AbingtonPage, AmblerPage, ArdmorePage, AudubonPage, BlueBellPage,
  BridgeportPage, ConshohockenPage, FortWashingtonPage, KingOfPrussiaPage,
  LansdalePage, NorristownPage, NorthWalesPage, PlymouthMeetingPage,
  PottstownPage, RoyersfordPage, WillowGrovePage
} from "@/pages/towns/AllMontgomeryCountyTowns";

// Import Montgomery County Community Pages (unincorporated communities and neighborhoods)
import {
  ArdmorePage as ArdmoreCommunityPage, AudubonPage as AudubonCommunityPage, BalaCynwydPage, BlueBellPage as BlueBellCommunityPage,
  CedarsPage, ColmarPage, CreameryPage, DresherPage, EaglevillePage, ElkinsParkPage,
  FairviewVillagePage, FlourtownPage, FortWashingtonPage as FortWashingtonCommunityPage, FrederickPage, GilbertsvillePage, GladwynePage,
  GlensidePage, GwyneddPage, GwyneddValleyPage, HarleysvillePage, HaverfordPage, HuntingdonValleyPage,
  KingOfPrussiaPage as KingOfPrussiaCommunityPage, KulpsvillePage, LafayetteHillPage, LederachPage, MainlandPage, MelroseParkPage,
  MerionStationPage, MontClarePage, MontgomeryvillePage, OaksPage, OrelandPage, PalmPage,
  PerkiomenPage, PerkiomenvillePage, PlymouthPage, PlymouthMeetingPage as PlymouthMeetingCommunityPage, SalfordvillePage, SassamansvillePage,
  SpringfieldPage, SpringHousePage, SpringMountPage, SumneytownPage, TylersportPage, WestPointPage,
  WorcesterPage, WoxallPage, WyncotePage, WynnewoodPage, ZieglervillePage
} from "@/pages/towns/MontgomeryCountyCommunityPages";

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
            
            {/* Montgomery County Boroughs (24) */}
            <Route path="/ambler-borough-golf-carts" component={AmblerBoroughPage} />
            <Route path="/bridgeport-borough-golf-carts" component={BridgeportBoroughPage} />
            <Route path="/bryn-athyn-borough-golf-carts" component={BrynAthynBoroughPage} />
            <Route path="/collegeville-borough-golf-carts" component={CollegevilleBoroughPage} />
            <Route path="/conshohocken-borough-golf-carts" component={ConshohockenBoroughPage} />
            <Route path="/east-greenville-borough-golf-carts" component={EastGreenvilleBoroughPage} />
            <Route path="/green-lane-borough-golf-carts" component={GreenLaneBoroughPage} />
            <Route path="/hatboro-borough-golf-carts" component={HatboroBoroughPage} />
            <Route path="/hatfield-borough-golf-carts" component={HatfieldBoroughPage} />
            <Route path="/jenkintown-borough-golf-carts" component={JenkintownBoroughPage} />
            <Route path="/lansdale-borough-golf-carts" component={LansdaleBoroughPage} />
            <Route path="/narberth-borough-golf-carts" component={NarberthBoroughPage} />
            <Route path="/norristown-borough-golf-carts" component={NorristownBoroughPage} />
            <Route path="/north-wales-borough-golf-carts" component={NorthWalesBoroughPage} />
            <Route path="/pennsburg-borough-golf-carts" component={PennsburgBoroughPage} />
            <Route path="/pottstown-borough-golf-carts" component={PottstownBoroughPage} />
            <Route path="/red-hill-borough-golf-carts" component={RedHillBoroughPage} />
            <Route path="/rockledge-borough-golf-carts" component={RockledgeBoroughPage} />
            <Route path="/royersford-borough-golf-carts" component={RoyersfordBoroughPage} />
            <Route path="/schwenksville-borough-golf-carts" component={SchwenksvilleBoroughPage} />
            <Route path="/souderton-borough-golf-carts" component={SoudertonBoroughPage} />
            <Route path="/telford-borough-golf-carts" component={TelfordBoroughPage} />
            <Route path="/trappe-borough-golf-carts" component={TrappeBoroughPage} />
            <Route path="/west-conshohocken-borough-golf-carts" component={WestConshohockenBoroughPage} />
            
            {/* Montgomery County Townships (38) */}
            <Route path="/abington-township-golf-carts" component={AbingtonTownshipPage} />
            <Route path="/cheltenham-township-golf-carts" component={CheltenhamTownshipPage} />
            <Route path="/douglass-township-golf-carts" component={DouglassTownshipPage} />
            <Route path="/east-norriton-township-golf-carts" component={EastNorritonTownshipPage} />
            <Route path="/franconia-township-golf-carts" component={FranconiaTownshipPage} />
            <Route path="/hatfield-township-golf-carts" component={HatfieldTownshipPage} />
            <Route path="/horsham-township-golf-carts" component={HorshamTownshipPage} />
            <Route path="/limerick-township-golf-carts" component={LimerickTownshipPage} />
            <Route path="/lower-frederick-township-golf-carts" component={LowerFrederickTownshipPage} />
            <Route path="/lower-gwynedd-township-golf-carts" component={LowerGwyneddTownshipPage} />
            <Route path="/lower-merion-township-golf-carts" component={LowerMerionTownshipPage} />
            <Route path="/lower-moreland-township-golf-carts" component={LowerMorelandTownshipPage} />
            <Route path="/lower-pottsgrove-township-golf-carts" component={LowerPottsgroveTownshipPage} />
            <Route path="/lower-providence-township-golf-carts" component={LowerProvidenceTownshipPage} />
            <Route path="/lower-salford-township-golf-carts" component={LowerSalfordTownshipPage} />
            <Route path="/marlborough-township-golf-carts" component={MarlboroughTownshipPage} />
            <Route path="/montgomery-township-golf-carts" component={MontgomeryTownshipPage} />
            <Route path="/new-hanover-township-golf-carts" component={NewHanoverTownshipPage} />
            <Route path="/perkiomen-township-golf-carts" component={PerkiomenTownshipPage} />
            <Route path="/plymouth-township-golf-carts" component={PlymouthTownshipPage} />
            <Route path="/salford-township-golf-carts" component={SalfordTownshipPage} />
            <Route path="/skippack-township-golf-carts" component={SkippackTownshipPage} />
            <Route path="/springfield-township-golf-carts" component={SpringfieldTownshipPage} />
            <Route path="/towamencin-township-golf-carts" component={TowamencinTownshipPage} />
            <Route path="/upper-dublin-township-golf-carts" component={UpperDublinTownshipPage} />
            <Route path="/upper-frederick-township-golf-carts" component={UpperFrederickTownshipPage} />
            <Route path="/upper-gwynedd-township-golf-carts" component={UpperGwyneddTownshipPage} />
            <Route path="/upper-hanover-township-golf-carts" component={UpperHanoverTownshipPage} />
            <Route path="/upper-merion-township-golf-carts" component={UpperMerionTownshipPage} />
            <Route path="/upper-moreland-township-golf-carts" component={UpperMorelandTownshipPage} />
            <Route path="/upper-pottsgrove-township-golf-carts" component={UpperPottsgroveTownshipPage} />
            <Route path="/upper-providence-township-golf-carts" component={UpperProvidenceTownshipPage} />
            <Route path="/upper-salford-township-golf-carts" component={UpperSalfordTownshipPage} />
            <Route path="/west-norriton-township-golf-carts" component={WestNorritonTownshipPage} />
            <Route path="/west-pottsgrove-township-golf-carts" component={WestPottsgroveTownshipPage} />
            <Route path="/whitemarsh-township-golf-carts" component={WhitemarshTownshipPage} />
            <Route path="/whitpain-township-golf-carts" component={WhitpainTownshipPage} />
            <Route path="/worcester-township-golf-carts" component={WorcesterTownshipPage} />
            
            {/* Municipality Rental Pages - Montgomery County Boroughs (24) */}
            <Route path="/ambler-borough-golf-carts/rentals" component={AmblerBoroughRentalPage} />
            <Route path="/bridgeport-borough-golf-carts/rentals" component={BridgeportBoroughRentalPage} />
            <Route path="/bryn-athyn-borough-golf-carts/rentals" component={BrynAthynBoroughRentalPage} />
            <Route path="/collegeville-borough-golf-carts/rentals" component={CollegevilleBoroughRentalPage} />
            <Route path="/conshohocken-borough-golf-carts/rentals" component={ConshohockenBoroughRentalPage} />
            <Route path="/east-greenville-borough-golf-carts/rentals" component={EastGreenvilleBoroughRentalPage} />
            <Route path="/green-lane-borough-golf-carts/rentals" component={GreenLaneBoroughRentalPage} />
            <Route path="/hatboro-borough-golf-carts/rentals" component={HatboroBoroughRentalPage} />
            <Route path="/hatfield-borough-golf-carts/rentals" component={HatfieldBoroughRentalPage} />
            <Route path="/jenkintown-borough-golf-carts/rentals" component={JenkintownBoroughRentalPage} />
            <Route path="/lansdale-borough-golf-carts/rentals" component={LansdaleBoroughRentalPage} />
            <Route path="/narberth-borough-golf-carts/rentals" component={NarberthBoroughRentalPage} />
            <Route path="/norristown-borough-golf-carts/rentals" component={NorristownBoroughRentalPage} />
            <Route path="/north-wales-borough-golf-carts/rentals" component={NorthWalesBoroughRentalPage} />
            <Route path="/pennsburg-borough-golf-carts/rentals" component={PennsburgBoroughRentalPage} />
            <Route path="/pottstown-borough-golf-carts/rentals" component={PottstownBoroughRentalPage} />
            <Route path="/red-hill-borough-golf-carts/rentals" component={RedHillBoroughRentalPage} />
            <Route path="/rockledge-borough-golf-carts/rentals" component={RockledgeBoroughRentalPage} />
            <Route path="/royersford-borough-golf-carts/rentals" component={RoyersfordBoroughRentalPage} />
            <Route path="/schwenksville-borough-golf-carts/rentals" component={SchwenksvilleBoroughRentalPage} />
            <Route path="/souderton-borough-golf-carts/rentals" component={SoudertonBoroughRentalPage} />
            <Route path="/telford-borough-golf-carts/rentals" component={TelfordBoroughRentalPage} />
            <Route path="/trappe-borough-golf-carts/rentals" component={TrappeBoroughRentalPage} />
            <Route path="/west-conshohocken-borough-golf-carts/rentals" component={WestConshohockenBoroughRentalPage} />
            
            {/* Municipality Rental Pages - Montgomery County Townships (38) */}
            <Route path="/abington-township-golf-carts/rentals" component={AbingtonTownshipRentalPage} />
            <Route path="/cheltenham-township-golf-carts/rentals" component={CheltenhamTownshipRentalPage} />
            <Route path="/douglass-township-golf-carts/rentals" component={DouglassTownshipRentalPage} />
            <Route path="/east-norriton-township-golf-carts/rentals" component={EastNorritonTownshipRentalPage} />
            <Route path="/franconia-township-golf-carts/rentals" component={FranconiaTownshipRentalPage} />
            <Route path="/hatfield-township-golf-carts/rentals" component={HatfieldTownshipRentalPage} />
            <Route path="/horsham-township-golf-carts/rentals" component={HorshamTownshipRentalPage} />
            <Route path="/limerick-township-golf-carts/rentals" component={LimerickTownshipRentalPage} />
            <Route path="/lower-frederick-township-golf-carts/rentals" component={LowerFrederickTownshipRentalPage} />
            <Route path="/lower-gwynedd-township-golf-carts/rentals" component={LowerGwyneddTownshipRentalPage} />
            <Route path="/lower-merion-township-golf-carts/rentals" component={LowerMerionTownshipRentalPage} />
            <Route path="/lower-moreland-township-golf-carts/rentals" component={LowerMorelandTownshipRentalPage} />
            <Route path="/lower-pottsgrove-township-golf-carts/rentals" component={LowerPottsgroveTownshipRentalPage} />
            <Route path="/lower-providence-township-golf-carts/rentals" component={LowerProvidenceTownshipRentalPage} />
            <Route path="/lower-salford-township-golf-carts/rentals" component={LowerSalfordTownshipRentalPage} />
            <Route path="/marlborough-township-golf-carts/rentals" component={MarlboroughTownshipRentalPage} />
            <Route path="/montgomery-township-golf-carts/rentals" component={MontgomeryTownshipRentalPage} />
            <Route path="/new-hanover-township-golf-carts/rentals" component={NewHanoverTownshipRentalPage} />
            <Route path="/perkiomen-township-golf-carts/rentals" component={PerkiomenTownshipRentalPage} />
            <Route path="/plymouth-township-golf-carts/rentals" component={PlymouthTownshipRentalPage} />
            <Route path="/salford-township-golf-carts/rentals" component={SalfordTownshipRentalPage} />
            <Route path="/skippack-township-golf-carts/rentals" component={SkippackTownshipRentalPage} />
            <Route path="/springfield-township-golf-carts/rentals" component={SpringfieldTownshipRentalPage} />
            <Route path="/towamencin-township-golf-carts/rentals" component={TowamencinTownshipRentalPage} />
            <Route path="/upper-dublin-township-golf-carts/rentals" component={UpperDublinTownshipRentalPage} />
            <Route path="/upper-frederick-township-golf-carts/rentals" component={UpperFrederickTownshipRentalPage} />
            <Route path="/upper-gwynedd-township-golf-carts/rentals" component={UpperGwyneddTownshipRentalPage} />
            <Route path="/upper-hanover-township-golf-carts/rentals" component={UpperHanoverTownshipRentalPage} />
            <Route path="/upper-merion-township-golf-carts/rentals" component={UpperMerionTownshipRentalPage} />
            <Route path="/upper-moreland-township-golf-carts/rentals" component={UpperMorelandTownshipRentalPage} />
            <Route path="/upper-pottsgrove-township-golf-carts/rentals" component={UpperPottsgroveTownshipRentalPage} />
            <Route path="/upper-providence-township-golf-carts/rentals" component={UpperProvidenceTownshipRentalPage} />
            <Route path="/upper-salford-township-golf-carts/rentals" component={UpperSalfordTownshipRentalPage} />
            <Route path="/west-norriton-township-golf-carts/rentals" component={WestNorritonTownshipRentalPage} />
            <Route path="/west-pottsgrove-township-golf-carts/rentals" component={WestPottsgroveTownshipRentalPage} />
            <Route path="/whitemarsh-township-golf-carts/rentals" component={WhitemarshTownshipRentalPage} />
            <Route path="/whitpain-township-golf-carts/rentals" component={WhitpainTownshipRentalPage} />
            <Route path="/worcester-township-golf-carts/rentals" component={WorcesterTownshipRentalPage} />
            
            {/* Montgomery County Community Pages (Unincorporated Communities & Neighborhoods) */}
            <Route path="/ardmore" component={ArdmoreCommunityPage} />
            <Route path="/audubon" component={AudubonCommunityPage} />
            <Route path="/bala-cynwyd" component={BalaCynwydPage} />
            <Route path="/blue-bell" component={BlueBellCommunityPage} />
            <Route path="/cedars" component={CedarsPage} />
            <Route path="/colmar" component={ColmarPage} />
            <Route path="/creamery" component={CreameryPage} />
            <Route path="/dresher" component={DresherPage} />
            <Route path="/eagleville" component={EaglevillePage} />
            <Route path="/elkins-park" component={ElkinsParkPage} />
            <Route path="/fairview-village" component={FairviewVillagePage} />
            <Route path="/flourtown" component={FlourtownPage} />
            <Route path="/fort-washington" component={FortWashingtonCommunityPage} />
            <Route path="/frederick" component={FrederickPage} />
            <Route path="/gilbertsville" component={GilbertsvillePage} />
            <Route path="/gladwyne" component={GladwynePage} />
            <Route path="/glenside" component={GlensidePage} />
            <Route path="/gwynedd" component={GwyneddPage} />
            <Route path="/gwynedd-valley" component={GwyneddValleyPage} />
            <Route path="/harleysville" component={HarleysvillePage} />
            <Route path="/haverford" component={HaverfordPage} />
            <Route path="/huntingdon-valley" component={HuntingdonValleyPage} />
            <Route path="/king-of-prussia" component={KingOfPrussiaCommunityPage} />
            <Route path="/kulpsville" component={KulpsvillePage} />
            <Route path="/lafayette-hill" component={LafayetteHillPage} />
            <Route path="/lederach" component={LederachPage} />
            <Route path="/mainland" component={MainlandPage} />
            <Route path="/melrose-park" component={MelroseParkPage} />
            <Route path="/merion-station" component={MerionStationPage} />
            <Route path="/mont-clare" component={MontClarePage} />
            <Route path="/montgomeryville" component={MontgomeryvillePage} />
            <Route path="/oaks" component={OaksPage} />
            <Route path="/oreland" component={OrelandPage} />
            <Route path="/palm" component={PalmPage} />
            <Route path="/perkiomen" component={PerkiomenPage} />
            <Route path="/perkiomenville" component={PerkiomenvillePage} />
            <Route path="/plymouth" component={PlymouthPage} />
            <Route path="/plymouth-meeting" component={PlymouthMeetingCommunityPage} />
            <Route path="/salfordville" component={SalfordvillePage} />
            <Route path="/sassamansville" component={SassamansvillePage} />
            <Route path="/springfield" component={SpringfieldPage} />
            <Route path="/spring-house" component={SpringHousePage} />
            <Route path="/spring-mount" component={SpringMountPage} />
            <Route path="/sumneytown" component={SumneytownPage} />
            <Route path="/tylersport" component={TylersportPage} />
            <Route path="/west-point" component={WestPointPage} />
            <Route path="/worcester" component={WorcesterPage} />
            <Route path="/woxall" component={WoxallPage} />
            <Route path="/wyncote" component={WyncotePage} />
            <Route path="/wynnewood" component={WynnewoodPage} />
            <Route path="/zieglerville" component={ZieglervillePage} />
            
            {/* Community Rental Pages */}
            <Route path="/king-of-prussia-rentals" component={KingOfPrussiaRentalPage} />
            <Route path="/ardmore-rentals" component={ArdmoreRentalPage} />
            <Route path="/blue-bell-rentals" component={BlueBellRentalPage} />
            <Route path="/fort-washington-rentals" component={FortWashingtonRentalPage} />
            <Route path="/plymouth-meeting-rentals" component={PlymouthMeetingRentalPage} />
            <Route path="/willow-grove-rentals" component={WillowGroveRentalPage} />
            <Route path="/gladwyne-rentals" component={GladswyneRentalPage} />
            <Route path="/elkins-park-rentals" component={ElkinsParkRentalPage} />
            <Route path="/lafayette-hill-rentals" component={LafayetteHillRentalPage} />
            <Route path="/spring-house-rentals" component={SpringHouseRentalPage} />
            <Route path="/wyncote-rentals" component={WyncoteRentalPage} />
            <Route path="/wynnewood-rentals" component={WynnewoodRentalPage} />
            <Route path="/harleysville-rentals" component={HarleysvilleRentalPage} />
            <Route path="/audubon-rentals" component={AudubonRentalPage} />
            <Route path="/bala-cynwyd-rentals" component={BalaCynwydRentalPage} />
            
            {/* Official Municipality Pages (Simplified URLs) */}
            <Route path="/abington" component={AbingtonTownshipPage} />
            <Route path="/ambler" component={AmblerBoroughPage} />
            <Route path="/bridgeport" component={BridgeportBoroughPage} />
            <Route path="/cheltenham" component={CheltenhamTownshipPage} />
            <Route path="/collegeville" component={CollegevilleBoroughPage} />
            <Route path="/conshohocken" component={ConshohockenBoroughPage} />
            <Route path="/east-greenville" component={EastGreenvilleBoroughPage} />
            <Route path="/franconia" component={FranconiaTownshipPage} />
            <Route path="/green-lane" component={GreenLaneBoroughPage} />
            <Route path="/hatboro" component={HatboroBoroughPage} />
            <Route path="/hatfield" component={HatfieldBoroughPage} />
            <Route path="/horsham" component={HorshamTownshipPage} />
            <Route path="/jenkintown" component={JenkintownBoroughPage} />
            <Route path="/lansdale" component={LansdaleBoroughPage} />
            <Route path="/marlborough" component={MarlboroughTownshipPage} />
            <Route path="/montgomery" component={MontgomeryTownshipPage} />
            <Route path="/narberth" component={NarberthBoroughPage} />
            <Route path="/new-hanover" component={NewHanoverTownshipPage} />
            <Route path="/norristown" component={NorristownBoroughPage} />
            <Route path="/north-wales" component={NorthWalesBoroughPage} />
            <Route path="/pennsburg" component={PennsburgBoroughPage} />
            <Route path="/pottstown" component={PottstownBoroughPage} />
            <Route path="/red-hill" component={RedHillBoroughPage} />
            <Route path="/rockledge" component={RockledgeBoroughPage} />
            <Route path="/royersford" component={RoyersfordBoroughPage} />
            <Route path="/salford" component={SalfordTownshipPage} />
            <Route path="/schwenksville" component={SchwenksvilleBoroughPage} />
            <Route path="/skippack" component={SkippackTownshipPage} />
            <Route path="/souderton" component={SoudertonBoroughPage} />
            <Route path="/telford" component={TelfordBoroughPage} />
            <Route path="/towamencin" component={TowamencinTownshipPage} />
            <Route path="/trappe" component={TrappeBoroughPage} />
            <Route path="/upper-dublin" component={UpperDublinTownshipPage} />
            <Route path="/upper-frederick" component={UpperFrederickTownshipPage} />
            <Route path="/upper-gwynedd" component={UpperGwyneddTownshipPage} />
            <Route path="/upper-hanover" component={UpperHanoverTownshipPage} />
            <Route path="/upper-merion" component={UpperMerionTownshipPage} />
            <Route path="/upper-moreland" component={UpperMorelandTownshipPage} />
            <Route path="/upper-pottsgrove" component={UpperPottsgroveTownshipPage} />
            <Route path="/upper-providence" component={UpperProvidenceTownshipPage} />
            <Route path="/upper-salford" component={UpperSalfordTownshipPage} />
            <Route path="/west-conshohocken" component={WestConshohockenBoroughPage} />
            <Route path="/west-norriton" component={WestNorritonTownshipPage} />
            <Route path="/west-pottsgrove" component={WestPottsgroveTownshipPage} />
            <Route path="/whitemarsh" component={WhitemarshTownshipPage} />
            <Route path="/whitpain" component={WhitpainTownshipPage} />
            <Route path="/willow-grove" component={WillowGrovePage} />
            
            {/* Essential Montgomery County Town Pages */}
            <Route path="/abington-golf-carts" component={AbingtonPage} />
            <Route path="/ambler-golf-carts" component={AmblerPage} />
            <Route path="/ardmore-golf-carts" component={ArdmorePage} />
            <Route path="/audubon-golf-carts" component={AudubonPage} />
            <Route path="/blue-bell-golf-carts" component={BlueBellPage} />
            <Route path="/bridgeport-golf-carts" component={BridgeportPage} />
            <Route path="/conshohocken-golf-carts" component={ConshohockenPage} />
            <Route path="/fort-washington-golf-carts" component={FortWashingtonPage} />
            <Route path="/king-of-prussia-golf-carts" component={KingOfPrussiaPage} />
            <Route path="/lansdale-golf-carts" component={LansdalePage} />
            <Route path="/norristown-golf-carts" component={NorristownPage} />
            <Route path="/north-wales-golf-carts" component={NorthWalesPage} />
            <Route path="/plymouth-meeting-golf-carts" component={PlymouthMeetingPage} />
            <Route path="/pottstown-golf-carts" component={PottstownPage} />
            <Route path="/royersford-golf-carts" component={RoyersfordPage} />
            <Route path="/willow-grove-golf-carts" component={WillowGrovePage} />
            
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
