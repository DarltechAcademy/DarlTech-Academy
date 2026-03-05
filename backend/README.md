# DarlTech Academy - Backend API

This is the backend (server-side) of **DarlTech Academy**, an online learning platform where students can enroll in tech courses, learn through structured modules and lessons, and grow their skills.

Built with **Node.js**, **Express**, and **MongoDB**.

---

## 🧠 What Does This Backend Do?

Think of this backend as the **brain** behind the DarlTech Academy website. It handles:

- **Who can sign up and log in** (Authentication)
- **Who can do what** — Students can browse courses, but only Tutors and Admins can create or edit them (Authorization)
- **Storing and serving course content** — Courses are broken down into Modules (chapters), and each Module contains Lessons (individual topics)

---

## 🚀 Sprint 1: Project Setup & Authentication ✅

This was the first phase of development. We built the foundation:

### What we did:
1. **Set up the project structure** — Organized the code into clean folders so it's easy to navigate and scale.
2. **Created a User system** — Users can sign up with a name, email, and password. Passwords are encrypted (hashed) before being stored, so even the database admin can't see them.
3. **Added three user roles:**
   - 🎓 **Student** — Can browse and enroll in courses
   - 👨‍🏫 **Tutor** — Can create and manage their own courses
   - 🔑 **Admin** — Has full control over everything
4. **Built Login & Registration APIs** — When a user logs in, they receive a **JWT token** (a secure pass) that proves their identity for future requests.
5. **Protected routes** — Certain actions (like viewing your profile) require a valid token. Without it, you get blocked.
6. **Added Swagger docs** — An interactive page where you can test every API endpoint directly in your browser.

---

## 📚 Sprint 2: Course Management 🔧 (Completed)

This is where the actual learning platform takes shape. We built the system that manages all course content.

### Available Course Categories:
- 🎨 UI/UX Design
- 🔒 Cybersecurity
- 💻 Frontend Development
- ⚙️ Backend Development
- 🖌️ Graphic Design

### How Course Content is Organized:

```
Course (e.g. "Frontend Development")
  └── Module (e.g. "HTML Basics")          ← A chapter/section
        └── Lesson (e.g. "Your First HTML Page")  ← An individual topic
              ├── Written content (text/notes)
              ├── Video URL (e.g. YouTube link)
              └── Downloadable resources (PDFs, files, etc.)
```

### What we built:
1. **Course Model** — Defines what a course looks like in the database: title, description, category, price, difficulty level (Beginner/Intermediate/Advanced), and whether it's a Draft or Published.
2. **Module Model** — Each course has multiple modules (think of them as chapters). Modules are ordered (Module 1, Module 2, etc.).
3. **Lesson Model** — Each module has multiple lessons. A lesson can include written text, a video link, and downloadable files.
4. **Full CRUD APIs** — "CRUD" stands for Create, Read, Update, Delete. We built all four operations for Courses, Modules, and Lessons.
5. **Ownership protection** — A Tutor can only edit or delete courses **they created**. They can't touch another Tutor's content. Admins can manage everything.
6. **Input validation** — Checks that all required fields are filled in correctly before saving anything.
7. **File Uploads** — Set up `/api/upload` to receive files and store them in the `/uploads` folder.

---

## 🛠️ How to Set Up the Project

### Step 1: Install Dependencies
Open your terminal in the `/backend` folder and run:
```bash
npm install
```

### Step 2: Create Your Environment File
Create a file called `.env` in the `backend/` folder with the following content:
```env
PORT=5001
NODE_ENV=development
JWT_SECRET=replace_this_with_any_random_secret_string
MONGO_URI=mongodb+srv://<your-username>:<your-password>@<your-cluster>.mongodb.net/darltech
```
> ⚠️ **Important:** Replace the `MONGO_URI` with your actual MongoDB Atlas connection string. Never share this file publicly.

### Step 3: Start the Server
```bash
# Development mode (auto-restarts when you make changes)
npm run dev

# Production mode
npm start
```
You'll see `MongoDB Connected` in the terminal when everything is working! 🎉

---

## 📖 Testing the API (Swagger)

Once the server is running, open your browser and go to:

