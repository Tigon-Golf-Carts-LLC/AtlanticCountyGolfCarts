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
// Berks County Town Pages
import {
  ReadingPage, BoyertownPage, FleetwoodPage, HamburgPage, KenhorstPage,
  KutzownPage, LaureldalePage, LehightonPage, LyonsPage, MohntonPage,
  MountPennPage, NewMorganPage, RobersoniaPage, ShillingtonPage, SinkingSpringPage,
  St_LawrencePage, WernervillePage, WomelsdrfPage, WyomissingPage,
  AlsaceTownshipPage, BernTownshipPage, BethhelTownshipPage, BrecknockTownshipPage,
  CaernarvonTownshipPage, CentreTownshipPage, ColebrookdaleTownshipPage, CumruTownshipPage,
  DouglassTownshipPage, ExeterTownshipPage, HeidelburgTownshipPage, HerefordTownshipPage,
  JeffersonTownshipPage, KenhorstTownshipPage, LongswampTownshipPage, LowerAlsaceTownshipPage,
  LowerHeidelburgTownshipPage, MaxatawnyTownshipPage, MuhlenbergTownshipPage, OntelauneeTownshipPage,
  PerryTownshipPage, PikeTownshipPage, RichlandTownshipPage, RobertsonTownshipPage,
  RuscombmanorTownshipPage, SpringTownshipPage, TildenTownshipPage, TulpehockenTownshipPage,
  UnionTownshipPage, UpperBernTownshipPage, UpperTulpehockenTownshipPage, WashingtonTownshipPage,
  WindsorTownshipPage
} from "@/pages/towns/BerksCountyTownPages";

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
            
            {/* Berks County City & Borough Pages */}
            <Route path="/reading-city-golf-carts" component={ReadingPage} />
            <Route path="/boyertown-borough-golf-carts" component={BoyertownPage} />
            <Route path="/fleetwood-borough-golf-carts" component={FleetwoodPage} />
            <Route path="/hamburg-borough-golf-carts" component={HamburgPage} />
            <Route path="/kenhorst-borough-golf-carts" component={KenhorstPage} />
            <Route path="/kutztown-borough-golf-carts" component={KutzownPage} />
            <Route path="/laureldale-borough-golf-carts" component={LaureldalePage} />
            <Route path="/leesport-borough-golf-carts" component={LehightonPage} />
            <Route path="/lyons-borough-golf-carts" component={LyonsPage} />
            <Route path="/mohnton-borough-golf-carts" component={MohntonPage} />
            <Route path="/mount-penn-borough-golf-carts" component={MountPennPage} />
            <Route path="/new-morgan-borough-golf-carts" component={NewMorganPage} />
            <Route path="/robesonia-borough-golf-carts" component={RobersoniaPage} />
            <Route path="/shillington-borough-golf-carts" component={ShillingtonPage} />
            <Route path="/sinking-spring-borough-golf-carts" component={SinkingSpringPage} />
            <Route path="/st-lawrence-borough-golf-carts" component={St_LawrencePage} />
            <Route path="/wernersville-borough-golf-carts" component={WernervillePage} />
            <Route path="/womelsdorf-borough-golf-carts" component={WomelsdrfPage} />
            <Route path="/wyomissing-borough-golf-carts" component={WyomissingPage} />
            
            {/* Berks County Township Pages */}
            <Route path="/alsace-township-golf-carts" component={AlsaceTownshipPage} />
            <Route path="/bern-township-golf-carts" component={BernTownshipPage} />
            <Route path="/bethel-township-golf-carts" component={BethhelTownshipPage} />
            <Route path="/brecknock-township-golf-carts" component={BrecknockTownshipPage} />
            <Route path="/caernarvon-township-golf-carts" component={CaernarvonTownshipPage} />
            <Route path="/centre-township-golf-carts" component={CentreTownshipPage} />
            <Route path="/colebrookdale-township-golf-carts" component={ColebrookdaleTownshipPage} />
            <Route path="/cumru-township-golf-carts" component={CumruTownshipPage} />
            <Route path="/douglass-township-golf-carts" component={DouglassTownshipPage} />
            <Route path="/exeter-township-golf-carts" component={ExeterTownshipPage} />
            <Route path="/heidelburg-township-golf-carts" component={HeidelburgTownshipPage} />
            <Route path="/hereford-township-golf-carts" component={HerefordTownshipPage} />
            <Route path="/jefferson-township-golf-carts" component={JeffersonTownshipPage} />
            <Route path="/kenhorst-township-golf-carts" component={KenhorstTownshipPage} />
            <Route path="/longswamp-township-golf-carts" component={LongswampTownshipPage} />
            <Route path="/lower-alsace-township-golf-carts" component={LowerAlsaceTownshipPage} />
            <Route path="/lower-heidelburg-township-golf-carts" component={LowerHeidelburgTownshipPage} />
            <Route path="/maxatawny-township-golf-carts" component={MaxatawnyTownshipPage} />
            <Route path="/muhlenberg-township-golf-carts" component={MuhlenbergTownshipPage} />
            <Route path="/ontelaunee-township-golf-carts" component={OntelauneeTownshipPage} />
            <Route path="/perry-township-golf-carts" component={PerryTownshipPage} />
            <Route path="/pike-township-golf-carts" component={PikeTownshipPage} />
            <Route path="/richland-township-golf-carts" component={RichlandTownshipPage} />
            <Route path="/robeson-township-golf-carts" component={RobertsonTownshipPage} />
            <Route path="/ruscombmanor-township-golf-carts" component={RuscombmanorTownshipPage} />
            <Route path="/spring-township-golf-carts" component={SpringTownshipPage} />
            <Route path="/tilden-township-golf-carts" component={TildenTownshipPage} />
            <Route path="/tulpehocken-township-golf-carts" component={TulpehockenTownshipPage} />
            <Route path="/union-township-golf-carts" component={UnionTownshipPage} />
            <Route path="/upper-bern-township-golf-carts" component={UpperBernTownshipPage} />
            <Route path="/upper-tulpehocken-township-golf-carts" component={UpperTulpehockenTownshipPage} />
            <Route path="/washington-township-golf-carts" component={WashingtonTownshipPage} />
            <Route path="/windsor-township-golf-carts" component={WindsorTownshipPage} />
            
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
