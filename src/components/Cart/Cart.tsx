'use client';
import cn from 'classnames';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getCartProduct, getPhoneNumber } from '../..//lib/features/selectors';
import { editNumber } from '../../helpers/helpers';
import { setNumber } from '../../lib/features/cartSlice';
import { fetchOrder } from '../../lib/features/fetchOrder';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import {
	CART_LOCALSTORAGE_KEY,
	NUMBER_LOCALSTORAGE_KEY,
	PHONE_MASK,
} from '../../utils/constants';
import Button from '../Button/Button';
import CartModal from '../CartModal/CartModal';
import s from './Cart.module.css';

const Cart = () => {
	const [isValid, setIsValid] = useState(false);
	const cartProducts = useAppSelector(getCartProduct);
	const phoneNumber = useAppSelector(getPhoneNumber);
	const isMounted = useRef(false);
	const isEmptyCart = cartProducts.length === 0;
	const dispatch = useAppDispatch();

	const [isOpenModal, setIsOpenModal] = useState(false);

	const handlePhoneNumberChange = (e: any) => {
		const number = editNumber(e.target.value);

		setIsValid(e.target.closest('.form').checkValidity());

		localStorage.setItem(NUMBER_LOCALSTORAGE_KEY, number);
		dispatch(setNumber(number));

		if (number.length <= 2) {
			localStorage.removeItem(NUMBER_LOCALSTORAGE_KEY);
		}
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(fetchOrder());
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(cartProducts);
			localStorage.setItem(CART_LOCALSTORAGE_KEY, json);
		}
		isMounted.current = true;
	}, [cartProducts]);

	return (
		<>
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
				<form className={cn(s.wrapper, 'form')} onSubmit={handleSubmit}>
					<input
						className={s.input}
						type='tel'
						pattern='[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}'
						minLength={18}
						maxLength={18}
						required
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						placeholder={PHONE_MASK}
					/>
					<Button className={s.button} disabled={isEmptyCart}>
						заказать
					</Button>
				</form>
			</section>
			<CartModal isOpenModal={isOpenModal} closeModal={closeModal} />
		</>
	);
};

export default Cart;
