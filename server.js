const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from Docker!</h1>
        <p>This application is running inside a Docker container.</p>
    `);
});

app.get("/info", (req, res) => {
    res.json({
        application: "Docker Lab Demo",
        status: "running",
        message: "Container is working successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});