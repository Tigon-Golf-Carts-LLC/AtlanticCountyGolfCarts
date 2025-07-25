import WebsiteSchema from "./WebsiteSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import SiteNavigationSchema from "./SiteNavigationSchema";
import ProductSchema from "./ProductSchema";
import ServiceSchema from "./ServiceSchema";
import LocalBusinessSchema from "./LocalBusinessSchema";
import ReviewSchema from "./ReviewSchema";
import PersonSchema from "./PersonSchema";
import PlaceSchema from "./PlaceSchema";
import OfferSchema from "./OfferSchema";
import AggregateRatingSchema from "./AggregateRatingSchema";
import ImageObjectSchema from "./ImageObjectSchema";
import OrganizationSchema from "../OrganizationSchema";
import LocationSchema from "../LocationSchema";
import VehicleSchema from "../VehicleSchema";

interface AllSchemasProps {
  pageType: "home" | "about" | "contact" | "services" | "inventory" | "rentals" | "showroom" | "vehicle" | "location" | "location-rental" | "brand";
  pageData?: {
    title?: string;
    description?: string;
    url?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    // Vehicle-specific data
    vehicleName?: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleImage?: string;
    vehiclePrice?: string;
    vehicleFeatures?: string[];
    vehicleSpecs?: { [key: string]: string };
    // Location-specific data
    locationName?: string;
    locationType?: "Borough" | "Township";
    locationLatitude?: string;
    locationLongitude?: string;
    // Service-specific data
    serviceName?: string;
    serviceDescription?: string;
    serviceOffers?: Array<{
      price?: string;
      description?: string;
    }>;
    // Review data
    reviews?: Array<{
      author: string;
      reviewBody: string;
      reviewRating: number;
      datePublished: string;
      headline?: string;
    }>;
    // Person data (for about page)
    people?: Array<{
      name: string;
      jobTitle?: string;
      description?: string;
      image?: string;
    }>;
  };
}

