# DarlTech Academy - Backend API

The backend for DarlTech Academy, a web-based Learning Management System (LMS) providing structured tech education. It is built using Node.js, Express, and MongoDB, handling role-based authentication, courses, and platform operations.

---

## 🚀 Sprint 1: Project Setup & Authentication
This sprint lays the foundation for a secure, role-based backend architecture. All scaffolding, configuration, and user authentication mechanisms are complete.

### Key Features Implemented:
*   **Layered MVC Architecture:** Organized structure segregating `controllers`, `models`, `routes`, `middleware`, and `utils`.
*   **Mongoose Integration:** `src/config/db.js` is set up to seamlessly connect with a MongoDB database URL provided via `.env`.
*   **User Schema Setup:** `src/models/User.js` enforces fields for `name`, `email`, `password`, `role` (`Student`, `Tutor`, `Admin`), and encrypts passwords automatically using `bcryptjs` before they save.
*   **Authentication Flow (JWT):** Registration and login endpoints correctly validate credentials and construct a secure JSON Web Token referencing the authorized user ID. 
*   **Role-Based Access Control (RBAC):** Dedicated middlewares (`roleMiddleware`, `authMiddleware`) capable of rejecting invalid or tampered tokens, and explicitly banning user roles from accessing improper endpoints.
*   **Advanced Data Validation:** Robust request checks via `express-validator` are applied on login and registration, stopping malformed inputs before they hit the controllers.
*   **Centralized Error Handling:** Global error catches convert unhandled exceptions, Mongoose CastErrors, and 404 routes into clear, predictable JSON structures.
*   **Swagger API Documentation:** Auto-generated endpoints mapping for easier frontend interaction!

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

1.  Find the route you want to interact with (e.g. `POST /api/auth/register`).
2.  Expand it and press **"Try it out"**.
3.  Fill in the Request Body JSON.
4.  Hit Execute.
5.  If testing Protected/Private routes (like Profile), click the green **Authorize** lock icon at the top of the Swagger page, and paste your JWT!

---

## 📂 Project Structure Map

```text
/backend
├── .env                  # Environment Variables 
├── .gitignore            # Ignores Node modules and Secure .env files
├── index.js              # Express app entry point
├── package.json          # Node Dependencies & Execution scripts
└── src/                  # The core application logic
    ├── config/           # Setup files (Database, Swagger Definitions)
    ├── controllers/      # Functions that execute the route's heavy lifting
    ├── middleware/       # Custom Express interceptors for Auth, Roles, Validation, Errors
    ├── models/           # Mongoose Database Schemas
    ├── routes/           # Mapped API endpoints connected to Controllers
    └── utils/            # Shared helper functions (Token Generator)
```
