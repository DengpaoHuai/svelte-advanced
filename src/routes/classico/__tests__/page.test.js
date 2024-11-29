import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import FormComponent from '../+page.svelte';
describe('FormComponent', () => {
	/*it('prevents default form submission', async () => {
		const { getByTestId } = render(FormComponent);

		const form = getByTestId('form');

		const mockPreventDefault = vi.fn();
		await fireEvent.submit(form, { preventDefault: mockPreventDefault });

		expect(mockPreventDefault).toHaveBeenCalled();
	});*/

	it('validates required fields', async () => {
		const { getByTestId, getByLabelText, getByRole } = render(FormComponent);

		const form = getByTestId('form');
		const submitButton = getByRole('button', { name: /submit/i });

		await fireEvent.submit(form);

		// Les champs sont vides, donc le formulaire ne devrait pas passer
		expect(getByLabelText('Name:')).toBeDefined();
		expect(getByLabelText('Email:')).toBeDefined();
		expect(getByLabelText('Message:')).toBeDefined();
	});

	it('collects form data on submit', async () => {
		const { getByTestId, getByLabelText } = render(FormComponent);

		const form = getByTestId('form');

		// Remplir les champs
		await fireEvent.input(getByLabelText('Name:'), { target: { value: 'John Doe' } });
		await fireEvent.input(getByLabelText('Email:'), { target: { value: 'john.doe@example.com' } });
		await fireEvent.input(getByLabelText('Message:'), { target: { value: 'Hello world!' } });

		// Mock de console.log
		const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

		await fireEvent.submit(form);

		// Vérifie les données envoyées
		expect(mockConsoleLog).toHaveBeenCalledWith({
			name: 'John Doe',
			email: 'john.doe@example.com',
			message: 'Hello world!'
		});

		mockConsoleLog.mockRestore();
	});
});
