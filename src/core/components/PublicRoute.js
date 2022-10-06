import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';

const PublicRoute = ({ children }) => {
	const { user } = useContext(UserContext);

	if (user) {
		// user is not authenticated
		return <Navigate to='/' />;
	}
	return children;
};

export default PublicRoute;
