import { useNavigate } from 'react-router-dom';
import './css/product-item.css';
import defaultImg from '../../assets/img/default.png';

export const ProductItem = ({ product }) => {
	const navigate = useNavigate();

	const handleOnTap = () => {
		navigate(`/products/${product.id}`);
	};

	return (
		<div onClick={handleOnTap} className='product-item'>
			<img src={product.image || defaultImg} alt='' />

			<div className='details'>
				<h4>{product.product_name}</h4>
				<p>$ {product.price} </p>
			</div>
		</div>
	);
};
