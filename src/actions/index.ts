"use server";

import { Products } from "@/interface/productsProps";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function getAll() {
	try {
		const response = await db.product.findMany({
			orderBy: [
				{
					likes: "desc",
				},
			],
		});
		return response;
	} catch (error) {
		console.error("Error fetching products:", error);
		return undefined;
	}
}

export async function increment(product: Products) {
	try {
		await db.product.update({
			where: {
				id: product.id,
			},
			data: {
				likes: {
					increment: 1,
				},
			},
		});

		revalidatePath("/");
	} catch (err) {
		console.error("Error incrementing likes:", err);
	}
}

export async function searchQueryDB(query: string) {
	try {
		const response = await db.product.findFirst({
			where: {
				name: {
					contains: query,
					mode: "insensitive",
				},
			},
		});

		if (response === null) {
			throw new Error("Product not found");
		}

		return response;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error searching for product:", error.message);
		} else {
			console.error("Unknown error:", error);
		}
	}
}
export async function filterByTag(tag: string) {
	try {
		const response = await db.product.findMany();

		const lowerCaseTag = tag.toLowerCase().trim();

		const filteredProducts = response.filter((product) =>
			product.tag.some(
				(productTag) => productTag.toLowerCase() === lowerCaseTag
			)
		);

		if (filteredProducts.length === 0) {
			throw new Error("Product not found");
		}

		return filteredProducts;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error searching for product:", error.message);
		} else {
			console.error("Unknown error:", error);
		}
	}
}

export async function createProduct(product: Products) {
	try {
		await db.product.create({
			data: {
				...product,
			},
		});
		return true;
	} catch (error) {
		console.error("Error creating product:", error);
		return false;
	}
}

export async function deleteProduct(product: Products) {
	try {
		await db.product.delete({
			where: {
				id: product.id,
			},
		});
		return true;
	} catch (error) {
		console.error("Error deleting product:", error);
		return false;
	}
}
