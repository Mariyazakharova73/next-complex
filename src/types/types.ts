export interface Product {
	id: number;
	image_url: string;
	title: string;
	description: string;
	price: number;
}

export interface Review {
	id: number;
	text: string;
}

export interface CartProduct extends Product {
	count: number;
}
