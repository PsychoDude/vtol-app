<script lang="ts">
	import { page } from '$app/state';
</script>

{#if page.error !== null}
	<h1>{page.error.message}</h1>
{/if}
