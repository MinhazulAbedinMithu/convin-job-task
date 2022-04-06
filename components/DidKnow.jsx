import Image from "next/image";
import React from "react";
import didItemBg from "../public/assets/didItemBg.png";

const knowItems = [
	{
		title: "Harvard Business Review",
		para: "A study shows leaders worked 9.7 hours per weekday, on average, and the CEOs worked an average of 62.5 hours a week. Does that leave time for personal life?",
	},
	{
		title: "Frontiersin.org",
		para: "Jeff Kindler, CEO of Pfizer, surprisingly resigned in 2011, citing the 24/7 struggle to meet stakeholder expectations as the core reason. On the same lines, in a 2018 interview, Elon Musk almost broke down while talking about the disturbing personal life while leading Tesla.",
	},
	{
		title: "LinkedIn News",
		para: 'A new poll reveals 72% of CEOs fear losing their jobs in 2022, up from 52% in 2020. While this worry has undoubtedly always existed for the "big bosses," writes Bloomberg, this number is "eye-popping high” during the pandemic.',
	},
];

const DidKnow = () => {
	return (
		<div className="w-full py-5">
			<div className="container mx-auto">
				<h3 className="text-3xl font-bold text-center">Did You Know?</h3>
				<p className="leading-relaxed text-lg text-center pt-2 w-1/2 mx-auto text-slate-700">
					Pressure and solitude are permanent companions of CXOs. Unless you
					know their struggle and circumstances, it’s hard to decode what they
					expect.
				</p>
				<div className="w-full pt-8 flex gap-6 pb-5">
					{knowItems.map((item, index) => (
						<div
							key={index}
							className="rounded-lg border border-gray-200 shadow-lg shadow-slate-300 px-4 py-5 relative overflow-hidden h-auto"
						>
							<div className="absolute -top-3 -left-16">
								<Image src={didItemBg} alt="icon" />
							</div>
							<p className="text-slate-800 text-lg pb-5">{item.para}</p>
							<a href="google.com" className="text-blue-700">
								{item.title}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DidKnow;
