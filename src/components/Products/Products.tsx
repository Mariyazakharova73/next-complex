import { getData } from '../../app/action';
import List from '../List/List';
import LoadMore from '../LoadMore/LoadMore';

const Products = async () => {
	const data = await getData(1);

	return (
		<>
			<List data={data.products} />
			<LoadMore />
		</>
	);
};

export default Products;
