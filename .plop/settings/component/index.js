const path = require('path');
const fs = require('fs');

const ant = require('antd');

const _ = require('lodash');

/**
 *
 * @param plop {import("plop").NodePlopAPI}
 * @param test {boolean}
 */
module.exports = function component(plop, test) {

  /** @type {import("plop").PlopGeneratorConfig.actions} */
  const actionList = [
    {
      type: "add",
      path: "../src/components/{{componentType}}/{{kebabCase name}}/index.ts",
      templateFile: "templates/component/index.ts.hbs",
    },
    // component
    {
      type: "add",
      path: "../src/components/{{componentType}}/{{kebabCase name}}/{{kebabCase name}}.tsx",
      templateFile: "templates/component/component.tsx.hbs",
    },
    // storybook
    {
      type: "add",
      path: "../src/components/{{componentType}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
      templateFile: "templates/component/stories.tsx.hbs",
    },
    // tests
    {
      type: "add",
      path: "../src/components/{{componentType}}/{{kebabCase name}}/{{kebabCase name}}.test.tsx",
      templateFile: "templates/component/test.tsx.hbs",
    },
  ];

  /** @type {import("plop").PlopGeneratorConfig.prompts} */
  const promptList = [
    {
      type: "list",
      name: "componentType",
      message: "What component do you want to create?",
      choices: ["atoms", "molecules", "organisms"],
      validate: function(value) {
        if (/.+/.test(value)) {
          return true;
        }
        return "type is required";
      },
    },
    {
      type: "confirm",
      name: "isAntd",
      message: "Is the component reuse antd component ?",
      when: (answers) => answers["componentType"] === "atoms",
    },
    {
      type: "search-list",
      name: "componentName",
      pageSize: 5,
      message: "What is component of antd to reuse ?",
      choices: Object.keys(ant).filter(s => /^[A-Z]/g.test(s)),
      when: (answers) => answers["isAntd"],
    },
    {
      type: "confirm",
      name: "isHasTest",
      message: "Is the component need test ?",
      when: (answers) => !answers["isAntd"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the component?",
      when: (answers) => {
        if (answers["isAntd"]) {
          answers["name"] = "i " + _.lowerCase(answers["componentName"]);
        } else {
          answers["name"] = "new component"
        }
        return !answers["isAntd"]
      },
      validate: function(value) {
        if (/.+/.test(value)) {
          return true;
        }
        return "Name component is required";
      },
    },
  ]

  /** @type {import("plop").PlopGeneratorConfig} */
  const componentConfig = {
    description: "Creates a new component",
    prompts: promptList,
    actions: (answers) => {
      const actions = [...actionList]

      if (answers["isAntd"]) {
        actions[1].templateFile = "templates/component/component-antd.tsx.hbs"
        actions.splice(2, 1)
      }

      if (!answers["isHasTest"]) {
        actions.pop()
      }

      if (test) {
        actions.forEach(action => {
          const act = {
            ...action,
            path: path.join(plop.getDestBasePath(), plop.renderString(action.path, answers)),
            templateFile: path.join(plop.getDestBasePath(), plop.renderString(action.templateFile, answers))
          }

          const contentFile = fs.readFileSync(act.templateFile, "utf-8")
          const contentFileRender =plop.renderString(contentFile, answers)

          console.log(act);
          console.log(contentFileRender);
        })
        return []
      } else {
        return actions
      }
    },
  };

  plop.setGenerator("component", componentConfig);
};