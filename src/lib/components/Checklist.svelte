<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let { markdown } = $props();
	const backBtnName: { name: string } = { name: 'Back' };
</script>

<Button type="back" info={backBtnName} mainBtns="false" />

<div class="my-4">
	{@html markdown}
</div>
