import { useState } from 'react';

export const useSearch = ({ initialData = [] }) => {
	const [filteredProducts, setData] = useState(initialData);

	const search = (term = '', field) => {
		if (!term.length) {
			setData(initialData);
			return;
		}

		const filteredData = initialData.filter(item => {
			const fieldToLower = item[field].toLowerCase();
			const termToLower = term.toLowerCase();
			return fieldToLower.includes(termToLower);
		});
		setData(filteredData);
	};

	return { filteredProducts, search };
};
