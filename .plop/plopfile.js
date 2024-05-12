const {
  component,
  hook,
  feature,
} = require("./settings");

const args = process.argv.slice(2);

const testing = args.includes("--test") ?? false

/** @param plop {import("plop").NodePlopAPI} */
module.exports = function(plop) {
  plop.setPrompt("search-list", require('inquirer-search-list'))
  component(plop, testing);
  hook(plop, testing);
  feature(plop, testing);
};