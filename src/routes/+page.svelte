<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { ChecklistData } from '$lib/types';

	let { data }: { data: ChecklistData } = $props();
</script>

<svelte:head>
	<title>VTOL VR Virtual Kneeboard</title>
	<meta name="description" content="VTOL VR Virtual Kneeboard Companion App" />
</svelte:head>

<div class="flex space-x-4">
	<div class="mx-auto grid grow grid-cols-3 gap-4">
		{#each data.pages as page (page.aircraft)}
			{#if page.type === 'aircraft'}
				<Button
					type="aircraft"
					name={page.name}
					aircraft={page.aircraft}
					homeBtn={true}
					curac={data.curac}
				/>
			{:else if page.type === 'global'}
				<Button
					type="global"
					name={page.name}
					aircraft={page.aircraft}
					homeBtn={true}
					curac={data.curac}
				/>
			{:else if page.type === 'moddedac'}
				<Button
					type="moddedac"
					name={page.name}
					aircraft={page.aircraft}
					homeBtn={true}
					curac={data.curac}
				/>
			{/if}
		{/each}
	</div>
</div>
