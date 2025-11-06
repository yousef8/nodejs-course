export const printTodo = (todo) => {
  const status = todo.completed ? "✓" : "○";
  const title = todo.completed ? `~~${todo.title}~~` : todo.title;
  const description = todo.description ? ` - ${todo.description}` : "";

  console.log(`[${todo.id}] ${status} ${title}${description}`);
  console.log(`    Created: ${new Date(todo.createdAt).toLocaleDateString()}`);
  console.log();
};

export function interpolate(string, data) {
  return string.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key];
  });
}

export function generateTodosHTML(todos) {
  if (todos.length === 0) {
    return `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <h2>No todos yet!</h2>
        <p>Create your first todo using the CLI:</p>
        <code>npm start new "Your first todo"</code>
      </div>
    `;
  }

  return todos
    .map((todo) => {
      const formattedDate = new Date(todo.createdAt).toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      );

      return `
      <div class="todo-card ${todo.completed ? "completed" : ""}">
        <div class="todo-header">
          <div class="todo-status">
            ${
              todo.completed
                ? '<span class="status-badge completed-badge">✓ Completed</span>'
                : '<span class="status-badge pending-badge">○ Pending</span>'
            }
            <span class="todo-id">#${todo.id}</span>
          </div>
          <div class="todo-date">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${formattedDate}
          </div>
        </div>
        <h3 class="todo-title">${todo.title}</h3>
        ${
          todo.description
            ? `<p class="todo-description">${todo.description}</p>`
            : ""
        }
      </div>
    `;
    })
    .join("");
}
