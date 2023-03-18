import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";

function UploadForm() {
	const [files, setFiles] = useState([]);

	useEffect(() => {
		console.log(files);
	}, [files]);

	function onSubmit(e) {
		e.preventDefault();
		//путь к файлу внутри формы
		// console.log(e.target[0].files[0]);
		//отправка файла
		const formData = new FormData();
		formData.append("file", e.target[0].files[0]);
		//отправка через запрос аксиос
		axios.post("/api/uploadFile", formData, {}).then((res) => {
			setFiles(res.data);
			// console.log(res);
		});
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
