import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../..//helpers/helpers';
import { ErrorResponse, SuccessResponse } from '../../types/types';
import { fetchOrder } from './fetchOrder';

export interface OrderState {
	isLoading: boolean;
	error: null;
	status?: number;
}

const { cartProducts, totalPrice } = getCartFromLS();

const initialState: OrderState = {
	isLoading: false,
	error: null,
};

const orderSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchOrder.pending, state => {
			state.isLoading = true;
			state.error = null;
		});

		builder.addCase(
			fetchOrder.fulfilled,
			(state, action: PayloadAction<SuccessResponse>) => {
				state.isLoading = false;
				state.status = action.payload.success;
				state.error = null;
			}
		);

		builder.addCase(
			fetchOrder.rejected,
			(state, action: PayloadAction<ErrorResponse | any>) => {
				state.isLoading = false;
				state.error = action.payload.error;
			}
		);
	},
});

export default orderSlice.reducer;
