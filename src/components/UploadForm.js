import React from "react";
import axios from "axios";

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

	function onSubmit(e) {
		e.preventDefault();
		//путь к файлу внутри формы
		// console.log(e.target[0].files[0]);
		//отправка файла
		const formData = new FormData();
		formData.append("file", e.target[0].files[0]);
		//отправка через запрос аксиос
		axios.post("/api/uploadFile", formData, {}).then((res) => {
			console.log(res);
		});
		console.log(e);
	}

	return (
		<div>
			<form
				onSubmit={(e) => onSubmit(e)}
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
