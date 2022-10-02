const logRequestIncertceptor = request => {
	console.log('------REQUEST------');
	const { baseURL, method } = request;
	console.log({ method, baseURL });
	console.log('------ ------');
	return request;
};

const logResponseIncertceptor = response => {
	console.log('------RESPONSE------');
	const { status, data } = response;
	console.log({ status, data });
	console.log('------ ------');
	return response;
};

export { logRequestIncertceptor, logResponseIncertceptor };
