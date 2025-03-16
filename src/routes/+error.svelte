<script lang="ts">
	import { page } from '$app/state';
	import Nav from '$lib/components/Nav.svelte';
	import type { ChecklistData, BtnData } from '$lib/types';

	let { data }: { data: ChecklistData | BtnData } = $props();
</script>

<Nav curac={data.curac} />

<div class="flex flex-col items-center gap-5">
	<p class="flex h-[400px] items-center text-center text-5xl text-white">
		{page.error?.message === 'Not Found' ? 'Page Not Found.' : page.error?.message}
	</p>
</div>
