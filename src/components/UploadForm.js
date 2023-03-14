import React from "react";

function UploadForm() {
	function sendImg(fileImg) {
		fetch("/api/uploadFile", {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
			},
			body: fileImg,
		}).then((res) => {
			console.log("Success" + res.body);
		});
	}

	function test(e) {
		e.preventDefault();
		console.log(e);
	}

	return (
		<div>
			<form
				onSubmit={(e) => sendImg(e)}
				encType="multipart/form-data">
				<input
					type="file"
					name="file"
					id="file"></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default UploadForm;
