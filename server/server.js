const express = require("express");
const app = express();
const path = require("path");

const api = require("./routes/routes");

const root = path.resolve(__dirname, "../");

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.json());

app.use("/api", api);

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(3000, () => {
	console.log("started");
});
