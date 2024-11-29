import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import DataTable from '../data-table.svelte';

describe('DataTable Component', () => {
	it('handles empty rows gracefully', () => {
		const columns = [{ key: 'name', label: 'Name' }];
		const rows = [];

		const { getByText, container } = render(DataTable, {
			props: { columns, rows }
		});

		// Vérifie que l'en-tête est affiché mais aucune ligne
		expect(getByText('Name')).toBeTruthy();
		expect(container.querySelector('tbody')?.textContent).toBe('');
	});
});
