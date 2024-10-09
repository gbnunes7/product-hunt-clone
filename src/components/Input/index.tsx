import { InputProps } from "@/interface/inputProps";

const InputSearch: React.FC<InputProps> = ({ ...rest }) => {
	return <input {...rest} />;
};

export default InputSearch;
