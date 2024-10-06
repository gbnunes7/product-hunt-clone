"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../Button";
import Link from "next/link";
import ListItem from "../ListItem";

const MenuHamburguer: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex items-center md:hidden">
			<Button onClick={toggleMenu} className="focus:outline-none">
				<svg width="40" height="40" viewBox="0 0 40 40" className="block">
					<motion.line
						x1="10"
						y1="12"
						x2="30"
						y2="12"
						stroke="black"
						strokeWidth="3"
						strokeLinecap="round"
						animate={{
							rotate: isOpen ? 45 : 0,
							x: isOpen ? 3 : 0,
							y: isOpen ? 12 : 0,
						}}
						transition={{ duration: 0.4 }}
					/>
					<motion.line
						x1="10"
						y1="20"
						x2="30"
						y2="20"
						stroke="black"
						strokeWidth="3"
						strokeLinecap="round"
						animate={{ opacity: isOpen ? 0 : 1 }}
						transition={{ duration: 0.2 }}
					/>
					<motion.line
						x1="10"
						y1="28"
						x2="30"
						y2="28"
						stroke="black"
						strokeWidth="3"
						strokeLinecap="round"
						animate={{
							rotate: isOpen ? -45 : 0,
							x: isOpen ? 3 : 0,
							y: isOpen ? -5 : 0,
						}}
						transition={{ duration: 0.4 }}
					/>
				</svg>
			</Button>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
				transition={{ duration: 0.5 }}
				className={`absolute top-20 left-0 w-full bg-[#fef6f2] ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<ul className="flex flex-col text-center justify-center h-[250px]">
					<Link
						href="/"
						className="text-[#ff6154] hover:text-[#da552f] hover:bg-[#e07458] hover:text-white w-full h-full transition-colors duration-300 ease-in-out"
						onClick={toggleMenu}
					>
						<ListItem className="py-6 text-base">Products</ListItem>
					</Link>
					<Link
						href="/newproduct"
						className="text-[#ff6154] hover:text-[#da552f] hover:bg-[#e07458] hover:text-white w-full h-full transition-colors duration-300 ease-in-out"
						onClick={toggleMenu}
					>
						<ListItem className="py-6 text-base">New Product</ListItem>
					</Link>
					<Link
						href="/about"
						className="text-[#ff6154] hover:text-[#da552f] hover:bg-[#e07458] hover:text-white w-full h-full transition-colors duration-300 ease-in-out"
						onClick={toggleMenu}
					>
						<ListItem className="py-6 text-base">About</ListItem>
					</Link>
				</ul>
			</motion.div>
		</div>
	);
};

export default MenuHamburguer;
