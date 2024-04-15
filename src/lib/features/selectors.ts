import { StateSchema } from '../store';

export const getCartProduct = (state: StateSchema) =>
	state.cartReducer.products;

export const getTotalPrice = (state: StateSchema) =>
	state.cartReducer.totalPrice;

export const getPhoneNumber = (state: StateSchema) =>
	state.cartReducer.phoneNumber;
