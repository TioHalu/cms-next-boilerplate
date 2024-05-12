/** @type {import("plop").PlopGeneratorConfig} */
const componentConfig = {
  description: "Creates a new feature",
  prompts: [
    {
      type: "input",
      name: "feature",
      message: "What is the name of the feature ?",
    },
    {
      type: "input",
      name: "path",
      message: "Where is path ?",
    },
    {
      type: "list",
      name: "type",
      message: "What is the feature ?",
      choices: [
        {
          value: "crud",
          name: "CRUD",
        },
        {
          value: "report",
          name: "Report",
        },
      ],
    },
    {
      type: "checkbox",
      name: "crud-feature",
      message: "What is the feature of CRUD ?",
      choices: [
        {
          value: "create",
          name: "Create Action & Form",
        },
        {
          value: "update",
          name: "Update Action & Edit Form",
        },
        {
          value: "delete",
          name: "Delete Action",
        },
        {
          value: "approval",
          name: "Approval",
        },
        {
          value: "download",
          name: "Download Action",
        },
      ],
      when: (answers) => {
        return answers["type"] === "crud";
      },
    },
    {
      type: "checkbox",
      name: "report-feature",
      message: "What is the feature of Report ?",
      choices: [
        {
          value: "download",
          name: "Download Action",
        },
        {
          value: "refresh",
          name: "Refresh Action",
        },
      ],
      when: (answers) => {
        return answers["type"] === "report";
      },
    },
  ],
  actions: [],
};

/**
 *
 * @param plop {import("plop").NodePlopAPI}
 * @param test {boolean}
 */
module.exports = function component(plop, test) {
  plop.setGenerator("feature", componentConfig);
};