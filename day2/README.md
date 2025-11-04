# Day 2: HTTP/HTTPS

## Overview

HTTP (Hypertext Transfer Protocol) is the foundation for data communication on the web. It defines how web browsers and servers communicate through a **client-server request-response cycle**.

---

## HTTP Request Structure

An HTTP request consists of three main parts:

### Example Request

```http
GET /index.html HTTP/1.1

Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8

{
    "username": "user123",
    "password": "securepassword"
}
```

---

## 1. Request Line

The first line of an HTTP request contains three components:

```http
GET /index.html HTTP/1.1
```

### Components

#### HTTP Method

Defines the action to be performed on a resource.

| Method | Description |
|--------|-------------|
| `GET` | Retrieves data from the server |
| `POST` | Sends data to the server |
| `PUT` | Replaces data on the server (Idempotent) |
| `PATCH` | Updates data on the server |
| `DELETE` | Removes data from the server |

> 📚 For more information, visit the [MDN HTTP Methods Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

#### URI (Uniform Resource Identifier)

The path to the requested resource on the server.

**Examples:**

- `/index.html`
- `/users/yousef`
- `/posts/1`

#### HTTP Protocol Version

The version of the HTTP protocol being used.

**Examples:**

- `HTTP/1.1`
- `HTTP/2.0`

---

## 2. Headers

HTTP headers are **key-value pairs** sent in both request and response messages to provide additional information about the request or response.

### Common Request Headers

| Header | Description |
|--------|-------------|
| `Authorization` | Contains the credentials to authenticate a user-agent with a server |
| `Expires` | The date/time after which the response is considered stale |
| `Accept` | Informs the server about the types of data that can be sent back |
| `Accept-Encoding` | The encoding algorithm (usually compression) that can be used on the resource |
| `Cookie` | Contains stored HTTP cookies previously sent by the server with the `Set-Cookie` header |
| `Access-Control-Allow-Origin` | Indicates whether the response can be shared |

> 📚 For more information, visit the [MDN HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

## 3. Body (Optional)

The body contains the data being sent to the server. It's typically used with methods like `POST`, `PUT`, or `PATCH`.

### Example JSON Body

```json
{
    "username": "user123",
    "password": "securepassword"
}
```

> ⚠️ **Note:** The body is optional and not used with methods like `GET` or `DELETE`.

---

## HTTP Response Structure

An HTTP response consists of three main parts:

### Example Response

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1234
Date: Tue, 04 Nov 2025 09:34:00 GMT
Server: Apache/2.4.41 (Unix)

<!DOCTYPE html>
<html>
    <head>
        <title>Example Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>
```

---

## 1. Status Line

The first line of an HTTP response contains three components:

```http
HTTP/1.1 200 OK
```

### Response Components

#### HTTP Protocol Version

The version of the HTTP protocol being used.

**Examples:**

- `HTTP/1.1`
- `HTTP/2.0`

#### Status Code

A three-digit number indicating the result of the request.

| Code Range | Category | Common Examples |
|------------|----------|-----------------|
| `1xx` | Informational | `100 Continue`, `101 Switching Protocols` |
| `2xx` | Success | `200 OK`, `201 Created`, `204 No Content` |
| `3xx` | Redirection | `301 Moved Permanently`, `302 Found`, `304 Not Modified` |
| `4xx` | Client Error | `400 Bad Request`, `401 Unauthorized`, `404 Not Found` |
| `5xx` | Server Error | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable` |

> 📚 For more information, visit the [MDN HTTP Status Codes Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

#### Reason Phrase

A human-readable text description of the status code.

**Examples:**

- `OK` (for 200)
- `Not Found` (for 404)
- `Internal Server Error` (for 500)

---

## 2. Response Headers

HTTP response headers provide additional information about the response or the server.

### Common Response Headers

| Header | Description |
|--------|-------------|
| `Content-Type` | Indicates the media type of the resource (e.g., `text/html`, `application/json`) |
| `Content-Length` | The size of the response body in bytes |
| `Date` | The date and time when the response was sent |
| `Server` | Information about the server software handling the request |
| `Set-Cookie` | Sends cookies from the server to the user agent |
| `Cache-Control` | Directives for caching mechanisms in both requests and responses |
| `Location` | Used in redirects to indicate the URL to redirect to |
| `ETag` | An identifier for a specific version of a resource |

> 📚 For more information, visit the [MDN HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

## 3. Response Body (Optional)

The response body contains the actual data returned by the server, such as an HTML document, an image, a JSON object, or any other resource. The format depends on the `Content-Type` header.

### Example HTML Body

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example Page</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>
```

### Example JSON Response Body

```json
{
    "status": "success",
    "data": {
        "id": 1,
        "username": "user123",
        "email": "user@example.com"
    }
}
```

> ⚠️ **Note:** The response body may be empty for certain status codes like `204 No Content` or `304 Not Modified`.
