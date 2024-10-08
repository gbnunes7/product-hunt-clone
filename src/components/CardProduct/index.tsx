import Image from "next/image";
import logo from "../../app/logo.png";
import UpVote from "../Upvote";
import { Product } from "@prisma/client";

interface CardProductProps {
	productName: string;
	productDescription: string;
	productLikes: number;
	productTags: string;
	product: Product;
	index: number
}


const CardProduct: React.FC<CardProductProps> = ({
	productName,
	productDescription,
	productTags,
	productLikes,
	product,
	index,
}) => {
	return (
		<div className="mb-4 p-4 flex flex-row items-start gap-2 border rounded shadow-md">
			<Image alt="Logo" src={logo} width={50} height={50} />
			<div className="flex-1 border-r-[1px]">
				<span className="font-bold">{productName}</span>
				<p className="text-gray-600">{productDescription}</p>
				<div className="flex flex-wrap mt-2">
					<span className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
						{productTags}
					</span>
				</div>
			</div>
			<UpVote index={index} product={product} likes={productLikes} />
		</div>
	);
};

export default CardProduct;
