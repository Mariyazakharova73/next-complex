import { CartProduct } from '@/types/types';

export const getTitle = (str: string) => {
	const regex = /<h1>(.*?)<\/h1>/;

	const match = str.match(regex);

	if (match) {
		const h1Text = match[1];
		return h1Text;
	} else {
		return 'Отзыв';
	}
};

export const getText = (str: string) => {
	const regex = /<p>(.*?)<\/p>/g;

	let texts = '';

	const matches = str.match(regex);

	if (matches) {
		matches.forEach(function (match) {
			const extractedText = match.replace(/<\/?p>/g, '');
			texts = texts + ' ' + extractedText;
		});
	}

	return texts;
};

export const getCartFromLS = () => {
  const cartData = localStorage.getItem("cart");
  const cartProducts = cartData ? JSON.parse(cartData) : [];
  return { cartProducts: cartProducts as CartProduct[], totalPrice: getTotalPrice(cartProducts) };
};

export const getTotalPrice = (items: CartProduct[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};

export const getTotalCount = (items: CartProduct[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};


