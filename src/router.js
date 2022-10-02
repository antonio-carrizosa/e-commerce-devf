import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductDetails } from './product/components/ProductDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'details/:id',
		element: <ProductDetails />,
	},
]);

export default router;
