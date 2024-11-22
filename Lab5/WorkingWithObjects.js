const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};
const module = {
    id: "1",
    name: "Introduction to Node.js",
    description: "Learn the basics of Node.js",
    course: "CS5610",
  };
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });

    // Get module name
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });

    // Update module name
    app.post("/lab5/module/name", (req, res) => {
        const { name } = req.query;
        module.name = name;
        res.json(module);
    });

    // Update module description
    app.post("/lab5/module/description", (req, res) => {
        const { description } = req.query;
        module.description = description;
        res.json(module);
    });

};
