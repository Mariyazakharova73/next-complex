import Cart from '../components/Cart/Cart';
import Products from '../components/Products/Products';
import Reviews from '../components/Reviews/Reviews';
import s from './page.module.css';

export default function Home() {
	return (
		<main className={s.main}>
			<Reviews />
			<Cart/>
			<Products/>
		</main>
	);
}
