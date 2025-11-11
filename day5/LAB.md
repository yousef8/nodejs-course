# Lab 5

1. Create user model
    - fields: email, password, firstName, lastName
    - hash passwords before saving to DB

2. Implement registration endpoint
    - POST /api/v1/auth/register
    - validate input data
    - check for existing user with same email
    - return JWT on successful registration

3. Implement login endpoint
    - POST /api/v1/auth/login
    - validate input data
    - check email and password
    - return JWT on successful login

4. Protect routes with JWT authentication
    - create middleware to verify JWT
    - apply middleware to protected routes
        - Create, Update, Delete todos
