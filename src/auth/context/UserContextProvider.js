import React, { useEffect, useState } from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
	const storage = localStorage;

	const USER = 'user';

	const [user, setUser] = useState(null);

	const signIn = user => {
		storage.setItem(USER, JSON.stringify(user));
		setUser({ ...user, isAdmin: user.role == 'ADMIN' });
		console.log(user);
	};

	const signOut = () => {
		storage.removeItem(USER);
		storage.removeItem('token');
		setUser(null);
	};

	useEffect(() => {
		const userData = storage.getItem(USER);
		if (userData) {
			const user = JSON.parse(userData);
			setUser({ ...user, isAdmin: user.role == 'ADMIN' });
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
};
