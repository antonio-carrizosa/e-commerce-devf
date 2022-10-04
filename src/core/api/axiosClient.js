import axios from 'axios';
import {
	authRequestInterceptor,
	authResponseInterceptor,
	logRequestInterceptor,
	logResponseInterceptor,
} from './interceptors';

class AxiosClient {
	constructor() {
		if (!AxiosClient.instance) {
			console.log('axios instance created');
			this.instance = axios.create({
				// TODO: move to enviroment variables
				baseURL: 'https://ecomerce-master.herokuapp.com/api/v1',
				timeout: 10000,
				headers: { Accept: 'application/json' },
			});
			this.instance.interceptors.request.use(authRequestInterceptor);
			this.instance.interceptors.response.use(authResponseInterceptor);
			this.instance.interceptors.request.use(logRequestInterceptor);
			this.instance.interceptors.response.use(logResponseInterceptor);

			AxiosClient.instance = this;
		}
		return AxiosClient.instance;
	}

	async get({ path, queryParams }) {
		try {
			const response = await this.instance.get(path, {
				params: queryParams,
			});

			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	async post({ path, data = {} }) {
		try {
			if (!data) throw Error('Required data');
			if (!Object.keys(data).length) throw Error('Required data');
			console.log('data axios', data);
			const response = await this.instance.post(path, data);
			return response.data;
		} catch (error) {
			this.handleError(error);
		}
	}

	handleError(error) {
		if (error.response) {
			throw error.response.data.message;
		} else if (error.request) {
			throw error.request;
		} else {
			throw error.message;
		}
	}
}

export default AxiosClient;
