import axios from "axios";
import React from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import UploadForm from "./components/UploadForm";

function App() {
	// function sendToServer(e) {
	// 	fetch("/sendToServer", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			data: "all is working",
	// 		}),
	// 	});
	// }

	return (
		<div className="App">
			<UploadForm />
			<ImageGallery />
		</div>
	);
}

export default App;
