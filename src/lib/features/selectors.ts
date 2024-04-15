import { StateSchema } from '../store';

export const getCartProduct = (state: StateSchema) =>
	state.cartReducer.products;

export const getTotalPrice = (state: StateSchema) =>
	state.cartReducer.totalPrice;

export const getPhoneNumber = (state: StateSchema) =>
	state.cartReducer.phoneNumber;

	export const getIsLoadingOrder = (state: StateSchema) =>
	state.orderReducer.isLoading;

	export const getIsErrorOrder = (state: StateSchema) =>
	state.orderReducer.error;
	export const getOrderStatus = (state: StateSchema) =>
	state.orderReducer.status;
