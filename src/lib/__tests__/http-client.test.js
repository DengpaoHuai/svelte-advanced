import { describe } from 'vitest';
import axios from 'axios';
import { vi } from 'vitest';
import { test } from 'vitest';
import { expect } from 'vitest';
import { beforeEach } from 'vitest';

vi.mock('axios');

describe('http-client', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		const mockedAxios = vi.mocked(axios);

		mockedAxios.get.mockResolvedValue({ data: 'foo' });
	});

	test('fetches data', async () => {
		const data = await axios.get('https://example.com');

		expect(data).toEqual({ data: 'foo' });
	});
});
