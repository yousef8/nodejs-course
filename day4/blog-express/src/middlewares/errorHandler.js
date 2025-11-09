import * as z from "zod";

export const handleError = (err, req, res, next) => {
  if (err instanceof z.ZodError) {
    const formattedError = z.flattenError(err);

    res.status(400).json({
      errors: {
        ...formattedError,
      },
    });
    return;
  }

  console.error(err);

  res.status(500).json({ message: "Internal Server Error" });
};
