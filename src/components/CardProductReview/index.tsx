import Image from "next/image";
import logo from "../../app/logo.png";

interface CardProductReview {
	productName: string;
	productDescription: string;
	productLikes: number;
}
const CardProductReview: React.FC<CardProductReview> = ({
	productName,
	productDescription,
	productLikes,
}) => {
	return (
		<div className="mb-4 p-4 flex flex-row items-start gap-2 border rounded shadow-md">
			<Image alt="Logo" src={logo} width={50} height={50} />
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
