"use client";

import { getAll } from "@/actions";
import { MyContextProps } from "@/interface/contextProps";
import { Products } from "@/interface/productsProps";
import { createContext, useEffect, useState } from "react";

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
	const [allProducts, setAllProducts] = useState<Products[]>([]);
	const [filterResult, setFilterResult] = useState<boolean>(false);

	useEffect(() => {
		const fetchedData = async () => {
			try {
				const data = await getAll();
				if (data) {
					setProductsData(data);
					setAllProducts(data);
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
				allProducts,
				setAllProducts,
				filterResult,
				setFilterResult,
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
