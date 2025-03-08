<script lang="ts">
	import Checklist from '../../components/Checklist.svelte';
	let props = $props();
</script>

<Checklist
	aircraft={props.aircraft}
	checklists={props.checklists}
	emergChecklists={props.emerChecklists}
/>
