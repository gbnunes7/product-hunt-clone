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
}

export interface Products {
	id: number;
	name: string;
	description: string;
	url: string;
	likes: number;
	tag: string;
	review: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

const MyProvider = ({ children }: { children: React.ReactNode }) => {
	const [productsData, setProductsData] = useState<Products[] | undefined>();
	const [likes, setLikes] = useState<number[]>([]);

	useEffect(() => {
		const fetchedData = async () => {
			try {
				const data = await getAll();
				if (data) {
					setProductsData(data);
					const likesArray = data.map((product) => product.likes);
					setLikes(likesArray);
					console.log(likesArray);
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
			}}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
