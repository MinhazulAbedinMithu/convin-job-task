import React from "react";
import bannerBg from "../public/assets/banner-bg.png";
import styles from "../styles/Home.module.css";

const Banner = () => {
	return (
		<div
			className={`w-full bg-left-top bg-no-repeat bg-cover `}
			style={{
				backgroundImage: `url(${bannerBg.src})`,
				width: "100%",
				height: "100%",
			}}
		>
			<div className="container mx-auto flex items-center justify-start h-[85vh]">
				<div className="w-1/2">
					<button className="bg-blue-600 py-2 px-4 rounded-md text-white text-lg">
						EBOOK
					</button>
					<h2 className="text-4xl leading-normal text-white font-bold pt-3">
						Do you want to conquer your fear of meeting C-suite buyers?
					</h2>
					<p className="text-xl text-slate-300 pt-8 pb-3">
						Enter your email and get your hands on the e-book.
					</p>

					<div className="bg-white py-2 px-3 w-3/5 rounded-md flex items-center justify-between">
						<input
							type="email"
							placeholder="Enter your Email address"
							className="py-1 text-lg"
						/>
						<button className="bg-gradient-to-r from-blue-700 to-blue-400 py-1 px-3 rounded-md text-lg uppercase text-white font-bold">
							Download
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
