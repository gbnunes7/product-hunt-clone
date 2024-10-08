import { increment, searchQueryDB } from "@/actions";
import { MyContext, Products } from "@/context/mycontext";
import { useContext, useEffect } from "react";

const useMyContext = () => {
	const context = useContext(MyContext)!;

	if (!context) {
		console.log("Error: useMyContext must be used within a MyProvider");
	}

	const {
		productsData,
		likes,
		setLikes,
		setProductsData,
		searchQuery,
		setSearchQuery,
		error,
		setError,
	} = context;

	const handleLike = (index: number) => {
		if (productsData) {
			const updatedLikes = [...likes];
			updatedLikes[index] += 1;

			const updatedProductsData = productsData.map((product, i) =>
				i === index ? { ...product, likes: product.likes + 1 } : product
			);

			setLikes(updatedLikes);
			setProductsData(updatedProductsData);
		}
	};
	const handleButtonClick = (index: number, product: Products) => {
		handleLike(index);
		increment(product);
	};

	productsData?.sort((a, b) => b.likes - a.likes);
	likes?.sort((a, b) => b - a);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const onHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const res = await searchQueryDB(searchQuery);

			if (!res) {
				throw new Error("No product found or an error occurred");
			}
			setError("");
			setProductsData([res]);
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error searching for product:", error.message);
				setError(`Error searching for product: ${error.message}`);
			} else {
				console.error("Unknown error:", error);
				setError("Unknown error");
			}
		}
	};

	return {
		handleLike,
		handleButtonClick,
		productsData,
		likes,
		handleSearch,
		onHandleSubmit,
		searchQuery,
		error,
	};
};

export default useMyContext;
