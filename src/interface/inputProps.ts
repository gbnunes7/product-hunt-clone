export interface InputProps {
	className: string;
	type: string;
	name: string;
	id: string;
	onSubmit?: () => void;
	placeholder: string;
	autoComplete: string;
	value?: string | number | string[] | undefined;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
}
