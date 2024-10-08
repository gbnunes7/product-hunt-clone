import Button from "@/components/Button";
import Title from "@/components/Title";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import cadeado from "./pngwing.com.png";
const NotAuthorized: React.FC = () => {
	return (
		<div className="mx-4 flex justify-center flex-col items-center gap-8 my-auto">
			<Image src={cadeado} alt="locker image" width={100} height={100} />
			<Title className="font-semibold text-2xl text-black" level={5}>
				You must be logged in to register a new product.
			</Title>
			<p>
				Please register on the Product Hunt clone to gain authorization to
				submit a new product
			</p>

			<SignUpButton>
				<Button className="text-base font-normal text-[#ff6154] rounded bg-[#fef6f2] px-4 py-1.5">
					Subscribe
				</Button>
			</SignUpButton>
		</div>
	);
};

export default NotAuthorized;
