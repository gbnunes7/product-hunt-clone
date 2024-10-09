import { Product } from "@prisma/client";

export interface UpVoteProps {
	likes: number;
	product: Product;
	index: number;
}
