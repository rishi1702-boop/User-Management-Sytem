    /* eslint-disable no-undef */
    /* eslint-disable no-unused-vars */
    import exp from "express";
    import { connect } from "mongoose";
    import { config } from "dotenv";
    import { UserApp } from "./APIs/UserAPI.js";
    import cors from "cors";

    config();

    const app = exp();

    // Enable CORS (IMPORTANT)
    app.use(cors({
        origin: true, // reflect request origin
        credentials: true
    }));
    

    // Parse JSON
    app.use(exp.json());

    // Mount API routes
    app.use("/user-api", UserApp);

    // Connect DB and start server
    const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("DB connection success");

        app.listen(process.env.PORT, () =>
        console.log(`Server started on port ${process.env.PORT}`)
        );
    } catch (err) {
        console.log("Error in DB connection:", err);
    }
    };

    connectDB();

    // Global Error Handler
    app.use((err, req, res, next) => {
    console.error("Server Error:", err);

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
        });
    }

    // Invalid ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
        message: "Invalid ID format",
        });
    }

    // Duplicate key
    if (err.code === 11000) {
        return res.status(409).json({
        message: "Duplicate field value",
        });
    }

    res.status(500).json({
        message: "Internal Server Error",
    });
    });