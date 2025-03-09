<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;

	console.log(data.relatedEmergencyChecklists, data.relatedChecklists);
</script>

{#if data.relatedChecklists}
	<Checklist
		content={data.content}
		aircraft={data.aircraft}
		file={data.file}
		relatedChecklists={data.relatedChecklists}
		relatedEmergencyChecklists={data.relatedEmergencyChecklists}
	/>
{:else}
	<Checklist
		content={data.content}
		aircraft={data.aircraft}
		file={data.file}
		relatedEmergencyChecklists={data.relatedEmergencyChecklists}
	/>
{/if}
