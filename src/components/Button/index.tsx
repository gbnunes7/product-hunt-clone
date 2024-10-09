import { ButtonProps } from "@/interface/buttonProps";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};

export default Button;
