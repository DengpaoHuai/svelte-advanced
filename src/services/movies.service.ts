import httpClient from '$lib/http-client';
import type { Movie } from '../schemas/movies.schema';

export const getMovies = async () => {
	const response = await httpClient.get('/movies');
	return response.data;
};

export const getMovie = async (id: string) => {
	const response = await httpClient.get(`/movies/${id}`);
	return response.data;
};

export const createMovie = async (movie: Omit<Movie, '_id'>) => {
	const response = await httpClient.post('/movies', movie);
	return response.data;
};

export const updateMovie = async (id: string, movie: Movie) => {
	const response = await httpClient.put(`/movies/${id}`, movie);
	return response.data;
};

export const deleteMovie = async (id: string) => {
	const response = await httpClient.delete(`/movies/${id}`);
	return response.data;
};
