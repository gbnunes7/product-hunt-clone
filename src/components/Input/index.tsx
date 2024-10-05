interface InputProps {
    className: string
    type: string
    name: string
    id: string
    onSubmit?: () => void
    placeholder: string
    autocomplete: string
}
const InputSearch: React.FC<InputProps> = ({ ...rest }) => {
	return <input {...rest} />;
};

export default InputSearch;
