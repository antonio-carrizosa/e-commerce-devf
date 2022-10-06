import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';
import { ProductContext } from '../context/ProductContextProvider';
import { useSearch } from '../hooks/useSearch';
import { Nabvar } from './../../core/components/Nabvar';
import { ProductList } from './ProductList';

export const Home = () => {
	const navigate = useNavigate();

	const { products } = useContext(ProductContext);
	const { filteredData, search } = useSearch(products);
	const { user } = useContext(UserContext);

	return (
		<div className='main'>
			<Nabvar search={term => search(term, 'product_name')} />
			<div className='content'>
				<ProductList products={filteredData} />
			</div>
			{/* null aware operator */}
			{user?.isAdmin && (
				<div onClick={() => navigate('/create')} className='floating-btn'>
					+
				</div>
			)}
		</div>
	);
};
