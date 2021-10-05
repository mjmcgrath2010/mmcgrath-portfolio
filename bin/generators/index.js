module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Generate a new component to add to the component library",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../components/{{properCase name}}.js",
        templateFile: "./templates/Component.hbs",
      },
      {
        type: "add",
        path: "../../components/stories/{{properCase name}}.stories.js",
        templateFile: "./templates/Story.hbs",
      },
    ],
  });
};
