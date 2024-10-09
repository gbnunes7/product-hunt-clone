interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};

export default Button;
