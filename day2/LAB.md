# Lab 2: Todo Server with Web Interface

## Overview

Build a web server that displays your todo list from Lab 1 using a simple HTTP server. This lab extends the previous lab by adding a web interface to view your todos and additional pages.

---

## Prerequisites

- Completed Lab 1 (Todo CLI App with file-based database)
- Node.js HTTP server knowledge
- HTML/CSS basics

---

## Requirements

### 1. Home Page

**Route:** `localhost:8080/`

**Functionality:**

- Display a home page as the landing page for users
- Show all todos from the file-based database (from Lab 1)
- Display todos in a formatted, user-friendly layout
- **Important:** Do NOT display the todo `id` on this page

**Output Fields (per todo):**

- `title` — The todo title
- `description` — The todo description
- `status` — Whether the todo is completed or not
- `created_at` — When the todo was created

**Example:**

```text
Home Page: My Todos

✓ Learn Node.js
  Complete the Node.js course
  Status: Incomplete | Created: 2025-11-07 10:30:45

✓ Buy groceries
  Milk, eggs, bread
  Status: Completed | Created: 2025-11-06 14:22:10
```

---

### 2. Sky Page

**Route:** `localhost:8080/sky`

**Functionality:**

- Display an image with a description
- Serve the image from disk using an `<img>` HTML tag
- Include a few lines of description about the image
- Provide a download button that allows users to download the image
- Use any image of your choice, try this [image](https://media.cnn.com/api/v1/images/stellar/prod/200505225212-04-fossils-and-climate-change-museum.jpg?q=x_0,y_0,h_1125,w_1999,c_fill/h_720,w_1280)
- Serve images with the correct `Content-Type` header
- Ensure images are loaded from disk, not embedded as base64

**Download Button:**

- Add a button that triggers image download when clicked
- Use the appropriate HTTP header to enable download functionality
  - 💡 **Hint:** Research the `Content-Disposition` header

**Example Layout:**

```text
[Title]

[Image displayed here]

[Download Button]
```

---

### 3. 404 Not Found Page

**Route:** Any undefined route (e.g., `localhost:3000/invalid-path`)

**Functionality:**

- Display a simple, informative 404 error page
- Include a message indicating the page was not found
- Optionally provide a link back to the home page

**Example:**

```text
404 - Page Not Found

The page you are looking for does not exist.
[Back to Home]
```

---

## Static Files

### CSS Styling

- Create a separate CSS file for styling
- Serve the CSS file from disk using the appropriate `Content-Type` header
- Basic styling is acceptable for this lab

> ⚠️ **Note:** This is a Node.js RESTful API course, not a web design course. Focus on functionality over aesthetics. Simple, readable styling is sufficient.

---

### Routing

- `/` — Home page (todos list)
- `/sky` — Sky page (image + description)
- `/sky/download` — Image download route
- `/styles.css` or similar — CSS file
- `/images/...` or similar — Image files
- All other routes — 404 page

---

## Checklist

- ✅ Home page displays all todos without IDs
- ✅ Home page shows title, description, status, and created_at
- ✅ Serbal page displays image from disk
- ✅ Serbal page includes image description
- ✅ Download button works with correct headers
- ✅ CSS file is served separately from disk
- ✅ 404 page displays for invalid routes
- ✅ All pages are styled and user-friendly
- ✅ No hardcoded data (reads from database)

---

## Resources

- **[Node.js HTTP Module](https://nodejs.org/api/http.html)** — Creating HTTP servers
- **[Node.js fs Module](https://nodejs.org/api/fs.html)** — Reading files from disk
- **[HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)** — Understanding headers
- **[Content-Disposition Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)** — File downloads
