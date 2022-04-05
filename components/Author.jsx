import Image from "next/image";
import React from "react";

import authorImg from "../public/assets/author.png";

const Author = () => {
	return (
		<div className="w-full py-5">
			<div className="container mx-auto flex items-center justify-center">
				<div className="w-1/2 flex items-center justify-center relative">
					<h2 className="text-7xl font-bold uppercase -rotate-90 z-10 absolute top-50 -left-10 bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-pink-400">
						Author
					</h2>
					<Image src={authorImg} alt="author" />
				</div>
				<div className="w-1/2">
					<p className="text-lg text-blue-600 font-bold">The Author</p>
					<h1 className="text-3xl font-bold py-5">Abhishika Chatterjee</h1>
					<p className="text-lg leading-relaxed w-[85%]">
						Abhishikha is a marketing professional with over three years of
						experience in content writing. She&apos;s currently on a mission to
						create content that will help a salesperson overcome obstacles.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Author;
