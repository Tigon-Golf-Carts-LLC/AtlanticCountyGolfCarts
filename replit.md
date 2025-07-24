# Berks County Golf Carts - Replit Project Guide

## Overview

Berks County Golf Carts is a full-stack web application for a Pennsylvania-based golf cart dealership. The application serves as both a marketing website and a business management platform, featuring inventory management, customer inquiries, rental systems, and comprehensive service information.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme Colors: Primary theme color #0e2e55 (dark blue), Orange accent #ff6100 for buttons and highlights.
SEO Requirements: Complete sitemap.xml with all pages, towns, vehicles, images. Robots.txt allowing all bots and algorithms to crawl and index site.
Logo: Berks County Golf Carts logo (Berks County Golf Carts (3)_1753284044185.png) used as primary logo and favicon across all pages.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful endpoints with JSON responses

### Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Managed through Drizzle Kit in `./migrations` directory
- **Connection**: Uses Neon serverless PostgreSQL via `@neondatabase/serverless`

## Key Components

### Core Pages
1. **Home** (`/`) - Landing page with featured inventory and company overview
2. **Inventory** (`/inventory`) - Golf cart listings with filtering capabilities
3. **Rentals** (`/rentals`) - Rental packages and pricing information
4. **Services** (`/services`) - Service offerings and maintenance information
5. **About** (`/about`) - Company history and team information
6. **Contact** (`/contact`) - Contact forms and location details
7. **Financing** (`/financing`) - Financing options and calculators

### Shared Components
- **Navigation** - Responsive header with mobile menu
- **Footer** - Company information and quick links
- **SEO Head** - Dynamic meta tags and structured data
- **UI Components** - Comprehensive set of reusable components from shadcn/ui
- **useScrollToTop Hook** - Global hook for automatic scroll-to-top on page navigation

### Business Features
- **Inventory Management** - Display and categorization of golf carts
- **Contact System** - Lead capture and customer inquiry management
- **Rental Calculator** - Dynamic pricing calculation for different rental periods
- **Financing Calculator** - Payment estimation tools
- **Brand Showcase** - Featured manufacturer information
- **Global Scroll-to-Top** - Automatic page scroll to top on route changes across all devices
- **SEO Optimization** - Complete sitemap.xml with all pages, vehicle images, and town pages; robots.txt allowing full crawling

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend uses TanStack Query for API calls
2. **Data Fetching**: Server-side data fetching with caching strategies
3. **Form Submissions**: React Hook Form handles form state, Zod validates data
4. **Error Handling**: Centralized error handling with toast notifications

### Database Operations
1. **Schema Definition**: Shared types between frontend and backend
2. **Query Building**: Drizzle ORM provides type-safe database queries
3. **Data Validation**: Zod schemas ensure data integrity
4. **Migrations**: Automated schema changes through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Data and State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation
- **date-fns**: Date manipulation utilities

### Database and Backend
- **Drizzle ORM**: Type-safe SQL query builder
- **Neon**: Serverless PostgreSQL database
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Assets**: Static assets served from `attached_assets` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reloading
- **Production**: Compiled JavaScript with Node.js runtime
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### File Structure
```
├── client/          # Frontend React application
│   └── public/      # Static files (sitemap.xml, robots.txt)
├── server/          # Backend Express application
├── shared/          # Shared types and schemas
├── attached_assets/ # Static assets and components
├── migrations/      # Database migration files
└── dist/           # Build output directory
```

### SEO Implementation
- **sitemap.xml**: Comprehensive XML sitemap including all 8 main pages, 2 brand pages, 23 vehicle detail pages, and all 56 Berks County town pages (25 boroughs + 31 townships) with proper priority settings and image metadata
- **robots.txt**: Configured to allow all search engines and crawlers full access with 1-second crawl delay and sitemap reference
- **Schema Markup**: Complete structured data implementation across all page types:
  - OrganizationSchema component for business information with LocalBusiness markup
  - VehicleSchema component for individual golf cart product pages with Product schema
  - Updated SEOHead component with enhanced meta tags, Open Graph, and Twitter Card support
  - Location-specific schema for all 56 Berks County town pages
- **Town Pages**: Complete coverage of all Berks County municipalities with embedded Google Maps, optimized for local search intent

