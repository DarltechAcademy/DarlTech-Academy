# DarlTech Academy - Frontend Data Collection Guide

This guide outlines exactly which fields the frontend application needs to collect from users to ensure the API functions correctly. Use this to build your forms, validation, and state management.

---

## 🔐 User Authentication

### 1. Registration (`POST /api/auth/register`)
**Purpose:** Creating a new user account.
| Dashboard Field | API Key | Type | Requirement | Notes |
|-----------------|---------|------|-------------|-------|
| Full Name | `name` | String | **Required** | At least 1 character |
| Email Address | `email` | String | **Required** | Must be a valid format |
| Password | `password` | String | **Required** | **Min 6 characters** |
| User Role | `role` | String | Optional | Options: `Student`, `Tutor`, `Admin` (default: `Student`) |

### 2. Login (`POST /api/auth/login`)
**Purpose:** Authenticating an existing user.
| Dashboard Field | API Key | Type | Requirement |
|-----------------|---------|------|-------------|
| Email Address | `email` | String | **Required** |
| Password | `password` | String | **Required** |

---

## 📚 Course & Content Management

### 3. Course Creation (`POST /api/courses`)
**Purpose:** Adding a new course to the platform.
| Dashboard Field | API Key | Type | Requirement | Notes |
|-----------------|---------|------|-------------|-------|
| Title | `title` | String | **Required** | Max 100 characters |
| Description | `description` | String | **Required** | Long-form text |
| Category | `category` | String | **Required** | **Dropdown Select only** (see specific list below) |
| Price | `price` | Number | Optional | Defaults to 0 (free) |
| Difficulty Level | `level` | String | Optional | Dropdown: `Beginner`, `Intermediate`, `Advanced` |
| Course Status | `status` | String | Optional | Options: `Draft`, `Published` (default: `Draft`) |

**Valid Categories (Case Sensitive):**
- `UI/UX Design`
- `Cybersecurity`
- `Frontend Development`
- `Backend Development`
- `Graphic Design`

### 4. Module Creation (`POST /api/modules`)
**Purpose:** Adding a new chapter to a course.
| Dashboard Field | API Key | Type | Requirement | Notes |
|-----------------|---------|------|-------------|-------|
| Module Title | `title` | String | **Required** | |
| Course Reference | `course` | String | **Required** | The database `_id` of the parent course |
| Display Order | `order` | Number | Optional | Used for sorting modules (1, 2, 3...) |

### 5. Lesson Creation (`POST /api/lessons`)
**Purpose:** Adding an individual lesson to a module.
| Dashboard Field | API Key | Type | Requirement | Notes |
|-----------------|---------|------|-------------|-------|
| Lesson Title | `title` | String | **Required** | |
| Module Reference | `module` | String | **Required** | The database `_id` of the parent module |
| Lesson Content | `content` | String | Optional | Markdown or HTML string |
| Video Link | `videoUrl` | String | Optional | External URL (YouTube, etc.) |
| Resources | `resources` | Array | Optional | An array of objects: `[ { "name": "...", "url": "..." } ]` |
| Display Order | `order` | Number | Optional | Used for sorting lessons (1, 2, 3...) |

---

## 📂 File Handling

### 6. File Upload (`POST /api/upload`)
**Purpose:** Uploading attachments or thumbnails.
| Input Element | API Key | Accepted Formats |
|---------------|---------|------------------|
| `type="file"` | `file` | `jpg`, `jpeg`, `png`, `pdf`, `mp4` |

**Recommended Flow:**
1.  Frontend uploads the file first.
2.  Backend returns a relative URL (e.g., `/uploads/image-123456.png`).
3.  Frontend saves that URL into the relevant Course or Lesson field.

---

## 🚦 Error Handling & Interception

### 1. HTTP 401 Unauthorized
If the API returns a `401` error, the user's session has likely expired.
- **Action:** Clear the token from local storage and redirect the user back to `/login`.

### 2. HTTP 422 Unprocessable Entity
This occurs when local frontend validation doesn't match backend requirements.
- **Action:** Read the response body for a detailed array of which fields failed.
