<script lang="ts">
	import Checklist from '$lib/components/Checklist.svelte';

	export let data;
</script>

<Checklist aircraft={data.aircraft} file={data.file} markdown={data.content} />
