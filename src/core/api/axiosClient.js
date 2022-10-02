import axios from 'axios';
import {
	logRequestIncertceptor,
	logResponseIncertceptor,
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
			this.instance.interceptors.request.use(logRequestIncertceptor);
			this.instance.interceptors.response.use(logResponseIncertceptor);

			AxiosClient.instance = this;
		}
		return AxiosClient.instance;
	}

	async get({ path, queryParams }) {
		const response = await this.instance.get(path, {
			params: queryParams,
		});

		return response.data;
	}

	async post({ path, data = {} }) {
		if (!data) throw Error('Required data');
		if (!Object.keys(data).length) throw Error('Required data');
		const response = await this.instance.post(path, data);
		return response.data;
	}
}

export default AxiosClient;
