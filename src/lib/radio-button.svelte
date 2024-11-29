<script lang="ts">
	type ChoiceConstructor<
		T extends {
			value: string;
			label: string;
		}
	> = {
		'option-1': T;
		'option-2': T;
		[key: `option-${string}`]: T;
	};

	type CheckBox = ChoiceConstructor<{
		value: string;
		label: string;
	}>;

	type Radio = ChoiceConstructor<{
		value: string;
		label: string;
		checked: boolean;
	}>;

	let {
		radios,
		label
	}: {
		radios: Radio;
		label: string;
	} = $props();
</script>

<h1>Radio Button</h1>
