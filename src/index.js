import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './auth/context/UserContextProvider';
import './index.css';
import { ProductContextProvider } from './product/context/ProductContextProvider';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	// <App />
	<UserContextProvider>
		<ProductContextProvider>
			<RouterProvider router={router} />
		</ProductContextProvider>
	</UserContextProvider>
	// </React.StrictMode>
);
