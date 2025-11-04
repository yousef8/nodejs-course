export const printTodo = (todo) => {
  const status = todo.completed ? "✓" : "○";
  const title = todo.completed ? `~~${todo.title}~~` : todo.title;
  const description = todo.description ? ` - ${todo.description}` : "";

  console.log(`[${todo.id}] ${status} ${title}${description}`);
  console.log(`    Created: ${new Date(todo.createdAt).toLocaleDateString()}`);
  console.log();
};