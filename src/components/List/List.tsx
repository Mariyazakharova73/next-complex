import { Product } from '@/types/types';
import ProductCard from '../ProductCard/ProductCard';
import s from './List.module.css';

export interface ListProps {
	data: Product[];
}

const List = ({ data }: ListProps) => {
	return (
		<>
			<section className={s.products}>
				<ul className={s.list}>
					{data.map((p: Product) => {
						return <ProductCard key={p.id} product={p} />;
					})}
				</ul>
			</section>
		</>
	);
};

export default List;
