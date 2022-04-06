import React from "react";

import insideBg from "../public/assets/inside-bg.png";

const Inside = () => {
	return (
		<div className="w-full py-5">
			<div
				className="container mx-auto flex flex-col items-center gap-5 p-10 rounded-lg text-white bg-left-top bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url(${insideBg.src})`,
					width: "100%",
					height: "100%",
				}}
			>
				<h2 className="text-3xl font-bold ">What&apos;s Inside?</h2>
				<p className=" text-lg leading-relaxed w-3/5 pb-10">
					Our mission is not to leave you hanging but deliver practical and
					straightforward advice on making it big with the accounts involving
					C-level executives. This means improving the selling approach
					immediately. To achieve our mission, we came up with a game plan for
					selling to the C-level executives, and it includes;
				</p>
				<ul className="flex flex-col gap-10 w-2/5">
					<li className="border-b-2 pb-2 flex items-center justify-start gap-5">
						<span className="text-3xl font-bold">01.</span>{" "}
						<span className="text-xl">
							A brief <b>introduction to the C-suite</b> and their struggles
						</span>
					</li>
					<li className="border-b-2 pb-2 flex items-center justify-start gap-5">
						<span className="text-3xl font-bold">02.</span>{" "}
						<span className="text-xl">
							The <b>Importance of Facing</b> the C-suite Buyer
						</span>
					</li>
					<li className="border-b-2 pb-2 flex items-center justify-start gap-5">
						<span className="text-3xl font-bold">03.</span>{" "}
						<span className="text-xl">
							<b>10 Selling tips</b> to handle C-suite meetings
						</span>
					</li>
					<li className="border-b-2 pb-2 flex items-center justify-start gap-5">
						<span className="text-3xl font-bold">04.</span>{" "}
						<span className="text-xl">
							A <b>handy list of exercises</b> to sharpen your skills
						</span>
					</li>
					<li className="border-b-2 pb-2 flex items-center justify-start gap-5">
						<span className="text-3xl font-bold">05.</span>{" "}
						<span className="text-xl">
							A comprehensive <b>meeting checklist</b> before meeting the
							C-suite executive
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Inside;
