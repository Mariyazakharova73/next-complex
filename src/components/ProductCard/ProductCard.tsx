import { Product } from '../../types/types';
import Button from '../Button/Button';
import s from './ProductCard.module.css';

export interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
				<Button className={s.button}>купить</Button>
				{/* <div className={s.buttons}>
					<Button className={cn(s.btn)}>-</Button>
					<Button className={cn(s.btn, s.btnCount)}>44</Button>
					<Button className={cn(s.btn)}>+</Button>
				</div> */}
			</div>
		</li>
	);
};

export default ProductCard;
