import Button from "../Button";
import useMyContext from "@/hooks/useMyContext";
import { UpVoteProps } from "@/interface/upVotesProps";

const UpVote: React.FC<UpVoteProps> = ({ likes, product, index }) => {
	const { handleButtonClick } = useMyContext()!;

	return (
		<div className="flex flex-col w-[50px] items-center my-auto">
			<Button
				onClick={() => handleButtonClick(index, product)}
				className="flex items-center flex-col"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polygon points="50,15 90,85 10,85" fill="gray" />
				</svg>
				<span className="text-12 font-normal text-gray-500">{likes}</span>
			</Button>
		</div>
	);
};

export default UpVote;
