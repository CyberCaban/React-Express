import React from "react";
import "./App.css";
import UploadForm from "./components/UploadForm";

function App() {
	function sendToServer(e) {
		fetch("/sendToServer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				data: "all is working",
			}),
		});
	}

	return (
		<div className="App">
			<button onClick={sendToServer}>check is working</button>
			<UploadForm />
		</div>
	);
}

export default App;