export default function AllSchemas({ pageType, pageData = {} }: AllSchemasProps) {
  const {
    title = "Atlantic County Golf Carts",
    description = "Premier golf cart dealership in Atlantic County, New Jersey",
    url = "https://AtlanticCountyGolfCarts.com",
    breadcrumbs = [{ name: "Home", url: "https://AtlanticCountyGolfCarts.com/" }],
    vehicleName,
    vehicleBrand,
    vehicleModel,
    vehicleImage,
    vehiclePrice,
    vehicleFeatures = [],
    vehicleSpecs = {},
    locationName,
    locationType,
    locationLatitude,
    locationLongitude,
    serviceName,
    serviceDescription,
    serviceOffers = [],
    reviews = [],
    people = []
  } = pageData;

  return (
    <>
      {/* Core schemas for all pages */}
      <WebsiteSchema url={url} name={title} description={description} />
      <BreadcrumbSchema items={breadcrumbs} />
      <SiteNavigationSchema />
      <LocalBusinessSchema />
      <OrganizationSchema pageType={pageType === "home" ? "home" : pageType === "about" ? "about" : pageType === "contact" ? "contact" : pageType === "services" ? "services" : "home"} />
      
      {/* Page-specific schemas */}
      {pageType === "vehicle" && vehicleName && vehicleBrand && vehicleModel && vehicleImage && (
        <>
          <ProductSchema
            name={vehicleName}
            brand={vehicleBrand}
            model={vehicleModel}
            description={`${vehicleBrand} ${vehicleModel} electric golf cart available at Atlantic County Golf Carts`}
            image={vehicleImage}
            price={vehiclePrice}
            features={vehicleFeatures}
            specifications={vehicleSpecs}
            url={url}
          />
          <VehicleSchema
            name={vehicleName}
            brand={vehicleBrand}
            image={vehicleImage}
            description={`${vehicleBrand} ${vehicleModel} electric golf cart`}
            url={url}
            price={vehiclePrice}
            features={vehicleFeatures}
          />
          <OfferSchema
            itemOffered={{
              name: vehicleName,
              type: "Product",
              description: `${vehicleBrand} ${vehicleModel} electric golf cart`,
              category: "Electric Golf Cart"
            }}
            price={vehiclePrice}
          />
          <ImageObjectSchema
            url={`/attached_assets/${vehicleImage}`}
            name={`${vehicleName} Image`}
            description={`Professional photo of ${vehicleName} golf cart`}
            width={800}
            height={600}
          />
        </>
      )}
      
      {pageType === "location" && locationName && locationType && (
        <>
          <LocationSchema
            municipalityName={locationName}
            municipalityType={locationType}
            pageType="location"
            latitude={locationLatitude}
            longitude={locationLongitude}
          />
          <PlaceSchema
            name={`${locationName} ${locationType}`}
            description={`Golf cart sales and service in ${locationName} ${locationType}, Atlantic County, New Jersey`}
            address={{
              addressLocality: locationName,
              addressRegion: "NJ",
              addressCountry: "US"
            }}
            geo={locationLatitude && locationLongitude ? {
              latitude: locationLatitude,
              longitude: locationLongitude
            } : undefined}
            telephone="1-844-844-6638"
            url={url}
            containedInPlace={{
              name: "Atlantic County",
              type: "AdministrativeArea"
            }}
          />
          <ServiceSchema
            serviceName={`Golf Cart Services in ${locationName} ${locationType}`}
            description={`Professional golf cart sales, service, and rentals serving ${locationName} ${locationType}, Atlantic County, NJ`}
            areaServed={`${locationName} ${locationType}, Atlantic County, NJ`}
          />
        </>
      )}
      
      {pageType === "location-rental" && locationName && locationType && (
        <>
          <LocationSchema
            municipalityName={locationName}
            municipalityType={locationType}
            pageType="rental"
            latitude={locationLatitude}
            longitude={locationLongitude}
          />
          <ServiceSchema
            serviceName={`Golf Cart Rentals in ${locationName} ${locationType}`}
            description={`Professional golf cart rental services in ${locationName} ${locationType}, Atlantic County, New Jersey`}
            areaServed={`${locationName} ${locationType}, Atlantic County, NJ`}
            offers={[
              { price: "$199", description: "4-Seater Golf Cart Daily Rental" },
              { price: "$249", description: "6-Seater Golf Cart Daily Rental" },
              { price: "$299", description: "Utility Golf Cart Daily Rental" }
            ]}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Rental",
              type: "Service",
              description: `Golf cart rental service in ${locationName} ${locationType}`,
              category: "Rental Service"
            }}
            priceSpecification={[
              { type: "UnitPriceSpecification", price: "199", priceCurrency: "USD", description: "4-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "249", priceCurrency: "USD", description: "6-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "299", priceCurrency: "USD", description: "Utility Daily Rental" }
            ]}
          />
        </>
      )}
      
      {pageType === "services" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Services"
            description="Comprehensive golf cart sales, service, repair, and maintenance in Atlantic County, New Jersey"
            offers={serviceOffers}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Service & Repair",
              type: "Service",
              description: "Professional golf cart maintenance and repair services",
              category: "Automotive Service"
            }}
          />
        </>
      )}
      
      {pageType === "inventory" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Sales"
            description="New and used electric golf cart sales in Atlantic County, New Jersey"
          />
          <OfferSchema
            itemOffered={{
              name: "Electric Golf Carts",
              type: "Product",
              description: "DENAGO and Evolution electric golf carts for sale",
              category: "Electric Golf Cart"
            }}
          />
        </>
      )}
      
      {pageType === "rentals" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Rentals"
            description="Golf cart rental services throughout Atlantic County, New Jersey"
            offers={[
              { price: "$199", description: "4-Seater Golf Cart Daily Rental" },
              { price: "$249", description: "6-Seater Golf Cart Daily Rental" },
              { price: "$299", description: "Utility Golf Cart Daily Rental" }
            ]}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Rental",
              type: "Service",
              description: "Daily, weekly, and monthly golf cart rentals",
              category: "Rental Service"
            }}
            priceSpecification={[
              { type: "UnitPriceSpecification", price: "199", priceCurrency: "USD", description: "4-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "249", priceCurrency: "USD", description: "6-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "299", priceCurrency: "USD", description: "Utility Daily Rental" }
            ]}
          />
        </>
      )}
      
      {pageType === "about" && people.length > 0 && (
        <>
          {people.map((person, index) => (
            <PersonSchema
              key={index}
              name={person.name}
              jobTitle={person.jobTitle}
              description={person.description}
              image={person.image}
            />
          ))}
        </>
      )}
      
      {reviews.length > 0 && (
        <>
          <ReviewSchema
            itemReviewed={{
              name: title,
              type: pageType === "vehicle" ? "Product" : "LocalBusiness",
              url: url
            }}
            reviews={reviews}
          />
          <AggregateRatingSchema
            itemReviewed={{
              name: title,
              type: pageType === "vehicle" ? "Product" : "LocalBusiness",
              url: url
            }}
            ratingValue="4.7"
            reviewCount={reviews.length.toString()}
          />
        </>
      )}
      
      {/* Always include main company image */}
      <ImageObjectSchema
        url="/attached_assets/Atlantic County Golf Carts (1)_1753457102314.png"
        name="Atlantic County Golf Carts Logo"
        description="Atlantic County Golf Carts company logo featuring golf cart and lighthouse design"
        width={400}
        height={400}
      />
    </>
  );
}