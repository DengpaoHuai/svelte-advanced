<script lang="ts">
	let count = $state(0);

	const increment = () => {
		count++;
	};
</script>

<h1>Page</h1>

<button onclick={increment}
	>Increment
	{count}
</button>
