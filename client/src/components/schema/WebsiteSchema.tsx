import { useEffect } from "react";

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
}

export default function WebsiteSchema({ 
  url = "https://AtlanticCountyGolfCarts.com",
  name = "Atlantic County Golf Carts",
  description = "Premier golf cart dealership in Atlantic County, New Jersey"
}: WebsiteSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": name,
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "Atlantic County Golf Carts",
        "logo": {
          "@type": "ImageObject",
          "url": "https://AtlanticCountyGolfCarts.com/attached_assets/Atlantic County Golf Carts (1)_1753457102314.png",
          "width": 400,
          "height": 400
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/inventory?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.facebook.com/AtlanticCountyGolfCarts",
        "https://twitter.com/AtlanticCountyGolfCarts",
        "https://www.instagram.com/AtlanticCountyGolfCarts"
      ]
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-website]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-website", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-website]');
      if (script) {
        script.remove();
      }
    };
  }, [url, name, description]);

  return null;
}