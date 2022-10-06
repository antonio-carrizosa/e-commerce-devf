import { useContext } from 'react';
import Loading from '../../core/components/Loading';
import { ProductContext } from '../../product/context/ProductContextProvider';
import { ProductList } from './ProductList';

export const Home = () => {
	const { loading, error } = useContext(ProductContext);

	return (
		<>
			{loading && <Loading />}
			{error && <p> {JSON.stringify(error)} </p>}
			{!loading && !error && <ProductList />};
		</>
	);
};
