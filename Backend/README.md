# Backend - User Management System

This directory contains the backend API server for the User Management System.

## Overview

The backend is built with Express and MongoDB via Mongoose. It exposes user management routes to create, read, soft-delete, and reactivate users.

## Files

### `package.json`
- Defines backend dependencies and metadata.
- Uses ES modules with `type: "module"`.
- Includes dependencies: `express`, `mongoose`, `cors`, `dotenv`, and `nodemon`.

### `server.js`
- Starts the Express application.
- Configures CORS to allow browser-based requests.
- Parses incoming JSON request bodies.
- Mounts the `UserAPI` router at `/user-api`.
- Connects to MongoDB using `process.env.DB_URL`.
- Starts the server on `process.env.PORT`.
- Adds a global error handler for validation, cast, and duplicate key errors.

### `APIs/UserAPI.js`
- Defines user-related REST endpoints using `express.Router()`.
- Endpoints:
  - `POST /user-api/user`: create a new user.
  - `GET /user-api/user`: fetch all active users (`status: true`).
  - `GET /user-api/user/:id`: fetch one user by ID.
  - `DELETE /user-api/user/:id`: soft-delete a user by setting `status: false`.
  - `PATCH /user-api/user/:id`: reactivate a user by setting `status: true`.

### `Models/UserModel.js`
- Defines the user schema and Mongoose model.
- Schema fields:
  - `name`: required string
  - `email`: required unique string
  - `dateOfBirth`: required date
  - `mobileNumber`: optional string
  - `status`: boolean (default `true`)

## Setup

1. Install dependencies:
   ```bash
   cd Backend
   npm install
   ```
2. Create a `.env` file with:
   ```env
   DB_URL=<your-mongodb-connection-string>
   PORT=4000
   ```
3. Start the server:
   ```bash
   node server.js
   ```

## Notes

- The backend serves API requests for the frontend app.
- Soft-delete means the user remains in the database but is excluded from active user lists.
- The API expects JSON requests and returns JSON responses.
