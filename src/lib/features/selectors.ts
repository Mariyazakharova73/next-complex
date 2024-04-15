import { StateSchema } from '../store';

export const getPageNumber = (state: StateSchema) => state.productsReducer.page;

export const getPageHasMore = (state: StateSchema) =>
	state.productsReducer.hasMore;
