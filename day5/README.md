# Day 5: Authentication and Authorization

## Authentication

Authentication is the process of verifying the identity of a user or system. It ensures that the entity requesting access is who they claim to be. Common methods of authentication include:

- **Passwords**: The most common form of authentication where users provide a secret word or phrase.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **Session Tokens**: A unique identifier stored on the server to maintain user state across multiple requests.
- **OAuth**: An open standard for access delegation commonly used for token-based authentication.

## Authorization

Authorization is the process of determining what an authenticated user or system is allowed to do.

## Common Authentication Practices

### Session Based

#### How It Works

1. User submits login credentials (username and password).
2. Server verifies the credentials.
3. Upon successful verification, the server creates a session and stores session data on the server-side (e.g., in memory, database).
4. The server sends a session ID to the client, typically stored in a cookie.
5. For subsequent requests, the client sends the session ID back to the server.

👍 Pros :

- Simplicity: Easy to implement and understand.
- Security: Session data is stored on the server, reducing exposure of sensitive information.
- Revocation: Sessions can be easily invalidated on the server-side.

👎 Cons:

- Scalability: Requires server-side storage, which can be challenging to scale.
- Statefulness: Each server needs to maintain session state, complicating load balancing.
- Hard to work with APIs during development and testing.

#### Use Cases

Good for traditional web applications where the server maintains user state.

### JWT Based

#### How It Works

1. User submits login credentials (username and password).
2. Server verifies the credentials.
3. Upon successful verification, the server creates a JWT containing user information and signs it with a secret key.
4. The server sends the JWT to the client.
5. For subsequent requests, the client includes the JWT in the Authorization header (usually as a Bearer token).

#### Example

```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwidXNlcm5hbWUiOiJncmVhdHVzZXJuYW1lIiwiaWF0IjoxNTE2MjM5MDIyfQ.jLonJDaUcBulZ9SWJ9_JVDFUf9qDjbW43lnwtCd96DY```


👍 Pros:

- Stateless: No need to store session information on the server.
- Scalable: Easier to scale across multiple servers since no session data is stored server-side.
- Compact: Can be easily transmitted via URL, POST parameters, or inside HTTP headers.


👎 Cons:

- Security Risks: If not implemented correctly, JWTs can be vulnerable to attacks.
- Token Revocation: Difficult to revoke tokens before they expire.

#### Use Cases

Good for APIs and microservices and distributed systems.

#### Structure

A JWT is composed of three parts separated by dots (.), which are:

1. Header (1st part)
    - Contains metadata about the token, such as the type of token and the signing algorithm used.
2. Payload (2nd part)
    - Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
3. Signature (3rd part)
    - Used to verify the authenticity of the token and ensure it has not been tampered with.
    - Created by combining the encoded header, encoded payload, a secret, and the algorithm specified in the header.

Each part is a base64 encoded string.

> ⚠️ JWT aren't encrypted; they can be simply encoded.
>
> You can very easily visit [jwt.io](https://jwt.io/) official website to decode and inspect JWTs.
>
> Make sure to never store sensitive information in the payload.

---

## CORS

CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. It helps prevent malicious websites from accessing sensitive data on other domains.

### How CORS Works

![CORS Diagram](./assets/fetching-page-cors.svg)

### Origin

The origin is defined by the scheme (protocol), host (domain), and port of a URL. For example, the origin of `https://example.com:8080/path` is `https://example.com:8080`.

If any of these components differ between the requesting site and the target site, the request is considered cross-origin.

Requests made to the same origin do not require CORS.

Requests made to a different origin require CORS headers to be present in the server's response to allow the request.

### Simple Requests

For a simple request, the browser includes an `Origin` header in the request, indicating the origin of the request. The server can respond with appropriate CORS headers to allow or deny the request.

A request is considered simple if it meets all of the following criteria:

- Only use the following HTTP methods: GET, HEAD, POST
- Only use the following headers: Accept, Accept-Language, Content-Language, Content-Type
- If Content-Type is used, it must be one of the following values: application/x-www-form-urlencoded, multipart/form-data, text/plain
- No ReadableStream object is used in the request (e.g., no Fetch API with a body as a stream)

### Preflight Requests

For requests that do not meet the criteria for simple requests, the browser sends a preflight request using the OPTIONS method on same endpoint to determine if the actual request is safe to send. The server must respond with appropriate CORS headers to allow the actual request.

### Common CORS Headers

- `Access-Control-Allow-Origin`: Specifies which origins are allowed to access the resource.
- `Access-Control-Allow-Methods`: Specifies the HTTP methods that are allowed when accessing the resource
- `Access-Control-Allow-Headers`: Specifies which headers can be used in the actual request.
- `Access-Control-Allow-Credentials`: Indicates whether the response to the request can be exposed when the credentials flag is true.
- `Access-Control-Max-Age`: Indicates how long the results of a preflight request can be cached.

### Setup CORS in Express.js

```javascript   
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'https://example.com', // specify allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
    credentials: true, // allow cookies to be sent
}));

// Allow all origins, headers, and methods (not recommended for production)
// app.use(cors());
```

### Best Practices

- Be specific with allowed origins to minimize security risks.
