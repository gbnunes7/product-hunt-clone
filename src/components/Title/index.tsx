interface TitleProps {
	children: React.ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	className: string;
}

const Title: React.FC<TitleProps> = ({ children, level, ...rest }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;
	return <Tag {...rest}>{children}</Tag>;
};

export default Title;
