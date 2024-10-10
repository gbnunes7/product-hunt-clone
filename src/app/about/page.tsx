import Title from "@/components/Title";
import Image from "next/image";
import nextImg from "./next.png";
import tsImg from "./typescript.png";
import tailwindImg from "./tailwind.png";
export default function About() {
	return (
		<div className="flex items-center flex-col my-4 gap-4">
			<Title level={4} className="text-3xl font-bold">
				About
			</Title>
			<div className="bg-white p-10 shadow-gray-500 w-4/5 md:w-2/5 border rounded shadow-md flex flex-col gap-4">
				<p>
					This is a website clone inspired by &quot;Product Hunt&quot;, designed
					to track the most valuable apps and offer a variety of features.
				</p>
				<div className="flex gap-4">
					<Image src={nextImg} alt="NextJS logo" width={30} height={30} />
					<Image src={tsImg} alt="Typescript Logo" width={30} height={30} />
					<Image src={tailwindImg} alt="Tailwind Logo" width={30} height={30} />
				</div>
			</div>
		</div>
	);
}
