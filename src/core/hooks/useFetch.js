import { useEffect, useState } from 'react';
import AxiosClient from '../api/axiosClient';

const useFetch = ({ path, queryParams }) => {
	const [loading, setLoading] = useState(path ? true : false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const handleSuccess = data => {
		setData(data);
		setLoading(false);
	};

	const handleError = error => {
		setError(error);
		setLoading(false);
	};

	useEffect(() => {
		const axiosClient = new AxiosClient();
		axiosClient
			.get({ path, queryParams })
			.then(handleSuccess)
			.catch(handleError);
	}, []);

	return {
		loading,
		data,
		error,
	};
};

export default useFetch;
