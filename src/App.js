import { Navigate, Route, Routes } from 'react-router-dom';
import { SignIn } from './auth/components/SignIn';
import { SignUp } from './auth/components/SignUp';

import { Nabvar } from './core/components/Nabvar';
import PrivateRoute from './core/components/PrivateRoute';
import PublicRoute from './core/components/PublicRoute';
import { CreateProduct } from './product/components/CreateProduct';
import { Home } from './product/components/Home';
import { ProductDetails } from './product/components/ProductDetails';

export const App = () => {
	return (
		<div className='main'>
			<Nabvar />

			<Routes>
				<Route index element={<Navigate replace to='/products' />} />

				<Route path='/products' element={<Home />} />
				<Route path='/products/:id' element={<ProductDetails />} />

				<Route
					path='/products/create'
					element={
						<PrivateRoute>
							<CreateProduct />
						</PrivateRoute>
					}
				/>

				{/* <Route path='/products/create' element={<CreateProduct />} /> */}

				<Route
					path='/signIn'
					element={
						<PublicRoute>
							{' '}
							<SignIn />{' '}
						</PublicRoute>
					}
				/>
				<Route
					path='/signUp'
					element={
						<PublicRoute>
							{' '}
							<SignUp />{' '}
						</PublicRoute>
					}
				/>

				<Route path='*' element={<h1> Not Found </h1>} />
			</Routes>
		</div>
	);
};

export default App;
