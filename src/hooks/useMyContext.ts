import { increment } from "@/actions";
import { MyContext, Products } from "@/context/mycontext";
import { useContext } from "react";

const useMyContext = () => {
	const context = useContext(MyContext)!;

	if (!context) {
		console.log("Error: useMyContext must be used within a MyProvider");
	}

	const { productsData, likes, setLikes, setProductsData } = context;

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

	return {
		handleLike,
		handleButtonClick,
	};
};

export default useMyContext;
