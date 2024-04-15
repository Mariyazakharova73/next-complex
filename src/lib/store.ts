import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './features/cartSlice';
import productsReducer, { ProductsState } from './features/productsSlice';

export interface StateSchema {
	cartReducer: CartState,
	productsReducer: ProductsState
}

export const makeStore = () => {
	return configureStore({
		reducer: { cartReducer, productsReducer },
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
