export const Radio = ({
	label,
	value,
	groupValue,
	handleOnChange,
	current,
}) => {
	return (
		<label>
			<input
				type='radio'
				name={groupValue}
				value={value}
				checked={value == current}
				onChange={handleOnChange}
			/>
			{label}
		</label>
	);
};
