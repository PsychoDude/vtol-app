<script lang="ts">
	let { aircraft, file, markdown } = $props();

	if (typeof window !== 'undefined') {
		// stash the value...
		const initial = markdown;

		// unset it...
		markdown = undefined;

		$effect(() => {
			// ...and reset after we've mounted
			markdown = initial;
		});
	}
</script>

{@html markdown}
