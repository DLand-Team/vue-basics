import axios from 'axios';

export const http = axios.create({
	timeout: 1000 * 60,
	baseURL: '/api',
});

