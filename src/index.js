// Importing the 'dotenv' package to load environment variables from a .env file
import dotenv from "dotenv";

// Importing the 'connectDB' function from the 'db' module to establish connection with the database
import connectDB from "./db/index.js";

// Importing the 'app' object from the 'app' module which contains the Express application
import { app } from "./app.js";

// Loading environment variables from a .env file using the 'dotenv' package
dotenv.config({ path: "./env" });

// Connecting to the database
connectDB()
  .then(() => {


    // Handling errors that occur during database connection
    // Listening for the 'error' event emitted by the Express application
    app.on("error", (error) => {
      // Logging an error message indicating failure to connect to the database
      console.log("Error connecting to DB", error);
      // Throwing the error for further handling
      throw error;
    })

    // Starting the Express server and listening on the specified port or defaulting to port 8000
    app.listen(process.env.PORT || 8000, () => {
      // Logging a message indicating that the server is running and on which port
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {


    // Logging an error message if there was an issue connecting to the database
    console.log("Error connecting to DB", err);
  });
