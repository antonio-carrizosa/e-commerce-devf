const API_TOKEN = 'token';

const logRequestInterceptor = request => {
	console.log('------REQUEST------');

	const { baseURL, url, method, data } = request;
	console.log('METHOD', method);
	console.log('URL', baseURL + (url || ''));
	console.log('DATA', data);
	console.log('------------');
	return request;
};

const logResponseInterceptor = response => {
	console.log('------RESPONSE------');
	const { status, data } = response;
	console.log('STATUS', status);
	console.log('DATA', data);
	console.log('------------');
	return response;
};

const authRequestInterceptor = request => {
	const storage = localStorage;
	// const { url } = request;
	// if (url.includes('/logout')) {
	// 	storage.removeItem(API_TOKEN);
	// }

	// if token exists, add to headers
	const token = storage.getItem(API_TOKEN);

	if (token) {
		const headers = request.headers;
		request.headers = { ...headers, Authorization: `JWT ${token}` };
	}
	return request;
};

const authResponseInterceptor = response => {
	// if token comes we proced to save it
	if (response.status == 200 && response.data.token) {
		// extract token and return response without token to presentation layer
		const { token, ...rest } = response.data;
		const storage = localStorage;
		storage.setItem(API_TOKEN, token);
		response.data = rest;
	}
	return response;
};

export {
	authRequestInterceptor,
	authResponseInterceptor,
	logRequestInterceptor,
	logResponseInterceptor,
};
