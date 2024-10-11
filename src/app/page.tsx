"use client";

import CardProduct from "@/components/CardProduct";
import CardProductReview from "@/components/CardProductReview";
import FilterBanner from "@/components/FilterBanner";
import ListItem from "@/components/ListItem";
import Title from "@/components/Title";
import useMyContext from "@/hooks/useMyContext";

export default function Home() {
	const { productsData, likes, error } = useMyContext()!;

	return (
		<main className="px-4 my-8 flex flex-col w-full overflow-auto">
			<FilterBanner />
			<div className="flex flex-col w-full md:flex-row md:gap-8">
				<div className="flex flex-col grow md:border-r-[1px] md:pr-[32px]">
					<div className="flex items-center justify-center my-8 border-b-[1px] pb-[15px] ">
						<Title className="text-black font-bold text-2xl" level={1}>
							Top Products
						</Title>
					</div>
					{error && <span className="text-red-500 text-sm mb-8">{error}</span>}
					<ul>
						{productsData &&
							productsData.map((item, index) => (
								<ListItem key={index}>
									<CardProduct
										index={index}
										productDescription={item.description}
										productName={item.name}
										productTags={item.tag}
										productLikes={likes[index]}
										product={item}
									/>
								</ListItem>
							))}
					</ul>
				</div>
				{productsData && (
					<div className="flex flex-col lg:w-[25%]">
						<div className="flex items-center justify-center my-8 border-b-[1px] md:border-b-0 pb-[15px]">
							<Title level={3} className="text-black font-bold text-2xl">
								Reviewed Products
							</Title>
						</div>
						<ul>
							{productsData
								? productsData
										.filter((item) => item?.review)
										.map((item) => (
											<ListItem key={item?.id}>
												<CardProductReview
													productDescription={item?.description}
													productName={item?.name}
													productLikes={item?.likes}
												/>
											</ListItem>
										))
								: null}
						</ul>
					</div>
				)}
			</div>
		</main>
	);
}
