import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";

import logo from "../public/assets/footer-logo.svg";

const routes = [
	{
		title: "Pricing",
		slug: "/pricing",
	},
	{
		title: "Solutions",
		slug: "/solutions",
		subRoutes: [
			{
				title: "Account Execs",
				slug: "/account-execs",
			},
			{
				title: "Sales Management",
				slug: "/sales-management",
			},
			{
				title: "Market Intelligence",
				slug: "/market-intelligence",
			},
			{
				title: "Sales Strategy",
				slug: "/sales-strategy",
			},
		],
	},
	{
		title: "Integrations",
		slug: "/integrations",
		subRoutes: [
			{
				title: "Team Messaging",
				slug: "/team-messaging",
			},
			{
				title: "Video Conferencing",
				slug: "/video-conferencing",
			},
			{
				title: "Calendar",
				slug: "/calendar",
			},
			{
				title: "Dialer",
				slug: "/dialer",
			},
		],
	},
	{
		title: "Resources",
		slug: "/resources",
		subRoutes: [
			{
				title: "Blogs",
				slug: "/blogs",
			},
			{
				title: "E-book",
				slug: "/e-book",
			},
			{
				title: "News",
				slug: "/news",
			},
			{
				title: "Case studies",
				slug: "/case-studies",
			},
		],
	},
	{
		title: "About Us",
		slug: "/about-us",
	},
];

const Dropdown = ({ subRoutes, dropdown, depthLevel }) => {
	depthLevel += 1;

	return (
		<ul
			className={`absolute right-0 left-auto z-999 list-none bg-white w-64 pl-5 py-2 rounded-md text-gray-800 shadow-lg shadow-slate-300 ${
				depthLevel > 1 ? "absolute left-full -top-1" : ""
			} ${dropdown ? "block" : "hidden"}`}
		>
			{subRoutes.map((subRoute) => (
				<MenuItems
					route={subRoute}
					key={subRoute.slug}
					depthLevel={depthLevel}
				/>
			))}
		</ul>
	);
};

const MenuItems = ({ route, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);

	console.log(dropdown);

	const ref = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (dropdown && ref.current && !ref.current.contains(e.target)) {
				setDropdown(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};

	return (
		<li
			className="relative text-xl"
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{route.subRoutes ? (
				<React.Fragment>
					<button
						className="border-none bg-transparent cursor-pointer w-full px-1 py-2 flex items-center gap-1"
						type="button"
						onClick={() => setDropdown((prev) => !prev)}
					>
						<Link href={route.slug}>
							<a>{route.title}</a>
						</Link>
						<span className="text-sm text-cyan-300">
							{depthLevel > 0 ? <BiRightArrow /> : <BiDownArrow />}
						</span>
					</button>
					<Dropdown
						depthLevel={depthLevel}
						subRoutes={route.subRoutes}
						dropdown={dropdown}
					/>
				</React.Fragment>
			) : (
				<Link href={route.slug}>
					<a className="block w-full px-1 py-2 border-b-2 border-transparent hover:border-white">
						{route.title}
					</a>
				</Link>
			)}
		</li>
	);
};

const Header = () => {
	return (
		<header className="w-full bg-blue-600 text-white sticky top-0 z-[1000] shadow-lg shadow-blue-600/50">
			<div className="container flex items-center w-full mx-auto py-4 justify-between">
				<div className="logo">
					<Link href="/">
						<a className="font-bold text-3xl">
							<Image src={logo} alt="logo" />
						</a>
					</Link>
				</div>

				<nav className="flex items-center justify-between gap-8">
					<ul className="flex list-none items-center gap-8">
						{routes.map((route) => {
							const depthLevel = 0;
							return (
								<MenuItems
									key={route.slug}
									route={route}
									depthLevel={depthLevel}
								/>
							);
						})}
					</ul>
					<div className="flex items-center justify-center gap-5">
						<button className="bg-white text-blue-700 border-2 border-blue-600 px-3 py-2 rounded-3xl font-bold text-xl hover:bg-transparent hover:border-white hover:text-white transition-all duration-300">
							Sign Up
						</button>
						<button className="bg-transparent text-white border-2 border-white px-3 py-2 rounded-3xl font-bold text-xl hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
							Log In
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
