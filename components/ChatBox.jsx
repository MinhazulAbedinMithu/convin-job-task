import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";

const ChatBox = () => {
	return (
		<div className="fixed bottom-16 right-10 text-white bg-blue-700 text-4xl rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-xl p-5 cursor-pointer">
			<BiMessageSquareDetail />
		</div>
	);
};

export default ChatBox;
