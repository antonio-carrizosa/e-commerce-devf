import { useState } from 'react';

export const useForm = ({ initialValues = {} }) => {
	const [formValues, setFormValues] = useState(initialValues);

	const handleOnChange = ({ target }) => {
		const { name, value } = target;
		setFormValues({ ...formValues, [name]: value });
	};

	const reset = () => {
		setFormValues(initialValues);
	};

	return { handleOnChange, formValues, reset };
};
