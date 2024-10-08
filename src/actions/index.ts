"use server";

import { Products } from "@/context/mycontext";
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
