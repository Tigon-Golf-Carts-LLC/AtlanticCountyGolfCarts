import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Vehicle } from "@shared/schema";

export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedDriveType, setSelectedDriveType] = useState("");

  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles", selectedBrand, selectedDriveType],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedBrand) params.append("brand", selectedBrand);
      if (selectedDriveType) params.append("driveType", selectedDriveType);
      
      const response = await fetch(`/api/vehicles?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Vehicles</h1>
          <p className="text-gray-600">
            Unable to load vehicle inventory. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
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
          selectedDriveType={selectedDriveType}
          onBrandChange={setSelectedBrand}
          onDriveTypeChange={setSelectedDriveType}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : vehicles && vehicles.length > 0 ? (
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
    </div>
  );
}
