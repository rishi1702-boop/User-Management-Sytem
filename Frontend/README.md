# Frontend - User Management System

This directory contains the React frontend for the User Management System.

## Overview

The frontend is built with React, Vite, React Router, Tailwind CSS, and React Hook Form. It provides a user interface for adding users, viewing an active user list, and checking user details.

## Files

### `package.json`
- Defines frontend dependencies and scripts.
- Uses React 19, React Router, Tailwind CSS, and React Hook Form.
- Scripts:
  - `npm run dev` - start the development server.
  - `npm run build` - create a production build.
  - `npm run preview` - preview the production build.
  - `npm run lint` - lint source files.

### `src/main.jsx`
- Application entry.
- Renders `App` into the DOM root.
- Imports global styles from `index.css`.

### `src/App.jsx`
- Defines client-side routes using React Router.
- Uses `RootLayout` as the shared layout.
- Routes:
  - `/` → `Home`
  - `/add-user` → `AddUser`
  - `/user-list` → `UserList`
  - `/user` → `User`

### `src/components/RootLayout.jsx`
- Shared layout wrapper for all views.
- Renders `Header`, the route `Outlet`, and `Footer`.

### `src/components/Header.jsx`
- Top navigation bar.
- Links to Home, Add User, and User List pages.

### `src/components/Footer.jsx`
- Simple footer displayed at the bottom of every page.

### `src/components/Home.jsx`
- Landing page with app description and welcome text.

### `src/components/AddUser.jsx`
- User registration form.
- Uses `react-hook-form` for form handling.
- Sends `POST` requests to `http://localhost:4000/user-api/user`.
- Redirects to `/user-list` after successful creation.

### `src/components/UserList.jsx`
- Fetches all active users from the backend.
- Displays users in a responsive grid.
- Clicking a user card navigates to the details page.

### `src/components/User.jsx`
- Displays details for the selected user.
- Reads user data from React Router location state.
- Shows name, email, date of birth, and phone number.

## Setup

1. Install dependencies:
   ```bash
   cd Frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Notes

- The frontend expects the backend API at `http://localhost:4000`.
- The app currently does not implement an edit user flow in the UI.
- User detail navigation depends on state passed through React Router.
