import Link from "next/link";
import ListItem from "../ListItem";
import Title from "../Title";
import Button from "../Button";

const FilterBanner: React.FC = () => {
	return (
		<div className="bg-[#da552f] flex-col max-w-[350px] max-h-[350px] mx-auto my-4 flex items-center p-4 gap-4 rounded shadow-lg shadow-gray-500">
			<Title level={1} className="text-xl font-semibold text-white">
				Trending Topics
			</Title>
			<div>
				<ul className="flex flex-wrap justify-center gap-4">
					<ListItem>
						<Link href="#">
							<Button className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1 ">
								AI
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="#">
							<Button className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1">
								DevOps
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="#">
							<Button className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1">
								Marketing
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="#">
							<Button className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1">
								Tech
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="#">
							<Button className="text-base font-normal text-[#ff6154] rounded-lg bg-[#fef6f2] px-4 py-1">
								SaaS
							</Button>
						</Link>
					</ListItem>
				</ul>
			</div>
		</div>
	);
};

export default FilterBanner;
