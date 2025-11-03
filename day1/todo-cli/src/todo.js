import {Command} from 'commander';
// const {Command} = require('commander');

const program = new Command();

program.name("todo-cli").description("A simple CLI tool for managing todos").version("1.0.0")

program.parse();

if (process.argv.length === 2) {
  program.outputHelp();
}