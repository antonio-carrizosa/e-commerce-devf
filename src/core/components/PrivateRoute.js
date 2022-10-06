import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContextProvider';

const PrivateRoute = ({ children }) => {
	const { user } = useContext(UserContext);

	if (!user?.isAdmin) {
		// user is not authenticated
		return <Navigate to='/' />;
	}
	return children;
};

export default PrivateRoute;