## Recent Changes (January 24, 2025)

### Complete Montgomery County Rebranding (January 24, 2025 - Evening)
- ✅ **Domain Migration**: Updated all references from berksgolfcarts.com to montcogolfcarts.com
- ✅ **Geographic Rebranding**: Changed all location references from Berks County, PA to Montgomery County, PA
- ✅ **Homepage Updates**: Complete Montgomery County branding with updated hero section, company description, and service areas
- ✅ **Services Page Updates**: Updated to "Montgomery County Golf Cart Services" with local service area listings
- ✅ **About Page Rebranding**: Complete rewrite focusing on Montgomery County heritage and 62 municipalities served
- ✅ **Contact Page Updates**: Updated all contact information to info@montcogolfcarts.com and Montgomery County branding
- ✅ **Town Pages Creation**: Built comprehensive SEO-optimized pages for 16+ major Montgomery County communities:
  - King of Prussia, Lansdale, Norristown, Pottstown, Abington, Ambler, Ardmore, Audubon
  - Blue Bell, Bridgeport, Conshohocken, Fort Washington, North Wales, Plymouth Meeting
  - Royersford, Willow Grove with individual routing and local SEO optimization
- ✅ **Phone Number Update**: Changed main contact from (215) 855-6400 to (267) 645-6271 for Montgomery County
- ✅ **SEO Optimization**: Updated all meta tags, descriptions, and canonical URLs for montcogolfcarts.com domain
- ✅ **Clean Deployment**: Resolved all routing conflicts and compilation errors for seamless Montgomery County operation
- ✅ **Cleanup of Old Files**: Removed all unused Berks County pages, components, and data files:
  - Deleted client/src/data/berksCountyMunicipalities.ts
  - Deleted client/src/components/BerksCountyMunicipalityPage.tsx  
  - Deleted client/src/pages/towns/NewBerksCountyTownPages.tsx
  - Deleted client/src/pages/rentals/BerksCountyMunicipalityRentals.tsx
  - Removed duplicate Montgomery County town page files
  - Updated sitemap.xml to replace all berksgolfcarts.com references with montcogolfcarts.com
  - Fixed remaining Berks County references in DenagoPage.tsx
- ✅ **Homepage Municipality Section Update**: Replaced the entire "Golf Carts for Every Berks County Municipality" section with Montgomery County municipalities:
  - Updated section title and description for Montgomery County
  - Replaced all 24 old Berks County municipality links with 24 major Montgomery County communities
  - Included King of Prussia, Norristown, Lansdale, Pottstown, Abington, Conshohocken, and Main Line communities
  - Updated "About Berks County Golf Carts" section to "About Montgomery County Golf Carts"
  - Replaced embedded map from Berks County to Montgomery County
  - Updated main contact phone number from 1-844-844-6638 to (267) 645-6271
  - Changed footer text to reference "62 Montgomery County municipalities"
- ✅ **Complete Municipality List Addition**: Added comprehensive list of all 99 Montgomery County municipalities to homepage:
  - Replaced limited 24 municipality display with complete list from Abington to Zieglerville
  - Includes all major communities: King of Prussia, Norristown, Lansdale, Main Line areas (Ardmore, Bryn Athyn, Gladwyne)
  - Added smaller communities like Bala Cynwyd, Elkins Park, Lafayette Hill, Spring House, Wyncote, Wynnewood
  - Optimized grid layout for better display of 99+ municipality links
  - Each municipality link connects to its respective page for local SEO optimization
- ✅ **Complete Municipality Pages Built**: Created all missing pages for the 99 Montgomery County communities:
  - Built 37+ additional community pages for unincorporated communities and neighborhoods
  - Created MontgomeryCountyCommunityPages.tsx with dedicated pages for places like Bala Cynwyd, Elkins Park, Lafayette Hill, Spring House, Wyncote, Wynnewood, etc.
  - Added full routing support in App.tsx for all 99 communities with clean URL structure
  - Includes both official municipalities (boroughs/townships) and unincorporated communities
  - All pages feature proper SEO optimization, local business information, and parent municipality references
  - Complete coverage from Abington to Zieglerville with working navigation
