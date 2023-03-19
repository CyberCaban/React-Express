const multer = require("multer");
const express = require("express");
const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./build/static/media");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + "-" + file.originalname);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		// if (
		// 	file.mimetype == "image/png" ||
		// 	file.mimetype == "image/jpg" ||
		// 	file.mimetype == "image/jpeg"
		// ) {
		// 	cb(null, true);
		// } else {
		// 	cb(null, false);
		// }
		cb(null, true);
	},
});

const Datastore = require("nedb");
const db = new Datastore({filename: "./server/data"});
db.loadDatabase();

router.post("/uploadFile", upload.single("file"), (req, res) => {
	const fileData = {
		fileName: req.file.filename,
	};
	db.insert(fileData);
	db.find({}, function (err, docs) {
		res.send(docs);
	});
});

router.post("/getFileList", (req, res) => {
	db.find({}, function (err, docs) {
		res.send(docs);
	});
});

module.exports = router;
