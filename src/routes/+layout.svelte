<script lang="ts">
	import SnackbarProvider from '$lib/snackbar-provider.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<SnackbarProvider>
	{@render children()}
</SnackbarProvider>
