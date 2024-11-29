<script lang="ts">
	import SnackbarProvider from '$lib/snackbar-provider.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<h1></h1>
<SnackbarProvider>
	{@render children()}
</SnackbarProvider>
