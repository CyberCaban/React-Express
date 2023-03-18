import axios from "axios";
import React from "react";
import {useEffect, useState} from "react";

export default function ImageGallery() {
	const [ImgNames, setImgNames] = useState([]);

	useEffect(() => {
		axios.post("/api/getFileList").then((res) => {
			setImgNames(res.data);
		});
	}, []);

	function test() {
		// axios.post("/api/getFileList").then((res) => {
		// 	setImgNames(res.data);
		// });
		console.log(ImgNames);
	}

	const Gallery = ImgNames?.map((item) => {
		return (
			<div>
				<img
					src={require(`../../server/storage/${item.fileName}`)}
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
				src={require("../../server/storage/1679158122750-353960976-z0uktPQea0I.jpg")}
				alt=""
			/>
		</>
	);
}
