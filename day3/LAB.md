# Lab: Building MVC & Restful Applications with Express.js

## MVC Web Application

Use express.js and ejs template engine create the following 2 pages:

1. **Home Page**
    - Route: `localhost:8080/`
    - Display a home page as the landing page for users
    - Show all todos from the file-based database (from Lab 1 & lab 2)
    - Display todos in a formatted, user-friendly layout
    - CSS styling should be in it's own file, and server from public folder

2. **Sky Page**
    - Route: `localhost:8080/sky`
    - Display an image with a description
    - Serve the image from disk using an `<img>` HTML tag
    - Include a few lines of description about the image
    - Add download button to download the image
    - CSS styling should be in it's own file, and server from public folder

---

## RESTful API

Use express.js to create a RESTful API for the todo list with the following endpoints:

    1. `GET /api/todos` - Retrieve all todos
    2. `GET /api/todos/:id` - Retrieve a specific todo by ID
    3. `POST /api/todos` - Create a new todo
    4. `PUT /api/todos/:id` - Update an existing todo by ID
    5. `DELETE /api/todos/:id` - Delete a todo by ID

Ensure to handle errors appropriately and return relevant HTTP status codes for each operation.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Tips for RESTful API Design](https://restfulapi.net/)
