# Lab 1: Todo List CLI App

## Overview

Create a command-line todo list application with the ability to add, list, edit, and delete todos. The app should persist data to a file-based database.

---

## Features

### 1. Add Todo

Create a new todo item.

**Command:**

```bash
todo new <title>
# or
todo add <title>
```

**Options:**

- `-d, --description <string>` — Add a description for the todo

**Output:**

Formatted output including:

- `id` — Unique identifier for the todo
- `title` — The todo title
- `description` — The todo description (if provided)
- `status` — Whether the todo is completed or not
- `created_at` — Timestamp of when the todo was created

**Example:**

```bash
$ todo add "Learn Node.js" -d "Complete the Node.js course"

✓ Todo created successfully
ID: 1
Title: Learn Node.js
Description: Complete the Node.js course
Status: Incomplete
Created At: 2025-11-07 10:30:45
```

---

### 2. List All Todos

Display all todos in a formatted list.

**Command:**

```bash
todo list
# or
todo ls
```

**Options:** None

**Output:**

Formatted string displaying all todos with:

- `id` — Unique identifier
- `title` — The todo title
- `description` — The todo description
- `status` — Completion status
- `created_at` — Creation timestamp

**Example:**

```bash
$ todo list

╔════╦═════════════════╦════════════════════════════╦══════════╦═══════════════════════╗
║ ID ║     Title      ║       Description          ║  Status  ║     Created At        ║
╠════╬═════════════════╬════════════════════════════╬══════════╬═══════════════════════╣
║ 1  ║ Learn Node.js  ║ Complete the Node.js course║Incomplete║ 2025-11-07 10:30:45   ║
║ 2  ║ Buy groceries  ║ Milk, eggs, bread          ║ Completed║ 2025-11-06 14:22:10   ║
╚════╩═════════════════╩════════════════════════════╩══════════╩═══════════════════════╝
```

---

### 3. Edit Todo

Update an existing todo's information.

**Command:**

```bash
todo edit <id> <new_title>
```

**Options:**

- `-d, --description <new_description>` — Update the description
- `-c, --completed` — Mark the todo as completed

**Output:**

Formatted output of the updated todo including:

- `id` — Unique identifier
- `title` — The updated title
- `description` — The updated description
- `status` — Updated completion status
- `created_at` — Original creation timestamp

**Example:**

```bash
$ todo edit 1 "Master Node.js" -d "Complete advanced Node.js topics" -c

✓ Todo updated successfully
ID: 1
Title: Master Node.js
Description: Complete advanced Node.js topics
Status: Completed
Created At: 2025-11-07 10:30:45
```

---

### 4. Delete Todo

Remove a todo from the list.

**Command:**

```bash
todo remove <id>
# or
todo rm <id>
```

**Options:** None

**Output:**

Formatted acknowledgment string confirming the removal of the specified todo ID.

**Example:**

```bash
$ todo remove 2

✓ Todo with ID 2 has been successfully removed
```

---

## Database

- **Type:** File-based (JSON, CSV, or any format of your choice)
- **Location:** A persistent file that stores all todos
- **Purpose:** Maintains todo data across application sessions

**Recommended Format:** JSON for ease of use with JavaScript

---

## Resources

- **[Node.js fs Module](https://nodejs.org/api/fs.html)** — For file I/O operations
- **[Commander.js](https://github.com/tj/commander.js)** — For building CLI applications with commands and options

---

## Requirements Summary

- ✅ Use the `fs` module for file-based storage
- ✅ Use `Commander` for CLI command parsing
- ✅ Support all four main operations (add, list, edit, delete)
- ✅ Persist data between sessions
- ✅ Provide clear, formatted output for all commands
- ✅ Include proper error handling
- ✅ Use timestamps for todo creation
