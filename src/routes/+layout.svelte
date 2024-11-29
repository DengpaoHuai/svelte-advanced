<script lang="ts">
	import SnackbarProvider from '$lib/snackbar-provider.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';
	let { children } = $props();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: true,
				retry: false
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<SnackbarProvider>
		{@render children()}
	</SnackbarProvider>
</QueryClientProvider>
