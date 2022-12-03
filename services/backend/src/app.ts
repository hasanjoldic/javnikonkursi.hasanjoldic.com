import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

// if (process.env.NODE_ENV === "development") {
app.use(cors());
// }

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

app.use(errorHandler);
