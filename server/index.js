const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app)

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.post("/sendToServer", function (req, res) {
    console.log(req.body.data);
});

app.listen(3000, ()=>{
    console.log("started");
})