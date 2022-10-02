import { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import { useSearch } from '../hooks/useSearch';
import { Nabvar } from './Nabvar';
import { ProductList } from './ProductList';

export const Home = () => {
	const { products } = useContext(ProductContext);
	const { filteredProducts, search } = useSearch({ initialData: products });

	return (
		<div className='main'>
			<Nabvar search={term => search(term, 'product_name')} />
			<div className='content'>
				<ProductList products={filteredProducts} />
			</div>
		</div>
	);
};
