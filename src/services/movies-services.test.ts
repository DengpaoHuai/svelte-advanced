import { describe } from 'vitest';
import { vi } from 'vitest';
import { test } from 'vitest';
import { expect } from 'vitest';
import { beforeEach, type Mock } from 'vitest';
import httpClient from '$lib/http-client';
import { getMovies } from './movies.service';

vi.mock('$lib/http-client');
const mockedHttpClient = vi.mocked(httpClient);

describe('http-client', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test('fetches data', async () => {
		(mockedHttpClient.get as Mock).mockResolvedValue({ data: 'foo' });
		const data = await getMovies();

		expect(data).toEqual('foo');
	});

	test('fetches data with axios', async () => {
		(httpClient.get as Mock).mockRejectedValueOnce({
			response: { status: 401, data: { error: 'Invalid credentials' } }
		});

		await expect(async () => await getMovies()).rejects.toThrowError();
	});

	test('throw stp', () => {
		const test = () => {
			throw new Error('stp');
		};

		expect(() => test()).toThrowError('stp');
	});
});