👉 **[http://localhost:5001/api-docs](http://localhost:5001/api-docs)**

This opens an interactive page where you can test every endpoint. Here's how:
1. Find the endpoint you want to test (e.g. `POST /api/auth/register`)
2. Click on it to expand it
3. Click **"Try it out"**
4. Fill in the JSON body
5. Click **"Execute"**
6. For protected routes, click the 🔒 **Authorize** button at the top and paste your JWT token

### All Available Endpoints:

#### 🔐 Authentication
| Method | Endpoint | Who Can Use It | What It Does |
|--------|----------|---------------|--------------|
| POST | `/api/auth/register` | Anyone | Create a new account |
| POST | `/api/auth/login` | Anyone | Log in and get your token |
| GET | `/api/auth/profile` | Logged-in users | View your own profile |

#### 📚 Courses
| Method | Endpoint | Who Can Use It | What It Does |
|--------|----------|---------------|--------------|
| GET | `/api/courses` | Anyone | Browse all courses (can filter by category, level, etc.) |
| GET | `/api/courses/:id` | Anyone | View a single course with all its modules and lessons |
| POST | `/api/courses` | Admin / Tutor | Create a new course |
| PUT | `/api/courses/:id` | Course Owner / Admin | Edit a course |
| DELETE | `/api/courses/:id` | Course Owner / Admin | Delete a course |

#### 📦 Modules (Chapters within a Course)
| Method | Endpoint | Who Can Use It | What It Does |
|--------|----------|---------------|--------------|
| GET | `/api/modules?course=COURSE_ID` | Anyone | Get all modules for a specific course |
| GET | `/api/modules/:id` | Anyone | View a single module with its lessons |
| POST | `/api/modules` | Admin / Tutor | Add a new module to a course |
| PUT | `/api/modules/:id` | Course Owner / Admin | Edit a module |
| DELETE | `/api/modules/:id` | Course Owner / Admin | Delete a module |

#### 📝 Lessons (Topics within a Module)
| Method | Endpoint | Who Can Use It | What It Does |
|--------|----------|---------------|--------------|
| GET | `/api/lessons?module=MODULE_ID` | Anyone | Get all lessons for a specific module |
| GET | `/api/lessons/:id` | Anyone | View a single lesson |
| POST | `/api/lessons` | Admin / Tutor | Add a new lesson to a module |
| PUT | `/api/lessons/:id` | Course Owner / Admin | Edit a lesson |
| DELETE | `/api/lessons/:id` | Course Owner / Admin | Delete a lesson |

#### 📂 File Uploads
| Method | Endpoint | Who Can Use It | What It Does |
|--------|----------|---------------|--------------|
| POST | `/api/upload` | Admin / Tutor | Upload a file (Image, PDF, Video) |

---

## 📂 Project Structure

```
/backend
├── .env                          # Secret configuration (not pushed to GitHub)
├── .gitignore                    # Tells Git which files to ignore
├── index.js                      # The starting point of the application
├── package.json                  # Lists all the packages/tools we use
└── src/
    ├── config/
    │   ├── db.js                 # Connects to the MongoDB database
    │   └── swagger.js            # Sets up the API documentation page
    ├── controllers/
    │   ├── authController.js     # Handles signup, login, and profile
    │   ├── courseController.js   # Handles creating/editing/deleting courses
    │   ├── moduleController.js   # Handles creating/editing/deleting modules
    │   └── lessonController.js   # Handles creating/editing/deleting lessons
    ├── middleware/
    │   ├── authMiddleware.js     # Checks if the user is logged in (has a valid token)
    │   ├── roleMiddleware.js     # Checks if the user has the right role (Admin, Tutor, etc.)
    │   ├── validationMiddleware.js # Checks if the request data is valid
    │   └── errorMiddleware.js    # Catches errors and sends clean error messages
    ├── models/
    │   ├── User.js               # Defines what a User looks like in the database
    │   ├── Course.js             # Defines what a Course looks like
    │   ├── Module.js             # Defines what a Module looks like
    │   └── Lesson.js             # Defines what a Lesson looks like
    ├── routes/
    │   ├── authRoutes.js         # Maps URLs to auth controller functions
    │   ├── courseRoutes.js       # Maps URLs to course controller functions
    │   ├── moduleRoutes.js       # Maps URLs to module controller functions
    │   ├── lessonRoutes.js       # Maps URLs to lesson controller functions
    │   └── uploadRoutes.js       # Maps URLs to file upload handler
    └── utils/
        └── generateToken.js      # Creates JWT tokens for authenticated users
```

---

## 🤝 Contributing

This project is being developed by the **DarlTech Academy** team. Each team member works on their own branch and submits Pull Requests for review before merging into main.
