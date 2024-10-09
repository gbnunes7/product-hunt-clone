import useMyContext from "@/hooks/useMyContext";
import { CardProductReviewProps } from "@/interface/cardProductReviewProps";
import Image from "next/image";
const CardProductReview: React.FC<CardProductReviewProps> = ({
	productName,
	productDescription,
	productLikes,
}) => {
	const { productsData } = useMyContext()!;
	return (
		<div className="mb-4 p-4 flex flex-row items-start gap-2 border rounded shadow-md">
			<Image alt="Logo" src={productsData![0].url} width={50} height={50} />
			<div className="flex-1">
				<p className="font-bold">{productName}</p>
				<p className="text-gray-600">{productDescription}</p>
				<p className="font-semibold">
					{" "}
					Received {productLikes} likes from users.
				</p>
			</div>
		</div>
	);
};

export default CardProductReview;
