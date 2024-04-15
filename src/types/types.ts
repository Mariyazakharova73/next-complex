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

export interface SuccessResponse {
	success: 1;
}

export interface ErrorResponse {
	success: 0;
	error: string;
}

export interface Order {
	phone: string,
	cart: CartProduct[]
}
