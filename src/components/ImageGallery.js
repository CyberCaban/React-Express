import axios from "axios";
import React from "react";
import {useEffect, useState} from "react";

//чтобы ссылка на картинку могла выходить за пределы src надо закомментить строки с ModuleScopePlugin в файле node_modules/react-scripts/config/webpack.config.js

export default function ImageGallery() {
	const [ImgNames, setImgNames] = useState([]);

	useEffect(() => {
		axios.post("/api/getFileList").then((res) => {
			setImgNames(res.data);
		});
	}, []);

	function test() {
		console.log(ImgNames);
		console.log(process.env.PUBLIC_URL);
	}

	const Gallery = ImgNames?.map((item) => {
		return (
			<div>
				<img
					src={require(`/server/storage/${item.fileName}`)}
					alt=""
				/>
			</div>
		);
	});

	return (
		<>
			<button onClick={test}>Click me</button>
			{Gallery}
			<img
				src={"/static/media/1679240535991-456508538-apelsiny-PhotoRoom.png-PhotoRoom.png"}
				alt=""
			/>
		</>
	);
}
