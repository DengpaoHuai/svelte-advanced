import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://crudcrud.com/api/3503ea26a29a4273b4d0d4683bf0d48a',
	headers: {
		'Content-Type': 'application/json'
	}
});

export default httpClient;
