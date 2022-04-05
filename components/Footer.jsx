import Image from "next/image";
import React from "react";
import {
	RiFacebookCircleLine,
	RiTwitterLine,
	RiLinkedinBoxLine,
	RiInstagramLine,
} from "react-icons/ri";

import footerLogo from "../public/assets/footer-logo.svg";

const Footer = () => {
	return (
		<div className="w-full mt-5 bg-blue-600 text-white">
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
			</div>
		</div>
	);
};

export default Footer;
