import * as z from "zod";

export const validateBody = (schema) => {
  return (req, res, next) => {
    req.body = schema.parse(req.body);
    next();
  };
};
