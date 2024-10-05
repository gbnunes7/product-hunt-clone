import Image from "next/image";
import logo from "../../app/logo.png";
import Button from "../Button";
import MenuHamburguer from "../MenuHamburguer";
import ListItem from "../ListItem";
import InputSearch from "../Input";

const Header: React.FC = () => {
	return (
		<header className="flex flex-row items-center px-6 py-3 w-full h-[90px] border-b-[1px] md:justify-between">
			<div className="flex flex-1 md:flex-initial md:w-[50px] flex-row items-center gap-5">
				<MenuHamburguer />
				<Image src={logo} alt="logo" width={40} height={40} />
			</div>
			<div className="hidden lg:block relative md:hidden">
				<span className="absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						className="w-5 h-5 text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4.35-4.35"
						/>
					</svg>
				</span>
				<InputSearch
					autoComplete="off"
					id="searchproduct"
					name="q"
					type="text"
					placeholder="Search"
					className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-none focus:border-blue-500 text-gray-700 placeholder-gray-400"
				/>
			</div>
			<div>
				<ul className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-8">
					<ListItem>
						<a href="#">Product</a>
					</ListItem>
					<ListItem>
						<a href="#">New Product</a>
					</ListItem>
					<ListItem>
						<a href="#">About</a>
					</ListItem>
				</ul>
			</div>
			<div className="flex flex-row items-center justify-end gap-4">
				<Button className="text-base font-normal text-[#ff6154] rounded bg-[#fef6f2] px-4 py-1.5">
					Subscribe
				</Button>
				<Button className="text-base font-normal text-white rounded bg-[#da552f] px-4 py-1.5">
					Sign in
				</Button>
			</div>
		</header>
	);
};

export default Header;
