'use server';

import { BASE_URL } from '@/utils/constants';

const pageSize = 6;

export async function getData(pageNumber: number) {
	const res = await fetch(
		`${BASE_URL}/products?page=${pageNumber}&page_size=${pageSize}`,
		{
			headers: {
				'content-type': 'application/json',
			},
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json();
}

export async function getReviews() {
	const res = await fetch(`${BASE_URL}/reviews`, {
		headers: {
			'content-type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json();
}
