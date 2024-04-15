import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShortNumber } from '../../helpers/helpers';
import { CartProduct, SuccessResponse } from '../../types/types';
import { BASE_URL } from '../../utils/constants';
import { StateSchema } from '../store';
import { getCartProduct, getPhoneNumber } from './selectors';

export interface ThunkConfig {
	state: StateSchema;
}

export const fetchOrder = createAsyncThunk<SuccessResponse, void, ThunkConfig>(
	'order/fetchOrder',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI;

		const cartData = getCartProduct(getState());

		const cart = cartData.map((p: CartProduct) => {
			return { id: p.id, quantity: p.count };
		});

		const phoneNumber = getPhoneNumber(getState());

		const phone = getShortNumber(phoneNumber);

		try {
			const res = await fetch(`${BASE_URL}/order`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					phone,
					cart,
				}),
			});

			if (!res.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await res.json();
			return data;
		} catch (error) {
			throw new Error('Error fetching data:');
		}
	}
);
