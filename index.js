// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
// Initialize express and define a port
const app = express();
const PORT = 3000;
// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200).end("Hello")
});

app.post("/push", (req, res) => {
    console.log("Push event");
    console.log(req.body);
    res.status(200).end();
});

app.post("/branch", (req, res) => {
    console.log("Branch event");
    console.log(req.body);
    res.status(200).end();
});

app.post("/pull-request", (req, res) => {
    console.log("Pull Request event");
    console.log(req.body);
    res.status(200).end();
});

app.post("/pull-request-review", (req, res) => {
    console.log("Pull Request Review event");
    console.log(req.body);
    res.status(200).end();
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));