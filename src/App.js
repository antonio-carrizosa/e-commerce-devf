import Loading from './core/components/Loading';
import { Home } from './product/components/Home';

import {
	ProductContextProvider,
	ProductContext,
} from './product/context/ProductContextProvider';

export const App = () => {
	return (
		<ProductContextProvider>
			<ProductContext.Consumer>
				{({ loading }) => {
					if (loading) return <Loading />;

					return <Home />;
				}}
			</ProductContext.Consumer>
		</ProductContextProvider>
	);
};

export default App;
