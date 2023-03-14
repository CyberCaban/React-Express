const express = require("express");
const app = express();
const path = require("path");

const api = require("./routes/routes");

app.use(express.static(path.resolve(__dirname, "../")));
app.use(express.json());

app.use("/api", api);

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// app.post("/sendToServer", function (req, res) {
// 	console.log(req.body);
// });

app.listen(3001, () => {
	console.log("started");
});
