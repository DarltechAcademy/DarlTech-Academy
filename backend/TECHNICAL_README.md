# DarlTech Academy LMS - Technical Architecture & Developer Guide

This document is intended for backend developers, DevOps engineers, and technical stakeholders contributing to the DarlTech Academy backend.

## 1. System Overview

DarlTech Academy is a monolithic, RESTful backend Node.js application built using the Express web framework. It serves as the core data layer and business logic engine for the Learning Management System (LMS), handling user authentication, course content delivery, and RBAC (Role-Based Access Control).

## 2. Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (NoSQL)
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs
- **Validation:** express-validator
- **File Uploads:** Multer (Local disk storage)
- **API Documentation:** Swagger UI (`swagger-jsdoc`, `swagger-ui-express`)

## 3. Architectural Pattern

The application follows a **Layered MVC (Model-View-Controller)** pattern combined with an interceptor pattern for middleware routing.

```text
HTTP Request 
    │
    ▼
[ Express Router ] ──► (Validation & Auth Middleware)
    │
    ▼
[ Controllers ] ──► (Business Logic, Request Parsing)
    │
    ▼
[ Mongoose Models ] ──► (Data Schema, Virtuals, Pre-Save Hooks)
    │
    ▼
[ MongoDB Database ]
```

### Directory Segregation
- **`config/`**: Environment initialization, database connection logic, and Swagger definitions.
- **`controllers/`**: Request handlers mapping HTTP input to standard responses. Contains zero database definition logic.
- **`middleware/`**: Cross-cutting concerns such as JWT validation (`authMiddleware`), role verification (`roleMiddleware`), payload validation, and global error handling.
- **`models/`**: Mongoose schemas enforcing strict physical data structures. Utilizes virtuals to establish pseudo-relational mappings between NoSQL documents without duplicating data.
- **`routes/`**: Express Router definitions mapping endpoints (`/api/...`) to their respective controller functions.

## 4. Entity-Relationship & Database Schema

The database relies heavily on document references (`ObjectId`) and Mongoose **Virtuals** to maintain relational integrity in a NoSQL environment.

### Core Entities (Sprint 1 & 2):

1. **User**
   - Fields: `name`, `email`, password (hashed), `role`, `status`
   - Pre-save hooks handle automatic password hashing using `bcryptjs` with a salt round of 10.

2. **Course**
   - Fields: `title`, `description`, `category` (strict Enum), `price`, `level`, `status`
   - Relations: 
     - `tutor` (Reference to `User` model)
     - `modules` (Virtual field, dynamically querying the `Module` collection)

3. **Module**
   - Fields: `title`, `order`
   - Relations:
     - `course` (Reference to `Course` model)
     - `lessons` (Virtual field, querying the `Lesson` collection)

4. **Lesson**
   - Fields: `title`, `content` (Markdown/HTML), `videoUrl`, `resources` (Array of objects), `order`
   - Relations:
     - `module` (Reference to `Module` model)

5. **Enrollment (Sprint 3)**
   - Fields: `status` ('Active', 'Completed', 'Cancelled'), `progress`
   - Relations: `user` (Ref to User), `course` (Ref to Course)
   - Indexes: Compound Unique Index on `{ user: 1, course: 1 }` to prevent double-enrollment.

## 5. Security Architecture

### Authentication Flow
- **State:** Stateless APIs. No session objects are stored on the server.
- **Token:** JWTs govern access. Issued upon successful login (`/api/auth/login`) or registration.
- **Lifespan:** Configured via `generateToken` utility (standard 30d).

### Role-Based Access Control (RBAC) Matrices
Strict endpoint-level authorization enforced by the `authorize()` middleware in `/src/middleware/roleMiddleware.js`.

| Role | Permissions | Note |
|------|-------------|------|
| **Student** | Access to published courses **IF ENROLLED**. | Cannot view lesson content without an active `Enrollment` document. |
| **Tutor** | Read, Create, Update, Delete within their domain. | Tutors are restricted to modifying **only** the courses they created. |
| **Admin** | Unrestricted CRUD capabilities. | Full override privileges across the platform. |

## 6. Current State of Development

The project is being developed in Agile Sprints.

### ✅ Completed Configurations
- **Database Engine:** MongoDB connected with Mongoose driver.
- **File System:** Local `multer` storage implemented. Stores standard assets to `/uploads` with timestamp suffixes for collision avoidance.
- **Error Handling:** Centralized Express error interceptor (`errorHandler`) catching raw exceptions and Mongoose `CastError`s, formatting them into standard JSON responses.

### ✅ Sprint 1: Auth & Foundation
- `User` Schema with password encryption hooks.
- JWT Generation and Validation middleware.
- RBAC interceptors.
- Centralized Validation pipelines via `express-validator`.

### ✅ Sprint 2: Core LMS Infrastructure
- Implementation of the `Course` -> `Module` -> `Lesson` architecture.
- Full CRUD API mapping.
- Parent-Child ownership verification layers (e.g., verifying a Tutor owns the parent Course before allowing Lesson modifications).
- Multipart/form-data upload pipeline for course assets.

### ✅ Sprint 3: Enrollment & Access Models
- **Enrollment Schema:** Created strict ledger coupling Students to Courses.
- **`checkEnrollment` Middleware:** An interceptor that intercepts requests to `/api/modules/:id` and `/api/lessons/:id`. It traces the document back to its parent course and verifies the requestor is either:
  1. An Admin (Universal bypass)
  2. The Tutor who created the content
  3. A Student with an `Active` enrollment record.
- **Dashboard APIs:** Implemented `/my-enrollments` to feed the Student UI.

### 🚧 Pending (Sprints 4-6)
Future technical implementations:
- Complex aggregation pipelines for Student progress tracking.
- Database transactions (ACID) for Enrollment and Payment gateways.
- Advanced API Optimization: Rate-limiting, caching (Redis), and pagination matrices.
