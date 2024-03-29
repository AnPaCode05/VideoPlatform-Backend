// Define a custom error class named ApiError which extends the built-in Error class.
class ApiError extends Error {
  // Constructor function for the ApiError class.
  constructor(statusCode, message = "Something went worng", errors = [], statck = "") {
    // Call the constructor of the Error class with the provided message.
    super(message);
    // Initialize the statusCode property of the ApiError instance.
    this.statusCode = statusCode;
    // Initialize the data property of the ApiError instance to null.
    this.data = null;
    // Initialize the message property of the ApiError instance.
    this.message = message;
    // Initialize the success property of the ApiError instance to false.
    this.success = false;
    // Initialize the errors property of the ApiError instance with the provided errors array.
    this.errors = errors;

    // Check if a stack trace is provided.
    if (statck) {
      // If provided, set the stack property of the ApiError instance to the provided stack trace.
      this.stack = statck;
    } else {
      // If not provided, capture the stack trace by calling Error.captureStackTrace().
      // This helps in setting a proper stack trace for the error.
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class to make it accessible from other modules.
export { ApiError };
