<script lang="ts">
	import type { Snippet } from 'svelte';

	type Data = {
		[key: string]: any;
	};

	type Column = {
		key: string;
		label: string;
	};

	type Props = {
		columns: Column[];
		rows: Data[];
		cellHead?: Snippet<[Column]>;
		cellBody?: Snippet<[Data]>;
	};

	let { columns, rows, cellHead, cellBody }: Props = $props();
</script>

<h1>DataTable</h1>

<table>
	<thead>
		<tr>
			{#each columns as column}
				<th>
					{#if cellHead}
						{@render cellHead(column)}
					{:else}
						<p>{column.label}</p>
					{/if}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each rows as row}
			<tr>
				{#each columns as column}
					<td>
						{#if cellBody}
							{@render cellBody(row[column.key])}
						{:else}
							<p>{row[column?.key] && typeof row[column.key] === 'string' && row[column.key]}</p>
						{/if}</td
					>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
