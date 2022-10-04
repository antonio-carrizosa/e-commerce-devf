import { useState } from 'react';

export const useSearch = initialData => {
	const [filteredData, setFilteredData] = useState(initialData || []);

	const search = (term = '', field) => {
		if (!term.length) {
			setFilteredData(initialData);
			return;
		}

		const filteredData = initialData.filter(item => {
			const fieldToLower = item[field].toLowerCase();
			const termToLower = term.toLowerCase();
			return fieldToLower.includes(termToLower);
		});
		setFilteredData(filteredData);
	};

	return { filteredData, search };
};
