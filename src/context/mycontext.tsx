"use client";

import { getAll } from "@/actions";
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
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

export interface Products {
	id: number;
	name: string;
	description: string;
	url: string;
	likes: number;
	tag: string[];
	review: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
	const [productsData, setProductsData] = useState<Products[] | undefined>();
	const [likes, setLikes] = useState<number[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [error, setError] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productName, setProductName] = useState("");
	const [productTags, setProductTags] = useState<string[]>([]);
	const [productImageUrl, setProductImageUrl] = useState("");
	const [productIsReviewed, setProductIsReviewed] = useState(false);

	useEffect(() => {
		const fetchedData = async () => {
			try {
				const data = await getAll();
				if (data) {
					setProductsData(data);
					const likesArray = data.map((product) => product.likes);
					setLikes(likesArray);
				} else {
					console.error("No data retrieved from getAll() function");
				}
			} catch (err) {
				console.error("Error fetching data:", err);
			}
		};
		fetchedData();
	}, []);

	return (
		<MyContext.Provider
			value={{
				productsData,
				setProductsData,
				likes,
				setLikes,
				searchQuery,
				setSearchQuery,
				error,
				setError,
				productDescription,
				setProductDescription,
				productName,
				setProductName,
				productTags,
				setProductTags,
				productImageUrl,
				setProductImageUrl,
				productIsReviewed,
				setProductIsReviewed,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
