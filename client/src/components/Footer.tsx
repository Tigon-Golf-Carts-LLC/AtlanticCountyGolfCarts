import { Link } from "wouter";

export default function Footer() {
  const towns = [
    "Warrington Township", "Newtown Township", "Northampton Township", "Lower Makefield Township",
    "Upper Makefield Township", "Middletown Township", "Yardley Borough", "Newtown Borough",
    "Doylestown Township", "Doylestown Borough", "Warwick Township", "Warminster Township",
    "Upper Southampton Township", "Lower Southampton Township", "Bristol Township", "Bristol Borough",
    "Bensalem Township", "Falls Township", "Tullytown Borough", "Levittown",
    "Langhorne Borough", "Langhorne Manor Borough", "Pennsbury Manor", "Morrisville Borough",
    "Buckingham Township", "New Hope Borough", "Solebury Township", "Wrightstown Township",
    "Hilltown Township", "Dublin Borough", "Perkasie Borough", "Quakertown Borough",
    "Richland Township", "Silverdale Borough", "Telford Borough", "West Rockhill Township"
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="space-y-8 mb-8">
          {/* Company Description */}
          <div className="md:hidden">
            <p className="text-gray-600 text-sm leading-relaxed">
              Bucks County's premier golf cart dealership serving customers across 
              the region with quality carts and expert service.
            </p>
          </div>

          {/* Mobile: Navigation and Policies side by side (50% each) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Navigation Links */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Main Policies */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-2">Policies</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/terms-conditions" className="text-gray-600 hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
                <li><Link href="/policies/return-policy" className="text-gray-600 hover:text-gray-900 text-sm">Return Policy</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
                <li><Link href="/policies/delivery-policy" className="text-gray-600 hover:text-gray-900 text-sm">Delivery Policy</Link></li>
                <li><Link href="/policies/rental-policy" className="text-gray-600 hover:text-gray-900 text-sm">Rental Policy</Link></li>
                <li><Link href="/policies/ethics-policy" className="text-gray-600 hover:text-gray-900 text-sm">Ethics Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile: Contact Info */}
          <div className="md:hidden">
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
              <p className="text-gray-600 text-sm">Email: info@bucksgolfcarts.com</p>
              <div className="text-gray-600 text-sm">
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Desktop: 6 column layout for comprehensive policies */}
          <div className="hidden md:grid md:grid-cols-6 gap-6">
            {/* Company Description */}
            <div className="md:col-span-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Berks County's premier golf cart dealership serving customers across 
                the region with quality carts and expert service.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/terms-conditions" className="text-gray-600 hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
                <li><Link href="/policies/return-policy" className="text-gray-600 hover:text-gray-900 text-sm">Return Policy</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Service Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">SERVICE POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/delivery-policy" className="text-gray-600 hover:text-gray-900 text-sm">Delivery Policy</Link></li>
                <li><Link href="/policies/rental-policy" className="text-gray-600 hover:text-gray-900 text-sm">Rental Policy</Link></li>
                <li><Link href="/policies/storage-policy" className="text-gray-600 hover:text-gray-900 text-sm">Storage Policy</Link></li>
              </ul>
            </div>

            {/* Content Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">CONTENT POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/publishing-policy" className="text-gray-600 hover:text-gray-900 text-sm">Publishing Policy</Link></li>
                <li><Link href="/policies/feedback-policy" className="text-gray-600 hover:text-gray-900 text-sm">Feedback Policy</Link></li>
                <li><Link href="/policies/corrections-policy" className="text-gray-600 hover:text-gray-900 text-sm">Corrections Policy</Link></li>
              </ul>
            </div>

            {/* Work Policies & Contact */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">WORK POLICIES</h4>
              <ul className="space-y-2 mb-4">
                <li><Link href="/policies/diversity-policy" className="text-gray-600 hover:text-gray-900 text-sm">Diversity Policy</Link></li>
                <li><Link href="/policies/ethics-policy" className="text-gray-600 hover:text-gray-900 text-sm">Ethics Policy</Link></li>
                <li><Link href="/policies/staffing-report" className="text-gray-600 hover:text-gray-900 text-sm">Staffing Report</Link></li>
              </ul>
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
                <p className="text-gray-600 text-sm">Email: info@berksgolfcarts.com</p>
                <div className="text-gray-600 text-sm">
                  <p>Mon-Fri: 9AM-5PM</p>
                  <p>Sat: 9AM-5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Towns Served - Now with Links */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Berks County Municipalities We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            {/* City */}
            <Link href="/reading-city-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Reading City Golf Carts
            </Link>
            
            {/* Popular Boroughs */}
            <Link href="/boyertown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Boyertown Borough Golf Carts
            </Link>
            <Link href="/kutztown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Kutztown Borough Golf Carts
            </Link>
            <Link href="/fleetwood-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Fleetwood Borough Golf Carts
            </Link>
            <Link href="/hamburg-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Hamburg Borough Golf Carts
            </Link>
            <Link href="/wyomissing-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Wyomissing Borough Golf Carts
            </Link>
            <Link href="/shillington-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Shillington Borough Golf Carts
            </Link>
            <Link href="/west-reading-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              West Reading Borough Golf Carts
            </Link>
            <Link href="/sinking-spring-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Sinking Spring Borough Golf Carts
            </Link>
            <Link href="/wernersville-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Wernersville Borough Golf Carts
            </Link>
            <Link href="/womelsdorf-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Womelsdorf Borough Golf Carts
            </Link>
            <Link href="/mohnton-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Mohnton Borough Golf Carts
            </Link>
            
            {/* Popular Townships */}
            <Link href="/muhlenberg-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Muhlenberg Township Golf Carts
            </Link>
            <Link href="/exeter-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Exeter Township Golf Carts
            </Link>
            <Link href="/spring-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Spring Township Golf Carts
            </Link>
            <Link href="/cumru-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Cumru Township Golf Carts
            </Link>
            <Link href="/amity-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Amity Township Golf Carts
            </Link>
            <Link href="/bern-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bern Township Golf Carts
            </Link>
            <Link href="/lower-heidelberg-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lower Heidelberg Golf Carts
            </Link>
            <Link href="/upper-bern-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Upper Bern Township Golf Carts
            </Link>
            <Link href="/oley-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Oley Township Golf Carts
            </Link>
            <Link href="/douglass-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Douglass Township Golf Carts
            </Link>
            <Link href="/colebrookdale-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Colebrookdale Golf Carts
            </Link>
            <Link href="/hereford-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Hereford Township Golf Carts
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Berks County Golf Carts. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href="/terms-of-service" className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              Berks County Golf Carts - Serving all Berks County municipalities with premium golf carts and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}