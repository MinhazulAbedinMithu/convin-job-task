import React from "react";
import ctaBg from "../public/assets/ebook-cta-bg.png";

const CtaReady = () => {
	return (
		<div className="w-full py-5">
			<div
				className="container mx-auto flex flex-col items-center gap-5 p-16 rounded-lg text-white bg-left-top bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url(${ctaBg.src})`,
					width: "100%",
					height: "100%",
				}}
			>
				<div className="text-lg">
					<h3 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-pink-600 w-[70%] mx-auto text-center">
						Ready to overcome your fear and face the C-suite buyer?
					</h3>
					<p className="w-[60%] text-center mx-auto py-5">
						Start applying the 10 selling tips to see dramatic changes in your
						sales outcomes and selling attitude. It’s tried and tested!
					</p>

					<div className="bg-white py-2 px-3 w-3/5 rounded-md flex items-center justify-between mx-auto">
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

export default CtaReady;
