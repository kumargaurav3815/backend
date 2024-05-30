/** @format */

class Errorhandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    //11000 means error of not unique (1:00:00)
    const message = `Duplicate ${Object.keys(err.keyValue)}Entered`;
    err = new Errorhandler(message, 400);
  }
  if (err.name === "JsonWebTokenError") {
    const message = "Json web token is not valid! Try Again!";
    err = new Errorhandler(message, 400);
  }
  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired! Try Again!";
    err = new Errorhandler(message, 400);
  }
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new Errorhandler(message, 400);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join("")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default Errorhandler;
