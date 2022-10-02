import { useParams } from 'react-router-dom';
import useFetch from '../../core/hooks/useFetch';
import Loading from '../../core/components/Loading';
import defaultImg from '../../assets/img/default.png';
import './css/product-details.css';

export const ProductDetails = () => {
	const { id } = useParams();

	const { loading, data: product, error } = useFetch({ path: `/item/${id}` });

	return (
		<>
			{loading && <Loading />} {error && <p> Error: {JSON.stringify(error)}</p>}{' '}
			{!loading && !error && (
				<div>
					{' '}
					<div className='details-wrapper'>
						<div className='product-details'>
							<img src={product.image || defaultImg} alt='' />
							<div className='details'>
								<h3>{product.product_name}</h3>
								<h4>${product.price}</h4>
								<strong>Brand: {product.brand}</strong>
								<p> Category: {product.category} </p>
								<p>{product.description}</p>
							</div>
						</div>
					</div>{' '}
				</div>
			)}
		</>
	);
};
