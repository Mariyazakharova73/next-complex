import { getData } from '../../app/action';
import List from '../List/List';
import LoadMore from '../ProductCard/LoadMore/LoadMore';

const Products = async () => {
	const data = await getData(1);
	console.log(data);

	return (
		<>
			<List data={data.products} />
			<LoadMore />
		</>
	);
};

export default Products;
