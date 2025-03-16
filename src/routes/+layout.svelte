<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</main>
