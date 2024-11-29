import { onMount } from "svelte";
import { writable } from "svelte/store";



type Callback<T extends {
    data : unknown
}> = () => Promise<T>;

const usePromised = <T extends {
    data : unknown
}>(callback : Callback<T>) => {
    const data = writable<T | null>(null);
	const error = writable<string | null>(null);
	const loading = writable<boolean>(false);

	const fetchData = () => {
		loading.update(() => true);
        callback()
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

	onMount(() => {
		fetchData();
	});

	return {
		data,
		error,
		loading
	};

};

export default usePromised;