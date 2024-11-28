<script lang="ts">
	import DataTable from '$lib/data-table.svelte';

	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age' },
		{ key: 'email', label: 'Email' }
	];

	const rows = [
		{ name: 'John Doe', age: '30', email: 'dfgd@dfgdfg.fg' },
		{ name: 'Jane Doe', age: '25', email: 'fgdfgd@qdsqds.df' },
		{ name: 'John Smith', age: '40', email: 'dfsdfsdf@sdfsdf.sdf' }
	];
</script>

<DataTable {rows} {columns}>
	{#snippet cellHead(column)}
		{column.label}
	{/snippet}
	{#snippet cellBody(row)}
		{row}
	{/snippet}
</DataTable>
