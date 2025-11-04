import { Command } from "commander";
// const {Command} = require('commander');
import { readTodos, writeTodos } from "./db.js";
import { printTodo } from "./utils.js";

const program = new Command();

program
  .name("todo-cli")
  .description("A simple CLI tool for managing todos")
  .version("1.0.0");

program
  .command("add")
  .description("Add a new todo item")
  .argument("<title>", "The task title")
  .option("-d, --description <description>", "Description of the todo item")
  .action(async (title, options) => {
    // read all existing todos
    const todos = await readTodos();

    // push new todo to the list
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
      createdAt: new Date().toISOString(),
      description: options.description || "",
    };
    // save back to todos.json
    todos.push(newTodo);

    writeTodos(todos);

    console.log("\n✅ Todo created successfully!");
    console.log(`📌 ID: ${newTodo.id}`);
    console.log(`📝 Title: ${newTodo.title}`);
    if (newTodo.description) {
      console.log(`📄 Description: ${newTodo.description}`);
    }
    console.log(
      `⏰ Created: ${new Date(newTodo.createdAt).toLocaleDateString()}\n`
    );
  });

program
  .command("list")
  .description("List all items")
  .action(async () => {
    const todos = await readTodos();
    todos.forEach(printTodo);
  });

program.parse();

if (process.argv.length === 2) {
  program.outputHelp();
}
