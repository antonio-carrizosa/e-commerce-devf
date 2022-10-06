import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { SignIn } from './auth/components/SignIn';
import { SignUp } from './auth/components/SignUp';
import { CreateProduct } from './product/components/CreateProduct';
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
	{
		path: '/signIn',
		element: <SignIn />,
	},
	{
		path: '/signUp',
		element: <SignUp />,
	},
	{
		path: '/create',
		element: <CreateProduct />,
	},
	{
		path: '*',
		element: <h4> Not Found. </h4>,
	},
]);

export default router;
