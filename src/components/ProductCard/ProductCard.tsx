'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import cn from 'classnames';
import { ChangeEvent, FormEvent } from 'react';
import { dec, inc, setCount } from '../../lib/features/cartSlice';
import { getCartProduct } from '../../lib/features/selectors';
import { Product } from '../../types/types';
import Button from '../Button/Button';
import s from './ProductCard.module.css';
import { fetchOrder } from '@/lib/features/fetchOrder';

export interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const cartProducts = useAppSelector(getCartProduct);
	
	const selectedProduct = cartProducts.find(p => p.id === product.id);

	const dispatch = useAppDispatch();

	const buyButtonClick = () => {
		dispatch(inc(product));
	};

	const onClickPlus = () => {
		dispatch(inc(product));
	};

	const onClickMinus = () => {
		dispatch(dec(product));
	};

	const onChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
		const count = Number(e.target.value);

		dispatch(setCount({ ...product, count }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
	};

	return (
		<li className={s.item}>
			<img
				src={product?.image_url}
				alt={`${product.title}.`}
				className={s.img}
			/>
			<h3 className={s.title}>{product.title}</h3>
			<p className={s.text}>{`${product.description}`}</p>
			<div className={s.container}>
				<p className={s.price}>{`цена: ${product.price}₽`}</p>
				{selectedProduct?.count ? (
					<div className={s.buttons}>
						<Button className={cn(s.btn)} onClick={onClickMinus}>
							-
						</Button>
						<form onSubmit={handleSubmit}>
							<input
								type='number'
								className={s.input}
								value={selectedProduct?.count}
								onChange={onChangeCount}
							/>
						</form>
						<Button className={cn(s.btn)} onClick={onClickPlus}>
							+
						</Button>
					</div>
				) : (
					<Button className={s.button} onClick={buyButtonClick}>
						купить
					</Button>
				)}
			</div>
		</li>
		
	);
};

export default ProductCard;
