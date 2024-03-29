// This function wraps an asynchronous request handler to handle errors gracefully.
const asyncHandler = (requestHandler) => {
  // The function takes in a request handler function as a parameter.
  return (req, res, next) => {
    // This is an arrow function with parameters req, res, and next, which represents the Express request, response, and next middleware function respectively.

    // Wrapping the execution of the request handler in a Promise to handle any asynchronous operations.
    Promise.resolve(requestHandler(req, res, next))
      // Resolving the promise returned by the requestHandler.
      .catch((err) => next(err)); // Catching any errors that occur during the execution and passing them to the next middleware function.
  };
};





// const asyncHandler = (fn) => async (req,res,next) =>{
//   try{
//     await fn(req,res,next);
//   }catch(err){
//     res.status(err.code || 500).json(
//       {
//         success: false,
//         message: err.message || "Internal Server Error"
//       }
//     )
//   }
  
// }