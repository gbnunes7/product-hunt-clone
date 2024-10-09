interface InputProps {
	className: string;
	type: string;
	name: string;
	id: string;
	onSubmit?: () => void;
	placeholder: string;
	autoComplete: string;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
}
const InputSearch: React.FC<InputProps> = ({ ...rest }) => {
	return <input {...rest} />;
};

export default InputSearch;
