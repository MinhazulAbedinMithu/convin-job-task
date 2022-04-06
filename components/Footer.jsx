import Image from "next/image";
import React from "react";
import {
	RiFacebookCircleLine,
	RiTwitterLine,
	RiLinkedinBoxLine,
	RiInstagramLine,
} from "react-icons/ri";

import footerLogo from "../public/assets/footer-logo.svg";

const itemsOne = [
	"About Us",
	"Careers",
	"Sales Gambit",
	"Press",
	"Success Stories",
	"Blogs",
	"E-Book",
	"Pricing",
];

const Footer = () => {
	return (
		<div className="w-full mt-5 py-14 bg-[#2a6aeb] text-white">
			<div className="container mx-auto py-5">
				<div className="flex items-center justify-between">
					<Image src={footerLogo} alt="Footer Logo" />
					<p className="text-md">
						Convin records, transcribes and analyzes all your sales calls to
						give insights on what’s working on calls and what’s not.
					</p>
					<ul className="flex items-center justify-center gap-5 text-3xl">
						<li>
							<a href="google.com">
								<RiFacebookCircleLine />
							</a>
						</li>
						<li>
							<a href="google.com">
								<RiTwitterLine />
							</a>
						</li>
						<li>
							<a href="google.com">
								<RiLinkedinBoxLine />
							</a>
						</li>
						<li>
							<a href="instagram.com">
								<RiInstagramLine />
							</a>
						</li>
					</ul>
				</div>
				<div className="flex py-10 gap-5">
					<div className="w-[15%]">
						<h4 className="text-xl font-bold pb-3">Company</h4>
						<ul>
							{itemsOne.map((item, index) => (
								<li key={index} className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="w-[20%]">
						<div className="pb-5">
							<h4 className="text-xl font-bold pb-3">
								United States of America
							</h4>
							<ul>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										2093 PHILADELPHIA
									</a>
								</li>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										PIKE #5025 CLAYMONT, DELAWARE 19703
									</a>
								</li>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										PHONE: (+1) 6282095776
									</a>
								</li>
							</ul>
						</div>
						<div className="pb-5">
							<h4 className="text-xl font-bold pb-3">India</h4>
							<ul>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										BUILDING #79, BALAJI
									</a>
								</li>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										NAGAR SG PALYA, BENGALURU, 560029
									</a>
								</li>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										PHONE1: +91-7011464590
									</a>
								</li>
								<li className="py-1">
									<a
										href="#"
										className="text-lg text-slate-200 hover:underline"
									>
										PHONE 2 : +91-8802881329
									</a>
								</li>
							</ul>
						</div>
						<div className="pb-5">
							<h4 className="text-xl font-bold pb-3">Email</h4>
							<ul>
								<li>
									<a
										href="mailto:contact@convin.ai"
										className="text-lg text-slate-200 hover:underline"
									>
										contact@convin.ai
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-[20%]">
						<h4 className="text-xl font-bold pb-3">Products</h4>
						<ul>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Productivity Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Analytics
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Call Analytics software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Reporting Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Strategy Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Onboarding Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Training Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Coaching
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Call Recording Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Intelligence
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Voice of Customer Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Gong
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Wingman
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Jiminny
								</a>
							</li>
						</ul>
					</div>
					<div className="w-[20%]">
						<ul className="pt-10">
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Productivity Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Analytics
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Call Analytics software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Reporting Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Strategy Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Onboarding Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Training Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Coaching
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Call Recording Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Intelligence
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Voice of Customer Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Gong
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Wingman
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Jiminny
								</a>
							</li>
						</ul>
					</div>
					<div className="w-[20%]">
						<ul className="pt-10">
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Productivity Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Analytics
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Call Analytics software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Reporting Tool
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Strategy Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Onboarding Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Training Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Sales Coaching
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Call Recording Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Conversation Intelligence
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Voice of Customer Software
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Gong
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Wingman
								</a>
							</li>
							<li className="py-1">
								<a href="" className="text-lg text-slate-200 hover:underline">
									Convin VS Jiminny
								</a>
							</li>
						</ul>
					</div>
				</div>
				<ul className="flex pt-5 items-center text-xl">
					<li>
						<a href="#">Terms & Conditions</a>
					</li>
					<li className="w-3 h-3 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li className="w-3 h-3 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Security</a>
					</li>
				</ul>
				<ul className="flex pt-5 items-center text-lg">
					<li>
						<a href="#">Refund Policy</a>
					</li>
					<li className="w-2 h-2 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Cancellation Policy</a>
					</li>
					<li className="w-2 h-2 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Dispute Policy</a>
					</li>
					<li className="w-2 h-2 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Shipping Policy</a>
					</li>
					<li className="w-2 h-2 rounded-full bg-white mx-3"></li>
					<li>
						<a href="#">Return Policy</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
