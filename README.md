# ZenBit Backend - NestJS API

A modern backend application built with NestJS framework providing RESTful API for property management and user authentication.

🔗 **Live API**: [https://zenbit-backend-nestjs-api-production.up.railway.app](https://zenbit-backend-nestjs-api-production.up.railway.app)

## 🚀 Tech Stack

### Core Framework

- **NestJS** - Progressive Node.js framework for building efficient server-side applications
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Express.js** - Fast, unopinionated, minimalist web framework (underlying NestJS)

### Database & ORM

- **TypeORM** - Object-Relational Mapping library for TypeScript and JavaScript
- **PostgreSQL** - Advanced open source relational database (production-ready setup)

### Authentication & Security

- **JWT (JSON Web Tokens)** - Secure token-based authentication
- **bcryptjs** - Password hashing library
- **Passport.js** - Authentication middleware for Node.js
- **@nestjs/passport** - NestJS wrapper for Passport strategies

### Validation & Configuration

- **class-validator** - Decorator-based validation library
- **class-transformer** - Transform plain objects to class instances
- **@nestjs/config** - Configuration module for environment variables

### Development & Deployment

- **Railway** - Modern deployment platform for backend hosting
- **CORS** - Cross-Origin Resource Sharing configuration
- **ESLint & Prettier** - Code quality and formatting tools

## 📁 Project Structure

```

backend/
├── src/
│   ├── auth/                 # Authentication module
│   │   ├── dto/              # Data Transfer Objects
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── users/                # User management module
│   │   ├── entities/         # User entity definition
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.module.ts
│   ├── properties/           # Property management module
│   │   ├── dto/              # Property DTOs
│   │   ├── entities/         # Property entity
│   │   ├── properties.controller.ts
│   │   ├── properties.service.ts
│   │   └── properties.module.ts
│   ├── app.controller.ts     # Root application controller
│   ├── app.module.ts         # Root application module
│   ├── app.service.ts        # Root application service
│   └── main.ts               # Application entry point
├── public/
│   └── images/               # Static property images
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Properties  
- `GET /properties` - Get all properties
- `GET /properties/:id` - Get property by ID

### Static Files
- `GET /images/:filename` - Serve property images

## ⚙️ Key Features

### 1. **JWT Authentication System**
- Secure user registration and login
- Password hashing with bcryptjs
- Token-based session management
- Protected routes with guards

### 2. **Property Management**
- RESTful CRUD operations
- Property entities with comprehensive data model
- Image serving for property photos
- Structured data with validation

### 3. **Static File Serving**
- Optimized WebP image format
- Direct file serving from `/public/images/`
- CORS-enabled for frontend integration

### 4. **Environment Configuration**
- Centralized config management
- Railway deployment optimization
- Development and production environments

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (optional - uses Railway DB in production)

### Installation & Running

1. **Clone the repository**
   
```bash
git clone https://github.com/MaksymChukhrai/zenbit-backend-NestJS-API-.git
cd zenbit-backend-NestJS-API-

```
2. **Install dependencies**

```bash
npm install
```
3. **Environment setup**

```bash
# Create .env file with following variables:
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h
PORT=3000
NODE_ENV=development

```

4. **Run the application**

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run start:prod

# Build for production
npm run build

```

The API will be available at `http://localhost:3000`

**🌐 Deployment**  

The application is deployed on Railway platform:

- Automatic deployments from **main** branch  
- PostgreSQL database included  
- Static file serving configured  
- CORS enabled for frontend domain  

**🔧 Configuration**  

**CORS Setup**  

Configured to allow requests from:  
- `localhost:3000` (development)  
- `zenbit-frontend-react.vercel.app` (production)  
- All Vercel preview deployments  

**Static Assets**  
Images served from `/public/images/` directory with proper MIME types and caching headers.  

**📦 Dependencies Highlights**

```JSON

{
  "@nestjs/core": "^10.0.0",
  "@nestjs/typeorm": "^10.0.0",
  "@nestjs/jwt": "^10.0.0",
  "@nestjs/passport": "^10.0.0",
  "typeorm": "^0.3.0",
  "pg": "^8.8.0",
  "bcryptjs": "^2.4.3",
  "class-validator": "^0.14.0",
  "passport-jwt": "^4.0.0"
}

```
**🚀 Production Features**

**Railway hosting** with automatic SSL  
**PostgreSQL database** with connection pooling  
**Static file CDN** for optimized image delivery  
**Environment-based** configuration  
**CORS security** with domain whitelisting  
**Request validation** with class-validator decorators  

---

**Author:** Maksym Chukhrai  
**Framework:** NestJS v10  
**Database:** PostgreSQL  
**Hosting:** Railway Platform  

Jump [**to frontend repo**](https://github.com/MaksymChukhrai/zenbit-frontend-react)
