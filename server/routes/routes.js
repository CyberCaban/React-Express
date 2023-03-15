const multer = require("multer");
const express = require("express");
const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./server/storage");
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
const db = new Datastore({filename: "./server/storage/data"});
db.loadDatabase();

router.post("/uploadFile", upload.single("file"), (req, res) => {
	// console.log(req.file);
	const fileData = {
		fileName: req.file.filename,
		originalname: req.file.originalname,
	};
	db.insert(fileData);
});

module.exports = router;
