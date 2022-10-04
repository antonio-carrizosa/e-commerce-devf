import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';
import './css/nabvar.css';

export const Nabvar = ({ search }) => {
	const { user, signOut } = useContext(UserContext);

	const handleOnChange = ({ target }) => {
		const { value } = target;
		search(value);
	};

	return (
		<nav>
			<h3>e-Commerce (React JS)</h3>

			<div className='search-bar'>
				<span>Search</span>
				<input onChange={handleOnChange} type='text' />
			</div>

			{user ? (
				<div className='authenticated'>
					<h3> {user.role} </h3>
					<span onClick={signOut}> Sign Out </span>
				</div>
			) : (
				<div>
					<Link to={'signIn'}>Sign In</Link> /{' '}
					<Link to={'signUp'}> Sign Up </Link>
				</div>
			)}
		</nav>
	);
};
