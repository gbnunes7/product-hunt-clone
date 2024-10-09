import { Dispatch, SetStateAction } from "react";
import { Products } from "./productsProps";

export interface MyContextProps {
	productsData: Products[] | undefined;
	setProductsData: Dispatch<SetStateAction<Products[] | undefined>>;
	likes: number[];
	setLikes: Dispatch<SetStateAction<number[]>>;
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
	error: string;
	setError: Dispatch<SetStateAction<string>>;
	productDescription: string;
	setProductDescription: Dispatch<SetStateAction<string>>;
	productName: string;
	setProductName: Dispatch<SetStateAction<string>>;
	productTags: string[];
	setProductTags: Dispatch<SetStateAction<string[]>>;
	productImageUrl: string;
	setProductImageUrl: Dispatch<SetStateAction<string>>;
	productIsReviewed: boolean;
	setProductIsReviewed: Dispatch<SetStateAction<boolean>>;
}
