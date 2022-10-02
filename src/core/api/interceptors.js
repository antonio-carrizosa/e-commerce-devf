const logRequestInterceptor = request => {
	console.log('------REQUEST------');
	const { baseURL, url, method } = request;
	console.log('METHOD', method);
	console.log('URL', baseURL + (url || ''));
	console.log('------ ------');
	return request;
};

const logResponseInterceptor = response => {
	console.log('------RESPONSE------');
	const { status, data } = response;
	console.log('STATUS', status);
	console.log('DATA', data);
	console.log('------ ------');
	return response;
};

export {
	logRequestInterceptor as logRequestIncertceptor,
	logResponseInterceptor as logResponseIncertceptor,
};
