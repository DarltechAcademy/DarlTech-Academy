# DarlTech Academy - Backend API

The backend for DarlTech Academy, a web-based Learning Management System (LMS) providing structured tech education. It is built using Node.js, Express, and MongoDB, handling role-based authentication, courses, and platform operations.

---

## 🚀 Sprint 1: Project Setup & Authentication [Completed]
This sprint laid the foundation for a secure, role-based backend architecture.

### Key Features Implemented:
*   **Layered MVC Architecture:** Organized structure segregating `controllers`, `models`, `routes`, `middleware`, and `utils`.
*   **Authentication Flow (JWT):** Registration, login, and profile endpoints.
*   **Role-Based Access Control (RBAC):** Implementation of `authMiddleware` and `roleMiddleware`.
*   **Swagger Documentation:** Interactive API docs at `/api-docs`.

---

## 📚 Sprint 2: Course Management [In Progress]
Focusing on the core Learning Management functionality.

### Available Course Categories:
`UI/UX Design` · `Cybersecurity` · `Frontend Development` · `Backend Development` · `Graphic Design`

### Key Features Implemented:
*   **Course Model:** Schema with title, description, category (enum), price, level, status, and tutor reference.
*   **Module Model:** Hierarchical structure linking modules to courses with ordering support.
*   **Lesson Model:** Rich content support including text, video URLs, and downloadable resource arrays.
*   **Full CRUD APIs:** Create, Read, Update, Delete endpoints for Courses, Modules, and Lessons.
*   **Ownership Protection:** Only the tutor who created a course (or an Admin) can modify/delete it and its content.
*   **Swagger Documentation:** All new endpoints documented with schemas, query params, and auth requirements.
*   [ ] **File Uploads:** (Next) Handling for thumbnails and course materials.

---

## 🛠️ Environment Variables Configuration (Important)
To get the backend working locally, you'll need to define your own `.env` values.

Create or verify the `.env` file at the root of `backend/` and set:
```env
PORT=5001
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/darltech
```
> **Action Required:** Make sure you update the `MONGO_URI` to point to an active MongoDB cluster!

---

## 🏃 Running the Application

Make sure your terminal is inside the `/backend` directory:
```bash
# Install dependencies
npm install

# Run the development server (automatically restarts on changes)
npm run dev

# Or run the production server
npm start
```
The console will log `MongoDB Connected` when your database connects properly!

---

## 📖 Swagger API Documentation
Testing endpoints is interactive! Once the server starts on `PORT=5001`, navigate to your browser:

👉 **[http://localhost:5001/api-docs](http://localhost:5001/api-docs)**

### API Endpoint Summary:
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and get JWT |
| GET | `/api/auth/profile` | Private | Get logged-in user profile |
| GET | `/api/courses` | Public | List all courses (filterable) |
| GET | `/api/courses/:id` | Public | Get course with modules & lessons |
| POST | `/api/courses` | Admin/Tutor | Create a new course |
| PUT | `/api/courses/:id` | Owner/Admin | Update a course |
| DELETE | `/api/courses/:id` | Owner/Admin | Delete a course |
| GET | `/api/modules?course=ID` | Public | List modules for a course |
| POST | `/api/modules` | Admin/Tutor | Create a module |
| PUT | `/api/modules/:id` | Owner/Admin | Update a module |
| DELETE | `/api/modules/:id` | Owner/Admin | Delete a module |
| GET | `/api/lessons?module=ID` | Public | List lessons for a module |
| POST | `/api/lessons` | Admin/Tutor | Create a lesson |
| PUT | `/api/lessons/:id` | Owner/Admin | Update a lesson |
| DELETE | `/api/lessons/:id` | Owner/Admin | Delete a lesson |

1.  Find the route you want to interact with.
2.  Expand it and press **"Try it out"**.
3.  Fill in the Request Body JSON.
4.  Hit Execute.
5.  For protected routes, click the green **Authorize** lock icon and paste your JWT token!

---

## 📂 Project Structure Map

```text
/backend
├── .env                          # Environment Variables 
├── .gitignore                    # Ignores Node modules and .env files
├── index.js                      # Express app entry point
├── package.json                  # Node Dependencies & Execution scripts
└── src/
    ├── config/
    │   ├── db.js                 # MongoDB connection
    │   └── swagger.js            # Swagger/OpenAPI configuration
    ├── controllers/
    │   ├── authController.js     # Register, Login, Profile logic
    │   ├── courseController.js   # Course CRUD logic
    │   ├── moduleController.js   # Module CRUD logic
    │   └── lessonController.js   # Lesson CRUD logic
    ├── middleware/
    │   ├── authMiddleware.js     # JWT verification
    │   ├── roleMiddleware.js     # Role-based access control
    │   ├── validationMiddleware.js # Express-validator handler
    │   └── errorMiddleware.js    # Global error handler
    ├── models/
    │   ├── User.js               # User schema (Admin, Tutor, Student)
    │   ├── Course.js             # Course schema with categories
    │   ├── Module.js             # Module schema (belongs to Course)
    │   └── Lesson.js             # Lesson schema (belongs to Module)
    ├── routes/
    │   ├── authRoutes.js         # /api/auth endpoints
    │   ├── courseRoutes.js       # /api/courses endpoints
    │   ├── moduleRoutes.js       # /api/modules endpoints
    │   └── lessonRoutes.js       # /api/lessons endpoints
    └── utils/
        └── generateToken.js      # JWT token generator
```
