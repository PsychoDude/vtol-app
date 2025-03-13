<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</div>
