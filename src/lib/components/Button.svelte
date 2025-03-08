<script lang="ts">
	import { goto } from '$app/navigation';

	let data = $props();
	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700',
		blue: 'bg-blue-500 hover:bg-blue-700',
		red: 'bg-red-500 hover:bg-red-700'
	};
	const mainBtns: Record<string, string> = {
		true: 'rounded h-70',
		false: ''
	};

	function aircraftRedirect(plane: string) {
		goto(`/${plane}`);
	}
</script>

<button
	class={`rounded ${colorVariants[data.color]} px-4 py-2 text-white ${mainBtns[data.mainBtns]}`}
	onclick={() => {
		aircraftRedirect(data.info.aircraft);
	}}
>
	{`${data.info.name}`}
</button>
