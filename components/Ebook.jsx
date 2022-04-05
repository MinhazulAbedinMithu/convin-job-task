import Image from "next/image";
import React from "react";

import EbookImg from "../public/assets/ebook-left.png";
import iconOne from "../public/assets/ebook-right-1.png";
import iconTwo from "../public/assets/ebook-right-2.png";
import iconThree from "../public/assets/ebook-right-3.png";
import iconFour from "../public/assets/ebook-right-4.png";

const ebookRightItems = [
	{
		icon: iconOne,
		title: "The more senior executives are involved, the better....",
		description:
			"…not the power and authority, but their decision-making skills and influence make them a preferred buyer choice.",
	},
	{
		icon: iconTwo,
		title: "CXO buyers accelerate decision-making…",
		description:
			"…as they decide in fewer meetings and waste minimum time talking and discussing. Their absence can stall or delay sales deals.",
	},
	{
		icon: iconThree,
		title: "C-level executives are entering buying cycles faster…",
		description:
			"…since the beginning of the pandemic and impacting the decision-making process. In some cases, CXOs enter sales discussions unannounced.",
	},
	{
		icon: iconFour,
		title: "Most sellers find themselves stressed...",
		description:
			"…losing sleep before the night of a sales meeting with a CXO of an Enterprise company, impacting the meeting and performing poorly.",
	},
];

const EbookItem = ({ icon, title, description }) => {
	return (
		<div>
			<div>
				<Image src={icon} alt="icon" />
			</div>
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

const Ebook = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto flex items-start justify-between py-10 gap-20">
				<div className="w-2/5">
					<h3 className="text-3xl font-bold">
						Why should you invest time in reading the eBook?
					</h3>
					<p className="text-slate-600 py-5 text-lg leading-relaxed">
						Handling C-suite buyers is a different experience altogether. The
						expectation mismatch between the executive buyer and the seller
						ruptures good deals and stalls them over silly matters. But
						considering the involvement of C-level guys faster in sales deals,
						sellers must learn to conquer their fear and prepare in advance for
						the C-level buyer.
					</p>
					<Image src={EbookImg} alt="Ebook photo" />
				</div>
				<div className="w-3/5 flex flex-col gap-12">
					{ebookRightItems.map((item, index) => (
						<div key={index} className="flex items-start justify-around gap-8">
							<div className="w-16 items-center justify-center bg-rose-100 p-3 rounded-lg">
								<Image src={item.icon} alt="icon" />
							</div>
							<div>
								<h4 className="text-2xl font-bold">{item.title}</h4>
								<p className="text-lg text-slate-500 pt-3">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Ebook;
