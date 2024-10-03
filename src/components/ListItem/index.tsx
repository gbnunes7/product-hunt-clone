interface ListItemProps {
	children: React.ReactNode;
	className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => {
	return <li {...rest}>{children}</li>;
};

export default ListItem;
