import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { getFeaturedVehicles } from "@/data/vehicles";

export default function InventorySection() {
  // Get first 3 vehicles as featured
  const carts = getFeaturedVehicles(3);

  const getBadgeVariant = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes("street") || lowerCategory.includes("premium")) {
      return "secondary";
    }
    if (lowerCategory.includes("sport") || lowerCategory.includes("recreation")) {
      return "default";
    }
    return "outline";
  };

  const getBadgeText = (category: string) => {
    return category.toUpperCase();
  };

  return (
    <section id="inventory" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Golf Carts
          </h2>
          <p className="text-lg text-gray-600">
            Browse our selection of new and pre-owned golf carts from top manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={cart.images[0]}
                alt={cart.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {cart.name}
                  </h3>
                  <Badge variant={getBadgeVariant(cart.category)}>
                    {getBadgeText(cart.category)}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{cart.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ${cart.price.toLocaleString()}
                  </span>
                  <Link href={`/inventory/${cart.id}`}>
                    <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/inventory">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View All Inventory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}