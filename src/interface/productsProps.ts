export interface Products {
	id: number;
	name: string;
	description: string;
	url: string;
	likes: number;
	tag: string[];
	review: boolean;
	createdAt: Date;
	updatedAt: Date;
}