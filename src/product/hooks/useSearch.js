import { useState } from 'react';

export const useSearch = initialData => {
	const [filteredData, setFilteredData] = useState([]);

	const search = (term = '', field) => {
		if (!term.length) {
			setFilteredData([]);
			return;
		}

		const filteredData = initialData.filter(item => {
			const fieldToLower = item[field].toLowerCase();
			const termToLower = term.toLowerCase();
			return fieldToLower.includes(termToLower);
		});
		setFilteredData(filteredData);
	};
	const clear = () => {
		setFilteredData([]);
	};

	return { filteredData, search, clear };
};
