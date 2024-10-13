"use client";

import {
	createProduct,
	deleteProduct,
	filterByTag,
	increment,
	searchQueryDB,
} from "@/actions";
import { MyContext } from "@/context/mycontext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Products } from "@/interface/productsProps";

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
		productDescription,
		productName,
		productImageUrl,
		productIsReviewed,
		productTags,
		setProductDescription,
		setProductName,
		setProductImageUrl,
		setProductIsReviewed,
		setProductTags,
		allProducts,
		filterResult,
		setAllProducts,
		setFilterResult,
	} = context;

	const router = useRouter();
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
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newProduct = {
			name: productName.trim(),
			description: productDescription.trim(),
			likes: 0,
			review: productIsReviewed,
			url: productImageUrl.trim(),
			tag: productTags.map((tag) => tag.trim()),
		} as Products;

		if (!newProduct) {
			clearForm();
			return setError("newProduct is null or undefined");
		}

		if (!newProduct.url.startsWith("https://")) {
			clearForm();
			return setError("Url must start with https://");
		}

		if (
			!newProduct.name ||
			!newProduct.description ||
			!newProduct.url ||
			!newProduct.tag
		) {
			clearForm();
			return setError("All fields are required");
		}

		try {
			const res = await createProduct(newProduct);
			if (!res) {
				return setError("Error creating product");
			}

			if (likes) {
				setLikes([...likes, newProduct.likes]);
			}

			if (productsData) {
				setProductsData([...productsData, newProduct]);
			} else {
				setProductsData([newProduct]);
			}

			clearForm();
			setError("");
			await new Promise((resolve) => setTimeout(resolve, 500));
			router.push("/");
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error creating product:", error.message);
				setError("Error creating product: " + error.message);
			} else {
				console.error("Unknown error:", error);
				setError("Unknown error");
			}
		}
	};

	const clearForm = () => {
		setProductName("");
		setProductDescription("");
		setProductImageUrl("");
		setProductTags([]);
		setProductIsReviewed(false);
	};

	useEffect(() => {
		setError("");
	}, [setError]);

	const onDeleteProduct = async (
		index: number,
		product: Products | undefined
	) => {
		if (!product) {
			console.error("onDeleteProduct: product is undefined");
			return;
		}

		try {
			const res = await deleteProduct(product);
			if (res) {
				setProductsData(allProducts.filter((p) => p.id !== product.id));
				setAllProducts(allProducts.filter((p) => p.id !== product.id));
			} else {
				console.error("onDeleteProduct: deleteProduct returned false");
			}
		} catch (err) {
			console.error("onDeleteProduct: error deleting product", err);
		}
	};
	const onClickFilter = async (tag: string) => {
		const res = await filterByTag(tag);

		if (!res) {
			setError("Error filtering by tag");
			setFilterResult(false);
			return false;
		}

		setProductsData(res);
		setFilterResult(true);
	};

	const onClearFilter = () => {
		setProductsData(allProducts);
		setFilterResult(false);
	};

	return {
		handleLike,
		handleButtonClick,
		productsData,
		likes,
		handleSearch,
		onHandleSubmit,
		searchQuery,
		onDeleteProduct,
		error,
		productDescription,
		productName,
		productImageUrl,
		productIsReviewed,
		productTags,
		setProductDescription,
		setProductName,
		setProductImageUrl,
		setProductIsReviewed,
		setProductTags,
		onSubmit,
		clearForm,
		onClickFilter,
		onClearFilter,
		filterResult,
	};
};

export default useMyContext;
