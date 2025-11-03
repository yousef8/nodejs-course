import fs from "fs";

const TODOS_FILE = "./todos.json";

export const readTodos = async () => {
    const data = await fs.promises.readFile(TODOS_FILE, "utf-8") || "[]";
    return JSON.parse(data);
}

export const writeTodos = async (todos) => {
    const todosAsString = JSON.stringify(todos, null, 2);
    await fs.promises.writeFile(TODOS_FILE, todosAsString);
}