import { Link } from "wouter";

export default function Footer() {
  const counties = [
    "Atlantic County", "Bergen County", "Burlington County", "Camden County",
    "Cape May County", "Cumberland County", "Essex County", "Gloucester County",
    "Hudson County", "Hunterdon County", "Mercer County", "Middlesex County",
    "Monmouth County", "Morris County", "Ocean County", "Passaic County",
    "Salem County", "Somerset County", "Sussex County", "Union County",
    "Warren County"
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Description */}
          <div className="md:col-span-1">
            <p className="text-gray-600 text-sm leading-relaxed">
              Ocean County's premier golf cart dealership serving customers across 
              the region with quality carts and expert service.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
              <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
              <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
              <li><Link href="/financing" className="text-gray-600 hover:text-gray-900 text-sm">Financing</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              <li><span className="text-gray-600 text-sm">New Golf Carts</span></li>
              <li><span className="text-gray-600 text-sm">Golf Cart Rentals</span></li>
              <li><span className="text-gray-600 text-sm">Service & Repair</span></li>
              <li><span className="text-gray-600 text-sm">Parts & Accessories</span></li>
              <li><span className="text-gray-600 text-sm">Financing Options</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
              <p className="text-gray-600 text-sm">Email: info@njgolfcarts.com</p>
              <div className="text-gray-600 text-sm">
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Counties Served */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4 text-center">
            {counties.map((county, index) => (
              <div key={index} className="text-gray-600 text-sm">
                {county}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Ocean County Golf Carts. All rights reserved. | 
              <Link href="/privacy" className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              Ocean County Golf Carts - Serving multiple counties with premium golf carts and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}