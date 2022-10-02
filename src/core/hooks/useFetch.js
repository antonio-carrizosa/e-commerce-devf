import { useEffect, useState } from 'react';
import AxiosClient from '../api/axiosClient';

const useFetch = ({ method = 'GET', path, data, queryParams }) => {
	const [loading, setLoading] = useState(true);
	const [responseData, setResponseData] = useState([]);
	const [error, setError] = useState(null);

	const handleSuccess = data => {
		setResponseData(data);
		setLoading(false);
	};

	const handleError = error => {
		setError(error);
		setLoading(false);
	};

	useEffect(() => {
		const axiosClient = new AxiosClient();

		if (method == 'GET') {
			axiosClient
				.get({ path, queryParams })
				.then(handleSuccess)
				.catch(handleError);
		}

		if (method == 'POST') {
			axiosClient.post({ path, data }).then(handleSuccess).catch(handleError);
		}
	}, []);

	return { loading, data: responseData, error };
};

export default useFetch;
