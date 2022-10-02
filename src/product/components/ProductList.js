import { ProductItem } from './ProductItem';
import './css/product-list.css';

export const ProductList = ({ products }) => {
	return (
		<>
			<div className='product-list'>
				{!products.length && <h4> No results.</h4>}
				{products.map((product, idx) => (
					<ProductItem key={idx} product={product} />
				))}
			</div>
		</>
	);
};
