import Image from "next/image";
import logo from "../../app/logo.png";
import Button from "../Button";
import MenuHamburguer from "../MenuHamburguer";

const Header: React.FC = () => {
	return (
		<header className="flex flex-row items-center px-6 py-3 w-full h-[90px] border-b-[1px]">
			<div className="flex flex-1 flex-row items-center gap-5">
				<MenuHamburguer />
				<Image src={logo} alt="logo" width={40} height={40} />
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
