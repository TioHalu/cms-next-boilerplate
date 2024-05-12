/** @type {import('plop').PlopGeneratorConfig} */
const componentConfig  = {
  description: "Creates a new hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the component?",
    },
  ],
  actions: [
    // index.ts
    {
      type: "add",
      path: "../src/hooks/{{pascalCase name}}/index.ts",
      templateFile: "templates/component/index.ts.hbs",
    },
    // hooks
    {
      type: "add",
      path: "../src/hooks/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "templates/component/component.tsx.hbs",
    },
  ],
}

/**
 *
 * @param plop {import("plop").NodePlopAPI}
 * @param test {boolean}
 */
module.exports = function component(plop, test) {
  plop.setGenerator("hook", componentConfig);
};