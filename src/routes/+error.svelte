<script lang="ts">
	import { page } from '$app/state';
</script>

{#if page.error !== null}
	<h1 class="text-center text-5xl text-white">{page.error.message}</h1>
{/if}