- ✅ **Location-Specific Google Maps Integration**: Updated all municipality and community pages with proper embedded Google Maps:
  - Created googleMaps utility function for generating location-specific embed URLs
  - Updated MontgomeryCountyMunicipalityPage component to show correct location maps for each municipality
  - Updated MontgomeryCountyCommunityPages component to show specific community locations
  - Each page now displays accurate Google Maps for that specific location rather than generic Montgomery County map
  - All 99 community pages now have properly targeted geographic information
- ✅ **Updated Hero Background Images**: Replaced hero background image across all main pages with new Montgomery County Golf Carts showroom image:
  - Updated HomePage hero section with new modern golf cart dealership interior image  
  - Updated ShowroomPage hero section with same professional showroom background
  - Updated NewAboutPage hero import and background to use new dealership image
  - Updated NewServicesPage hero section with new background image
  - All hero sections now feature consistent, professional Montgomery County Golf Carts branding

## Recent Changes (January 24, 2025)

### Mobile Responsiveness & Thank You Page Updates (January 24, 2025)
- ✅ **Mobile Homepage Optimization**: Fixed "About Berks County Golf Carts" section mobile sizing
  - Responsive text sizing: 2xl mobile, 3xl tablet, 4xl desktop for headings
  - Optimized spacing and layout for mobile devices
  - Statistics section (500+ customers, 15+ years) properly sized for mobile
  - Button responsiveness improved (full width mobile, auto desktop)
- ✅ **Google Maps Mobile Fix**: Fixed embedded map overflow issues on mobile
  - Removed fixed dimensions that caused horizontal scrolling
  - Added responsive classes: w-full with h-64 mobile, h-80 tablet, h-96 desktop
  - Map now properly fits all screen sizes without overflow
- ✅ **Contact Information Corrections**: Updated homepage contact section
  - Removed incorrect Ocean County locations
  - Added proper TIGON Golf Carts Hatfield and Poconos locations
  - Updated phone numbers and addresses to match business locations
  - Color scheme updated to use theme-orange branding
- ✅ **Thank You Page Complete Rebranding**: Updated /thank-you page for Berks County
  - Changed all Ocean County references to Berks County Golf Carts
  - Added TIGON Golf Carts branding and team references
  - Updated SEO meta tags and descriptions for Berks County
  - Added service area information highlighting 72 Berks County municipalities
  - Included both TIGON locations (Hatfield and Poconos) with contact details
  - Updated navigation links to relevant services (removed financing, added services)
- ✅ **Contact Form Verification**: Confirmed contact form functionality
  - API endpoint working properly with successful submissions
  - Form validates and processes data correctly
  - Successful redirect to /thank-you page after submission
  - Backend logging contact information for business follow-up

## Recent Changes (January 23, 2025)

### Comprehensive Policy Pages Implementation (January 23, 2025 - Night)
- ✅ **Complete Policy Page Structure Created**: Built 11 comprehensive policy pages organized by categories:
  - **POLICIES**: Terms & Conditions, Return Policy, Privacy Policy
  - **SERVICE POLICIES**: Delivery Policy, Rental Policy, Storage Policy  
  - **CONTENT POLICIES**: Publishing Policy, Feedback Policy, Corrections Policy
  - **WORK POLICIES**: Diversity Policy, Ethics Policy, Staffing Report
- ✅ **Professional Content Development**: Each policy page includes:
  - Comprehensive coverage of business practices and procedures
  - SEO-optimized titles, descriptions, and meta tags
  - Professional layout with consistent branding and navigation
  - TIGON Golf Carts contact information and locations
  - Legal compliance and industry best practices
- ✅ **Complete Routing Integration**: Added all 11 policy routes to App.tsx with /policies/[policy-name] URL structure
- ✅ **Footer Navigation Enhancement**: Updated Footer component with organized policy links:
  - Desktop: 6-column layout with categorized policy sections
  - Mobile: Responsive design with key policy links
  - Clear categorization: POLICIES, SERVICE POLICIES, CONTENT POLICIES, WORK POLICIES

### Complete Municipality Rental Pages Implementation (January 23, 2025 - Evening)
- ✅ **Comprehensive Rental Sub-Pages Created**: Built 72 individual rental pages for all Berks County municipalities as sub-pages
- ✅ **SEO-Optimized Templates**: Created MunicipalityRentalPage component with location-specific SEO optimization:
  - Location-specific titles, descriptions, and keywords for each municipality
  - Individual pricing structures for 4-seater, 6-seater, and utility golf carts
  - Local delivery messaging and service area coverage
