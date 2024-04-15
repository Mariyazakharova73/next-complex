import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './features/cartSlice';
import orderReducer, { OrderState } from './features/orderSlice';

export interface StateSchema {
	cartReducer: CartState;
	orderReducer: OrderState;
}

export const makeStore = () => {
	return configureStore({
		reducer: { cartReducer, orderReducer },
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
