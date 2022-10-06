export const Select = ({ name, categories, value, handleOnChange }) => {
	// function to uppercase
	const label = name
		.split('')
		.map((c, i) => (i == 0 ? c.toUpperCase() : c))
		.join('');

	return (
		<div className='select-wrapper'>
			<p> {label} </p>
			<select name={name} onChange={handleOnChange} value={value}>
				{categories.map((cat, i) => {
					return (
						<option key={i} value={cat}>
							{cat}
						</option>
					);
				})}
			</select>
		</div>
	);
};
