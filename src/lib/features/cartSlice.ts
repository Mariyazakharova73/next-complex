import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
	value: number;
}

const initialState: CartState = { value: 0 };

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
	},
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;
