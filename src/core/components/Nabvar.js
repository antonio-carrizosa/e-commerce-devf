import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';
import { ProductContext } from '../../product/context/ProductContextProvider';
import { useSearch } from '../../product/hooks/useSearch';
import './css/nabvar.css';

export const Nabvar = () => {
	const navigate = useNavigate();

	const { user, signOut } = useContext(UserContext);
	const { products } = useContext(ProductContext);
	const { filteredData, search, clear } = useSearch(products);

	const inputRef = useRef(null);

	const handleOnChange = ({ target }) => {
		const { value } = target;
		search(value, 'product_name');
	};

	const handleOnTap = id => {
		clear();
		inputRef.current.value = '';
		navigate(`/products/${id}`);
	};

	return (
		<>
			<nav>
				<h3>
					{' '}
					{user
						? `${user.first_name} ${user.last_name}`
						: 'e-Commerce (React JS)'}{' '}
				</h3>

				<div className='search-bar'>
					<span>Search</span>
					<input ref={inputRef} onChange={handleOnChange} type='text' />
				</div>

				{user ? (
					<div className='authenticated'>
						<h3> {user.role} </h3>
						<span onClick={signOut}> Sign Out </span>
					</div>
				) : (
					<div>
						<Link to={'/signIn'}>Sign In</Link> /{' '}
						<Link to={'/signUp'}> Sign Up </Link>
					</div>
				)}
			</nav>
			{filteredData.length && (
				<div className='results'>
					{filteredData.map((result, idx) => {
						return (
							<div
								onClick={() => handleOnTap(result._id)}
								key={idx}
								className='item'
							>
								{result.product_name}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};
