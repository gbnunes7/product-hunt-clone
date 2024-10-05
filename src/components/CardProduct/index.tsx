import Image from "next/image";
import logo from "../../app/logo.png";
import UpVote from "../Upvote";

interface CardProductProps {
	productName: string;
	productDescription: string;
	productLikes: string;
	productTags: string[];
}

const CardProduct: React.FC<CardProductProps> = ({
	productName,
	productDescription,
	productTags,
	productLikes,
}) => {
	return (
		<div className="mb-4 p-4 flex flex-row items-start gap-2 border rounded shadow-md">
			<Image alt="Logo" src={logo} width={50} height={50} />
			<div className="flex-1 border-r-[1px]">
				<span className="font-bold">{productName}</span>
				<p className="text-gray-600">{productDescription}</p>
				<div className="flex flex-wrap mt-2">
					{productTags.map((tag, index) => (
						<span
							key={index}
							className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			<UpVote likes={productLikes} />
		</div>
	);
};

export default CardProduct;
