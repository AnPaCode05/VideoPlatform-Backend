// Importing the express module for creating the web server.
import express from "express";

// Importing the CORS (Cross-Origin Resource Sharing) middleware for handling cross-origin requests.
import cors from "cors";

// Importing the cookie-parser middleware for parsing cookies in HTTP requests.
import cookieParser from "cookie-parser";

// Creating an instance of the Express application.
const app = express();

// Configuring CORS middleware to allow requests from specified origins and enable credentials.
app.use(cors({
  origin: process.env.CORS_ORIGIN, // Configuring the allowed origin from environment variable.
  credentials: true, // Enabling credentials for cross-origin requests.
}));

// Configuring middleware to parse JSON request bodies with a limit of 16kb.
app.use(express.json({
  limit: "16kb"
}));

// Configuring middleware to parse URL-encoded request bodies with extended mode and a limit of 16kb.
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}));

// Configuring static files serving middleware to serve files from the "public" directory.
app.use(express.static("public"));

// Configuring cookie-parser middleware to parse cookies in HTTP requests.
app.use(cookieParser());

// Exporting the Express application for usage in other modules.

//routes

import userRouter from "./routes/user.routes.js";


//routes defined

app.use("/api/v1/users", userRouter);


export { app };
