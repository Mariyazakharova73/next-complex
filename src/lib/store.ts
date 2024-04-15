import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './features/cartSlice';

export interface StateSchema {
	cartReducer: CartState;
}

export const makeStore = () => {
	return configureStore({
		reducer: { cartReducer },
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
