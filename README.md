# User Management System

A simple full-stack user management application with a React frontend and an Express/MongoDB backend.

## Overview

This repository contains two separate projects:

- `Backend/`: Express API server using Mongoose to manage user data in MongoDB.
- `Frontend/`: React + Vite UI that lets users add, list, and view user details.

## Repository Structure

```
Backend/
  package.json
  server.js
  APIs/
    UserAPI.js
  Models/
    UserModel.js
Frontend/
  package.json
  src/
    App.jsx
    main.jsx
    components/
      AddUser.jsx
      Footer.jsx
      Header.jsx
      Home.jsx
      RootLayout.jsx
      User.jsx
      UserList.jsx
```

---

## Backend

### `Backend/package.json`

- Defines the backend project metadata.
- Includes dependencies: `express`, `mongoose`, `cors`, `dotenv`, and `nodemon`.
- Uses ES modules via `type: "module"`.

### `Backend/server.js`

- Creates the Express server.
- Configures CORS and JSON request parsing.
- Mounts the user API under `/user-api`.
- Connects to MongoDB using `process.env.DB_URL`.
- Starts the server on `process.env.PORT`.
- Defines a global error handler for validation errors, invalid IDs, duplicate keys, and generic server errors.

### `Backend/APIs/UserAPI.js`

- Builds API routes with `express.Router()`.
- Implements user CRUD operations:
  - `POST /user-api/user`: create a new user.
  - `GET /user-api/user`: fetch all active users (`status: true`).
  - `GET /user-api/user/:id`: fetch a specific user by ID.
  - `DELETE /user-api/user/:id`: soft-delete a user by setting `status: false`.
  - `PATCH /user-api/user/:id`: reactivate a soft-deleted user by setting `status: true`.

### `Backend/Models/UserModel.js`

- Defines the `UserSchema` with validation rules:
  - `name` (required string)
  - `email` (required unique string)
  - `dateOfBirth` (required date)
  - `mobileNumber` (optional string)
  - `status` (boolean, defaults to `true`)
- Exports the `UserModel` for use in the API.

---

## Frontend

### `Frontend/package.json`

- Defines the frontend project as a Vite React app.
- Uses React 19, `react-hook-form`, `react-router`, Tailwind support, and ESLint.
- Scripts available:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
  - `npm run lint`

### `Frontend/src/main.jsx`

- Entry point for the React application.
- Imports global styles and renders the `App` component inside `root`.

### `Frontend/src/App.jsx`

- Defines client-side routes using React Router:
  - `/` → `Home`
  - `/add-user` → `AddUser`
  - `/user-list` → `UserList`
  - `/user` → `User`
- Uses `RootLayout` as the main shared layout.

### `Frontend/src/components/RootLayout.jsx`

- Provides the page frame for all routes.
- Renders `Header`, an `Outlet` for route content, and `Footer`.

### `Frontend/src/components/Header.jsx`

- Displays navigation links to Home, Add User, and User List.
- Uses `NavLink` to highlight the active route.
- Includes a small logo image.

### `Frontend/src/components/Footer.jsx`

- Simple footer indicating the end of the page.

### `Frontend/src/components/Home.jsx`

- Landing page for the application.
- Explains the app functionality and welcomes the user.

### `Frontend/src/components/AddUser.jsx`

- Presents a form to register a new user.
- Uses `react-hook-form` for form handling.
- Submits user data to `POST http://localhost:4000/user-api/user`.
- Redirects to `/user-list` after successful creation.

### `Frontend/src/components/UserList.jsx`

- Loads all active users from `GET http://localhost:4000/user-api/user`.
- Displays user cards in a responsive grid.
- Clicking a card navigates to the detailed `User` page.

### `Frontend/src/components/User.jsx`

- Shows details for a single user.
- Reads user data from router location state.
- Displays name, email, date of birth, and phone number.

---

## Setup Instructions

### Backend

1. Create a `.env` file in `Backend/` with:
   ```env
   DB_URL=<your-mongodb-connection-string>
   PORT=4000
   ```
2. Install dependencies:
   ```bash
   cd Backend
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd Frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Notes

- The frontend expects the backend API to be available at `http://localhost:4000`.
- User deletion is implemented as a soft delete; deleted users have `status: false` and are excluded from the list.
- The app currently does not implement update/PUT requests in the frontend, but backend routes are prepared for activation and detail retrieval.
