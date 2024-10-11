import Image from "next/image";
import UpVote from "../Upvote";
import useMyContext from "@/hooks/useMyContext";
import { CardProductProps } from "@/interface/cardProductsProps";
import Button from "../Button";
import { MdDelete } from "react-icons/md";
import { SignedIn } from "@clerk/nextjs";

const CardProduct: React.FC<CardProductProps> = ({
	productName,
	productDescription,
	productTags,
	productLikes,
	product,
	index,
}) => {
	const { productsData, onDeleteProduct } = useMyContext()!;
	return (
		<div className="mb-4 p-4 flex flex-row items-start gap-2 border rounded shadow-md">
			<div className="flex flex-col justify-center">
				<Image
					alt="Logo"
					src={productsData![index].url}
					width={50}
					height={50}
					className="py-4 mr-2"
				/>
				<SignedIn>
					<Button onClick={() => onDeleteProduct(index, product)}>
						<MdDelete className="text-gray-400" />
					</Button>
				</SignedIn>
			</div>
			<div className="flex-1 border-r-[1px]">
				<span className="font-bold">{productName}</span>
				<p className="text-gray-600">{productDescription}</p>
				<div className="flex flex-wrap mt-2">
					{productTags?.map(
						(productTag) =>
							productTag && (
								<span
									key={productTag}
									className="bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
								>
									{productTag}
								</span>
							)
					)}
				</div>
			</div>
			<UpVote index={index} product={product} likes={productLikes} />
		</div>
	);
};

export default CardProduct;
