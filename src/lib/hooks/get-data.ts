import { writable, type Writable } from 'svelte/store';

const getData = <T>(url: Writable<string>) => {
	const data = writable<T | null>(null);
	const error = writable<string | null>(null);
	const loading = writable<boolean>(false);

	const fetchData = (url: string) => {
		loading.update(() => true);
		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				data.update(() => result);
			})
			.catch((err) => {
				error.update(() => err);
			})
			.finally(() => {
				loading.update(() => false);
			});
	};

	url.subscribe((value) => {
		fetchData(value);
	});

	/*onMount(() => {
		fetchData();
	});*/

	return {
		data,
		error,
		loading
	};
};

export default getData;
