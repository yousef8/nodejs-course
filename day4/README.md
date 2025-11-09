# Day 4 - Advanced Error Handling and MongoDB Integration

---

## MongoDB Integration with Mongoose

- Install Mongoose: `npm install mongoose`
- Connect to MongoDB using Mongoose:

```js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
```

## Error Handling in Express.js

- Use `next()` to pass errors to the error-handling middleware
- Create a centralized error-handling middleware to manage errors consistently
- Log errors for debugging purposes

```js
// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

---

## Environment Variables

- Use environment variables to manage sensitive information like database URIs
- Use the `dotenv` package to load environment variables from a `.env` file

```js
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
```

- Example `.env` file:

```
MONGO_URI=mongodb://localhost:27017/mydatabase
```

---

## Validation and Sanitization

- Use libraries like `express-validator`, `zod`, or `joi` for validating and sanitizing user input
- We will use `zod` for schema validation

```js
import { z } from 'zod';

const userSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6),
});
const validatedData = userSchema.parse(req.body);
```

---

## Additional Resources

- [Express.js Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [dotenv Package](https://www.npmjs.com/package/dotenv)
- [Zod Documentation](https://zod.dev/)