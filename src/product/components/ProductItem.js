import './css/product-item.css';
import defaultImg from '../../assets/img/default.png';

export const ProductItem = ({ product }) => {
	return (
		<div className='product-item'>
			<img src={product.image || defaultImg} alt='' />

			<div className='details'>
				<h4>{product.product_name}</h4>
				<p>$ {product.price} </p>
			</div>
		</div>
	);
};
