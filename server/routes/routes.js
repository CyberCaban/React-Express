const multer = require("multer");
const express = require("express");
const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "../storage");
	},
	fileName: (req, file, cb) => {
		const fileName = Date.now() + file.originalname;
		cb(null, fileName);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error());
		}
	},
});

const Datastore = require("nedb");
const db = new Datastore({filename: "../data"});
db.loadDatabase();

router.post("/uploadFile", upload.single("file"), (req, res) => {
	const url = req.protocol + "://" + req.get("host");
	console.log(url);
});

module.exports = router;
