"use client";

import CardProduct from "@/components/CardProduct";
import CardProductReview from "@/components/CardProductReview";
import FilterBanner from "@/components/FilterBanner";
import ListItem from "@/components/ListItem";
import Title from "@/components/Title";

export default function Home() {
	const products = [
		{
			id: 1,
			nome: "Camiseta Estampada",
			descricao: "Camiseta de algodão com estampa criativa.",
			tags: ["moda", "estampa", "algodão"],
			likes: "150",
			review: true,
		},
		{
			id: 2,
			nome: "Tênis Running",
			descricao: "Tênis leve e confortável para corridas.",
			tags: ["esporte", "corrida", "conforto"],
			likes: "230",
			review: true,
		},
		{
			id: 3,
			nome: "Relógio Smart",
			descricao: "Relógio inteligente com monitoramento de atividades.",
			tags: ["tecnologia", "fitness", "wearable"],
			likes: "320",
			review: false,
		},
		{
			id: 4,
			nome: "Mochila Adventure",
			descricao: "Mochila resistente ideal para trilhas e aventuras.",
			tags: ["aventura", "mochila", "trilha"],
			likes: "180",
			review: false,
		},
		{
			id: 5,
			nome: "Fone Bluetooth",
			descricao: "Fones sem fio com cancelamento de ruído.",
			tags: ["tecnologia", "audio", "sem fio"],
			likes: "400",
			review: true,
		},
	];

	const productsReview = products.filter((product) => product.review);

	products.sort((a, b) => Number(b.likes) - Number(a.likes));
	productsReview.sort((a, b) => Number(b.likes) - Number(a.likes));

	return (
		<main className="px-4 flex flex-col flex-1 overflow-auto">
			<FilterBanner />
			<div className="flex justify-center my-8 border-b-[1px] pb-[15px]">
				<Title className="text-black font-bold text-2xl" level={1}>
					Top Products
				</Title>
			</div>
			<ul>
				{products.map((item) => (
					<ListItem key={item.id}>
						<CardProduct
							productDescription={item.descricao}
							productName={item.nome}
							productTags={item.tags}
							productLikes={item.likes}
						/>
					</ListItem>
				))}
			</ul>
			{productsReview.length > 0 && (
				<div className="flex flex-col justify-center">
					<div className="flex items-center justify-center my-8 border-b-[1px] pb-[15px]">
						<Title level={3} className="text-black font-bold text-2xl">
							Reviewed Products
						</Title>
					</div>
					{productsReview.map((item) => (
						<CardProductReview
							productDescription={item.descricao}
							productName={item.nome}
							productLikes={item.likes}
						/>
					))}
				</div>
			)}
		</main>
	);
}
