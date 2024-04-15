import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS, getTotalPrice } from '../..//helpers/helpers';
import { CartProduct, Product } from '../../types/types';
import { NUMBER_LOCALSTORAGE_KEY } from '../../utils/constants';

export interface CartState {
	totalPrice: number;
	products: CartProduct[];
	phoneNumber: string;
}

const { cartProducts, totalPrice } = getCartFromLS();

const initialState: CartState = {
	totalPrice: totalPrice,
	products: cartProducts,
	phoneNumber: localStorage.getItem(NUMBER_LOCALSTORAGE_KEY) || '',
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		inc(state, action: PayloadAction<Product>) {
			const findItem = state.products.find(
				item => item.id === action.payload.id
			);
			if (findItem) {
				findItem.count++;
			} else {
				state.products.push({ ...action.payload, count: 1 });
			}
			state.totalPrice = getTotalPrice(state.products);
		},

		dec(state, action: PayloadAction<Product | CartProduct>) {
			const findItem = state.products.find(
				item => item.id === action.payload.id
			);
			if (findItem) {
				findItem.count--;
			}

			if (findItem?.count === 0) {
				state.products = state.products.filter(
					item => item.id !== action.payload.id
				);
			}
			state.totalPrice = getTotalPrice(state.products);
		},
		setCount(state, action: PayloadAction<CartProduct>) {
			state.products = state.products.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, count: action.payload.count };
				}
				return item;
			});

			state.totalPrice = getTotalPrice(state.products);
		},

		setNumber(state, action: PayloadAction<string>) {
			state.phoneNumber = action.payload;
		},
	},
});

export const { inc, dec, setCount, setNumber } = cartSlice.actions;
export default cartSlice.reducer;
