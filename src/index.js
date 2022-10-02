import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ProductContextProvider } from './product/context/ProductContextProvider';
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	// <App />
	<ProductContextProvider>
		<RouterProvider router={router} />
	</ProductContextProvider>
	// </React.StrictMode>
);
