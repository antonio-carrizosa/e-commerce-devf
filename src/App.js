import { useContext } from 'react';
import Loading from './core/components/Loading';
import { Home } from './product/components/Home';

import { ProductContext } from './product/context/ProductContextProvider';

export const App = () => {
	const { loading, error } = useContext(ProductContext);

	return (
		<>
			{loading && <Loading />}
			{error && <p> {JSON.stringify(error)} </p>}
			{!loading && !error && <Home />};
		</>
	);
};

export default App;
