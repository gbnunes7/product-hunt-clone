"use client";

import CardProduct from "@/components/CardProduct";
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
		},
		{
			id: 2,
			nome: "Tênis Running",
			descricao: "Tênis leve e confortável para corridas.",
			tags: ["esporte", "corrida", "conforto"],
			likes: "230",
		},
		{
			id: 3,
			nome: "Relógio Smart",
			descricao: "Relógio inteligente com monitoramento de atividades.",
			tags: ["tecnologia", "fitness", "wearable"],
			likes: "320",
		},
		{
			id: 4,
			nome: "Mochila Adventure",
			descricao: "Mochila resistente ideal para trilhas e aventuras.",
			tags: ["aventura", "mochila", "trilha"],
			likes: "180",
		},
		{
			id: 5,
			nome: "Fone Bluetooth",
			descricao: "Fones sem fio com cancelamento de ruído.",
			tags: ["tecnologia", "audio", "sem fio"],
			likes: "400",
		},
	];

	products.sort((a, b) => Number(b.likes) - Number(a.likes));

	return (
		<main className="px-4 flex flex-col flex-1 overflow-auto">
			<FilterBanner />
			<div className="flex ites-center justify-center my-8 border-b-[1px] pb-[15px]">
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
			<div>
				<Title level={3} className="text-black font-bold text-2xl">
					Reviewed Products
				</Title>
			</div>
		</main>
	);
}
