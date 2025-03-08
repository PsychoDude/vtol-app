<script lang="ts">
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</div>
