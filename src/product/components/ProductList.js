import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';
import { ProductContext } from '../context/ProductContextProvider';

import { ProductItem } from './ProductItem';
import './css/product-list.css';

export const ProductList = () => {
	const navigate = useNavigate();

	const { products } = useContext(ProductContext);

	const { user } = useContext(UserContext);

	return (
		<div className='main'>
			<div className='content'>
				<div className='product-list'>
					{!products.length && <h4> No results.</h4>}
					{products.map((product, idx) => (
						<ProductItem key={idx} product={{ ...product, id: product._id }} />
					))}
				</div>
			</div>
			{/* null aware operator */}
			{user?.isAdmin && (
				<div
					onClick={() => navigate('/products/create')}
					className='floating-btn'
				>
					Add
				</div>
			)}
		</div>
	);
};
