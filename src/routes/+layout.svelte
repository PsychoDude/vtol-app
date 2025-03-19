<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<main class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</main>

<Footer sitePages={data.sitePages} curac={data.curac} />

<BackToTop />