- ✅ **Complete Routing System**: Added all 72 rental routes to App.tsx with /[municipality]/rentals URL structure
- ✅ **Business Information Integration**: All rental pages include TIGON Golf Carts locations and consistent contact information
- ✅ **Enhanced User Experience**: Location-aware content, local knowledge sections, and Pennsylvania Dutch Country references

### Complete Rebranding: Bucks County → Berks County
- ✅ **Domain Migration**: Updated all references from bucksgolfcarts.com to berksgolfcarts.com
- ✅ **Geographic Rebranding**: Changed all location references from Bucks County, PA to Berks County, PA
- ✅ **Component Updates**: 
  - Renamed BucksCountyTownPage to BerksCountyTownPage with proper Berks County municipalities
  - Updated OrganizationSchema with new domain, social media URLs, and Berks County location data
  - Updated VehicleSchema and SEOHead components for new branding
- ✅ **Municipality Data**: Replaced 56 Bucks County municipalities with actual Berks County municipalities:
  - 19 Cities/Boroughs: Reading, Boyertown, Fleetwood, Hamburg, Kutztown, etc.
  - 33 Townships: Alsace, Bern, Bethel, Brecknock, Caernarvon, etc.
- ✅ **SEO & Content Updates**:
  - Updated HomePage hero section and titles
  - Updated NewAboutPage service areas and municipality listings
  - Updated sitemap.xml with berksgolfcarts.com domain
  - Updated robots.txt with new company information
  - Updated legal pages (Terms of Service, Privacy Policy)
- ✅ **Routing System**: Updated App.tsx with all new Berks County town page routes
- ✅ **Municipality Pages Rebuild**: Completely replaced old location system with 72 new Berks County municipalities:
  - 1 City: Reading
  - 27 Boroughs: Bally, Bechtelsville, Bernville, Birdsboro, Boyertown, Centerport, Fleetwood, Hamburg, Kenhorst, Kutztown, Laureldale, Leesport, Lenhartsville, Lyons, Mohnton, Mount Penn, New Morgan, Robesonia, St. Lawrence, Shillington, Shoemakersville, Sinking Spring, Topton, Wernersville, West Reading, Womelsdorf, Wyomissing
  - 44 Townships: Albany, Alsace, Amity, Bern, Bethel, Brecknock, Caernarvon, Centre, Colebrookdale, Cumru, District, Douglass, Earl, Exeter, Greenwich, Heidelberg, Hereford, Jefferson, Longswamp, Lower Alsace, Lower Heidelberg, Maidencreek, Marion, Maxatawny, Muhlenberg, North Heidelberg, Oley, Ontelaunee, Penn, Perry, Pike, Richmond, Robeson, Rockland, Ruscombmanor, South Heidelberg, Spring, Tilden, Tulpehocken, Union, Upper Bern, Upper Tulpehocken, Washington, Windsor
- ✅ **Municipality Page Features**: Each page includes Google Maps embed, business hours, contact info, and SEO optimization
- ✅ **Updated Sitemap**: Complete sitemap.xml with all 72 new municipality pages with proper SEO structure
- ✅ **Home Page & Footer Updates**: Updated home page locations section and footer with new Berks County municipalities and proper links to all 72 location pages
- ✅ **Logo & Favicon Replacement**: Replaced all logo and favicon references with new Berks County Golf Carts image across all pages including main navigation, SEOHead component, index.html, and sitemap.xml
- ✅ **Hero Background Images Updated**: Replaced all hero section background images across the entire website with new modern golf cart dealership photograph (a-photograph-of-a-modern-golf-cart-deale_OO82J1mtQEyokt1GsD08YQ_vk-WDImPSSq1axdn5SN7Mw_1753301595303.png):
  - Updated HomePage, AboutPage, ServicesPage, ShowroomPage hero sections
  - Updated all 25+ vehicle detail pages (both Denago and Evolution series)
  - Enhanced visual consistency and professional appearance throughout the site

The application follows a monorepo structure with clear separation between frontend, backend, and shared code. The build system is optimized for both development and production deployment, with TypeScript providing type safety across the entire stack.