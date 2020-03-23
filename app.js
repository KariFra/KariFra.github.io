const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("design"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8888, function() {
    console.log("Server is set up on port 8888");
    console.log("http://localhost:8888/tasks_frontend")
})

app.get("/tasks_frontend", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})