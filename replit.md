# Sentype Landing Page

## Overview

This project is a modern, dark-themed SaaS landing page for Sentype, a financial news curation platform that provides comprehensive market intelligence at unprecedented scale. Built as a full-stack TypeScript application using React and Express, it serves as a marketing site to showcase the platform's capabilities for traders, researchers, and associates in financial institutions.

The landing page features a sleek design with orange accent colors (#ff5a00) and gray background accents (#8a90a1), presenting the product's value proposition through multiple sections including hero, features, benefits, user personas, demo information, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA (Single Page Application) mode
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom dark theme variables and shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite with custom configuration for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON communication
- **Validation**: Zod schemas for request/response validation with automatic error formatting
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM as the query builder
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for rapid development
- **Session Management**: PostgreSQL session store via connect-pg-simple

### UI Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theming**: CSS variables with dark mode support
- **Typography**: Inter font family with custom font loading
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI ensures ARIA compliance and keyboard navigation

### Build and Development
- **Development Server**: Vite dev server with HMR and error overlay
- **Production Build**: Vite for client assets, esbuild for server bundling
- **TypeScript**: Strict mode with path mapping for clean imports
- **Code Quality**: ESM modules throughout with consistent import/export patterns

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod integration for form validation

### Database and ORM
- **@neondatabase/serverless**: Neon Database serverless driver
- **drizzle-orm**: TypeScript ORM with excellent developer experience
- **drizzle-kit**: Database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

### UI and Styling
- **@radix-ui/***: Complete set of accessible UI primitives (20+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **lucide-react**: Modern icon library

### Build and Development Tools
- **vite**: Fast build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for server builds
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Validation and Utilities
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **zod-validation-error**: User-friendly validation error formatting
- **date-fns**: Date manipulation and formatting utilities

The application follows a modern full-stack architecture with clear separation between client and server code, shared TypeScript types, and a robust development workflow optimized for the Replit environment.