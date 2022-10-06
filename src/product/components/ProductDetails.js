import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../core/hooks/useFetch';
import Loading from '../../core/components/Loading';
import defaultImg from '../../assets/img/default.png';
import './css/product-details.css';
import { useContext } from 'react';
import { UserContext } from '../../auth/context/UserContextProvider';
import Swal from 'sweetalert2';

export const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { user } = useContext(UserContext);

	const { loading, data: product, error } = useFetch({ path: `/item/${id}` });

	const handleBuy = () => {
		console.log('buy');
		if (!user) {
			Swal.fire({
				title: 'Wants buy?',
				text: 'Register now, and get our products.',
				icon: 'warning',
				iconColor: '#256d85',
				showCancelButton: true,
				confirmButtonColor: '#256d85',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sign Up Now!',
			}).then(result => {
				if (result.isConfirmed) {
					navigate('/signUp');
				}
			});
		}
	};

	return (
		<>
			{loading && <Loading />} {error && <p> Error: {JSON.stringify(error)}</p>}{' '}
			{!loading && !error && (
				<div>
					{' '}
					<div className='details-wrapper'>
						<div className='product-details'>
							<h3>{product.product_name}</h3>
							<h4>${product.price}</h4>
							<img src={product.image || defaultImg} alt='' />
							<div className='details'>
								<strong>Brand: {product.brand}</strong>
								<p> Category: {product.category} </p>
								<p>{product.description}</p>
							</div>
							<button onClick={handleBuy}> Buy Now </button>
						</div>
					</div>{' '}
				</div>
			)}
		</>
	);
};
