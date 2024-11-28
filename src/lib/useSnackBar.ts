import { getContext } from 'svelte';

export type SnackBarContextFn = (param: string) => void;

export const useSnackbar = () => {
	const showSnackbar: SnackBarContextFn = getContext('showSnackbar');

	return showSnackbar;
};
