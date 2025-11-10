import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  // Authorization: Bearer <Token>
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthenticated" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN);

    req.userId = payload.id;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
