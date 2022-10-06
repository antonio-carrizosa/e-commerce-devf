import React from 'react';
import useFetch from '../../core/hooks/useFetch';

export const ProductContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
	const {
		loading,
		data: products,
		setData,
		error,
	} = useFetch({ path: '/item' });

	const addProduct = product => {
		setData([...products, product]);
	};

	return (
		<ProductContext.Provider value={{ loading, products, addProduct, error }}>
			{children}
		</ProductContext.Provider>
	);
};
