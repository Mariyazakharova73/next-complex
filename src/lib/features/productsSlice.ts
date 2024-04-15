import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProductsState {
	page: number;
	hasMore: boolean;
}

const initialState: ProductsState = { page: 1, hasMore: true };

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
});

export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;
