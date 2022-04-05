import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";

const Layout = ({ children }) => {
	return (
		<>
			<NewsLetter />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
