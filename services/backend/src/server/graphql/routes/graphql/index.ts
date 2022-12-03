import { ErrorRequestHandler } from "express";

const graphiqlErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err.status).json({ errors: [{ message: err.message }] });
  res.end();
};

export default {
  path: "/graphiql",
  routers: [graphiqlErrorHandler],
};
