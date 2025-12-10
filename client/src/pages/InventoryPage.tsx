import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { filterVehicles, type Vehicle } from "@/data/vehicles";
import SchemaMarkup, {
  generateBreadcrumbSchema,
  generateOfferCatalogSchema
} from "@/components/SchemaMarkup";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";


export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter vehicles based on selected brand and category
  const vehicles = useMemo(() => {
    return filterVehicles(selectedBrand, selectedCategory);
  }, [selectedBrand, selectedCategory]);

  const breadcrumbItems = [
    { name: "Home", url: "https://AtlanticCountyGolfCarts.com" },
    { name: "Inventory", url: "https://AtlanticCountyGolfCarts.com/inventory" }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title="Golf Cart Inventory"
        description="Browse our extensive inventory of new electric golf carts from DENAGO and Evolution with premium quality and expert service in Atlantic County, New Jersey. Call 1-844-844-6638."
        keywords="golf cart inventory Atlantic County NJ, electric golf carts for sale, DENAGO golf carts, Evolution golf carts, new golf carts New Jersey"
        canonicalUrl="https://AtlanticCountyGolfCarts.com/inventory"
        heroBackgroundImage="/attached_assets/a-photograph-of-a-bright-modern-golf-car_iofSws5mRiCxoMwQwuXw4A_Yv-NWBaTQQ6ofRhClJiiIw_1753454023367.png"
        ogImageWidth={1200}
        ogImageHeight={630}
      />
      <AllSchemas 
        pageType="inventory" 
        pageData={{
          title: "Golf Cart Inventory - Atlantic County Golf Carts",
          description: "Browse our extensive inventory of new electric golf carts from DENAGO and Evolution. Premium quality golf carts available in Atlantic County, New Jersey with expert service.",
          url: "https://AtlanticCountyGolfCarts.com/inventory",
          breadcrumbs: breadcrumbItems,
          reviews: [
            {
              author: "Jennifer Martinez",
              reviewBody: "Great selection of golf carts with knowledgeable staff. Found exactly what I was looking for at a competitive price.",
              reviewRating: 5,
              datePublished: "2025-01-18",
              headline: "Excellent selection and service"
            },
            {
              author: "Robert Chen",
              reviewBody: "The inventory is well-maintained and the buying process was smooth. Highly recommend for anyone looking for quality golf carts.",
              reviewRating: 5,
              datePublished: "2025-01-21",
              headline: "Quality inventory and smooth process"
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/a-photograph-of-a-bright-modern-golf-car_iofSws5mRiCxoMwQwuXw4A_Yv-NWBaTQQ6ofRhClJiiIw_1753454023367.png')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Cart Inventory
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our extensive collection of premium electric golf carts from DENAGO and EVOLUTION. 
            Find the perfect vehicle for your needs with our advanced filtering options.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Available Vehicles</h2>
        
        <VehicleFilters
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          onBrandChange={setSelectedBrand}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {vehicles && vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Vehicles Found</h2>
          <p className="text-gray-500">
            No vehicles match your current filter criteria. Try adjusting your filters or browse all vehicles.
          </p>
        </div>
      )}
      </div>

      {/* Can't Find What You're Looking For Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Our team can help you find the perfect golf cart or place a custom order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <a href="tel:1-844-844-6638" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
