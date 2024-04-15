'use client';
import { useState } from 'react';
import s from './Cart.module.css';
import Button from '../Button/Button';

const Cart = () => {
	const [phoneNumber, setPhoneNumber] = useState('');

	const handlePhoneNumberChange = (e: any) => {
		setPhoneNumber(e.target.value);
		console.log(e.target.value);
	};

	return (
		<section className={s.cart}>
			<h2 className={s.title}>Добавленные товары</h2>
			<ul className={s.list}>
				<li className={s.item}>
					<p>товар 1</p>
					<p>x3 3645₽</p>
				</li>
				<li className={s.item}>
					<p>товар 2</p>
					<p>x3 3645₽</p>
				</li>
			</ul>
			<form className={s.wrapper}>
				<input
					className={s.input}
					type='text'
					id='phoneNumber'
					value={phoneNumber}
					onChange={handlePhoneNumberChange}
					placeholder='+7 (__) ___ __-__'
				/>
				<Button className={s.button}>заказать</Button>
			</form>
		</section>
	);
};

export default Cart;
