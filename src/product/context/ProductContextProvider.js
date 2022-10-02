import React from 'react';
import useFetch from '../../core/hooks/useFetch';

export const ProductContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
	const { loading, data: products, error } = useFetch({ path: '/item' });

	return (
		<ProductContext.Provider value={{ loading, products, error }}>
			{children}
		</ProductContext.Provider>
	);
};
