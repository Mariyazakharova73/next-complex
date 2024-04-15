'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { getCartProduct } from '../..//lib/features/selectors';
import { setNumber } from '../../lib/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import Button from '../Button/Button';
import s from './Cart.module.css';

const Cart = () => {
	const cartProducts = useAppSelector(getCartProduct);
	const [phoneNumber, setPhoneNumber] = useState('');
	const isMounted = useRef(false);
	const isEmptyCart = cartProducts.length === 0;
	const dispatch = useAppDispatch();
	
	const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setNumber(e.target.value));
		console.log(e.target.value);
	};

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(cartProducts);
			localStorage.setItem('cart', json);
		}
		isMounted.current = true;
	}, [cartProducts]);

	return (
		<section className={s.cart}>
			<h2 className={s.title}>Добавленные товары</h2>
			{!isEmptyCart ? (
				<ul className={s.list}>
					{cartProducts.map(p => {
						return (
							<li className={s.item} key={p.id}>
								<p className={s.productTitle}>{p.title}</p>
								<p>{`x${p.count} ${p.count * p.price}₽`}</p>
							</li>
						);
					})}
				</ul>
			) : (
				<p className={s.emptyCart}>Корзина пуста</p>
			)}
			<form className={s.wrapper}>
				<input
					className={s.input}
					type='text'
					id='phoneNumber'
					value={phoneNumber}
					onChange={handlePhoneNumberChange}
					placeholder='+7 (__) ___ __-__'
				/>
				<Button className={s.button} disabled={isEmptyCart}>
					заказать
				</Button>
			</form>
		</section>
	);
};

export default Cart;
