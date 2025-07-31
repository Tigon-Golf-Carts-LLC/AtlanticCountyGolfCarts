# Atlantic County Golf Carts - Replit Project Guide

## Overview
Atlantic County Golf Carts is a full-stack web application for a New Jersey-based golf cart dealership. It functions as both a marketing website and a business management platform. Key capabilities include inventory management, customer inquiry handling, rental systems, and comprehensive service information. The project aims to provide a robust online presence to drive sales and streamline operations for the dealership.

## User Preferences
Preferred communication style: Simple, everyday language.
Theme Colors: Primary theme color #0e2e55 (dark blue), Orange accent #ff6100 for buttons and highlights.
SEO Requirements: Complete sitemap.xml with all pages, towns, vehicles, images. Robots.txt allowing all bots and algorithms to crawl and index site.
Logo: Atlantic County Golf Carts logo used as primary logo and favicon across all pages.

## System Architecture

### Frontend
- **Framework**: React with TypeScript (Vite build tool)
- **Routing**: Wouter
- **UI Library**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS with CSS variables
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (Neon serverless)
- **ORM**: Drizzle ORM
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful JSON endpoints

### Database Design
- **Primary Database**: PostgreSQL
- **Schema**: `shared/schema.ts` for shared types
- **Migrations**: Drizzle Kit in `./migrations`
- **Connection**: Neon serverless PostgreSQL via `@neondatabase/serverless`

### Key Features
- **Core Pages**: Home, Inventory, Rentals, Services, About, Contact, Financing.
- **Business Features**: Inventory management, contact system, dynamic rental and financing calculators, brand showcase.
- **SEO Optimization**: Dynamic meta tags, structured data (Organization, Product, LocalBusiness, etc.), sitemap.xml, robots.txt, location-specific pages for all Atlantic County municipalities with embedded Google Maps.
- **UI/UX Decisions**: Responsive design, consistent hero section sizing, professional showroom photography for background images, standardized button styling (theme-orange and blue).

### Technical Implementations
- **Monorepo Structure**: Clear separation between frontend, backend, and shared code.
- **Build Process**: Vite for frontend, esbuild for backend.
- **Environment**: `tsx` for development, compiled JS for production.
- **Data Flow**: TanStack Query for API calls, React Hook Form for submissions, Drizzle ORM for type-safe database queries, Zod for data validation.

## External Dependencies

### UI and Styling
- Radix UI
- Tailwind CSS
- Lucide React
- shadcn/ui

### Data and State Management
- TanStack Query
- React Hook Form
- Zod
- date-fns

### Database and Backend
- Drizzle ORM
- Neon (Serverless PostgreSQL)
- Express.js
- connect-pg-simple

## Recent Changes (January 25, 2025)

### Google Tag Manager Installation (January 25, 2025)
- ✅ **Google Tag Manager Integration**: Installed GTM tracking code across entire website:
  - Added GTM script (GTM-M2N95SC6) to HTML head section for optimal loading
  - Implemented noscript fallback immediately after body tag for full coverage
  - Applied to all 70+ pages automatically through main index.html template
  - Enables comprehensive analytics tracking, conversion monitoring, and marketing automation
- ✅ **Professional Implementation**: GTM code placed in optimal positions according to Google best practices
  - Head script loads as early as possible for accurate page view tracking
  - Noscript fallback ensures tracking even with JavaScript disabled
  - No performance impact on website loading speed

### Complete Atlantic County Rebrand & SEO Optimization
- ✅ **Comprehensive Schema Markup Implementation**: 12+ schema types across ALL 70+ pages
- ✅ **Enhanced SEO Coverage**: Complete sitemap.xml with 87 URLs and optimized robots.txt
- ✅ **Complete Atlantic County Rebranding**: All references updated from Montgomery County, PA to Atlantic County, NJ
- ✅ **Critical Inventory System Fixes**: Updated all vehicle pricing and added missing vehicles
- ✅ **Technical Infrastructure**: Fixed database schema compliance and API connectivity
- ✅ **Professional Visual Consistency**: Standardized layouts and Atlantic County branding