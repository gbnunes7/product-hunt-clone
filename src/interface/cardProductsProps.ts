import { Product } from "@prisma/client";

export interface CardProductProps {
	productName: string;
	productDescription: string;
	productLikes: number;
	productTags: string[];
	product: Product;
	index: number;
}
