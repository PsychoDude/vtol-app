<script lang="ts">
	import type { Curac } from '$lib/types';
	import Button from './Button.svelte';

	let { curac }: { curac: Curac } = $props();
</script>

<div class="flex gap-3">
	<Button type="back" name="Back" {curac} />

	<Button type="backAircraft" {curac} />

	<Button type="home" name="Home" {curac} />
</div>
