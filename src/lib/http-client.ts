import axios from 'axios';

/**
 *
 * @param {string} url
 * @example
 * httpClient.get('/todos')
 * httpClient.post('/todos', { title: 'New todo', completed: false })
 * httpClient.put('/todos/1', { title: 'Updated todo', completed: true })
 * @returns {Promise}
 */
const httpClient = axios.create({
	baseURL: 'https://crudcrud.com/api/96a97deb9a0243ffbd977bc1b61b60e1',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default httpClient;
