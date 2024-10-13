import ListItem from "../ListItem";
import Title from "../Title";
import Button from "../Button";
import useMyContext from "@/hooks/useMyContext";

const FilterBanner: React.FC = () => {
	const { onClickFilter, onClearFilter, filterResult, filterTags } =
		useMyContext()!;

	return (
		<div className="bg-[#da552f] flex-col max-w-[350px]  md:min-w-[500px] max-h-[350px] mx-auto md:my-8 my-4 flex items-center p-4 gap-4 rounded shadow-lg shadow-gray-500">
			<Title level={1} className="text-xl font-semibold text-white">
				Trending Topics
			</Title>
			<div>
				<ul className="flex flex-wrap justify-center gap-4">
					{filterTags?.map((tag) => (
						<ListItem key={tag}>
							<div className="flex items-center space-x-2">
								<Button
									onClick={() => onClickFilter(tag)}
									className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1"
								>
									{tag}
								</Button>
							</div>
						</ListItem>
					))}
				</ul>
				{filterResult && (
					<div className="text-center mt-4">
						<Button
							className="text-base font-semibold text-blue-600 rounded-lg bg-white px-4 py-1"
							onClick={() => onClearFilter()}
						>
							Clear Filter
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default FilterBanner;
