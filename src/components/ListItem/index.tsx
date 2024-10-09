import { ListItemProps } from "@/interface/listItemProps";
const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => {
	return <li {...rest}>{children}</li>;
};

export default ListItem;
