import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserContextProvider } from './auth/context/UserContextProvider';
import './index.css';
import { ProductContextProvider } from './product/context/ProductContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<UserContextProvider>
			<ProductContextProvider>
				<App />
			</ProductContextProvider>
		</UserContextProvider>
	</BrowserRouter>
);
