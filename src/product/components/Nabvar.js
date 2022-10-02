import './css/nabvar.css';

export const Nabvar = ({ search }) => {
	const handleOnChange = ({ target }) => {
		const { value } = target;
		search(value);
	};

	return (
		<nav>
			<h3>Welcome</h3>

			<div className='search-bar'>
				<span>Search</span>
				<input onChange={handleOnChange} type='text' />
			</div>

			<div>Buttons</div>
		</nav>
	);
};
