<script lang="ts">
	import { setContext } from 'svelte';

	let snackbar = $state<null | string>(null);

	const showSnackbar = (message: string) => {
		snackbar = message;
		setTimeout(() => {
			snackbar = null;
		}, 3000);
	};

	const { children } = $props();
	setContext<(message: string) => void>('showSnackbar', showSnackbar);
</script>

{#if snackbar}
	<div class="snackbar">
		<p>{snackbar}</p>
	</div>
{/if}

{@render children()}
