<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="back-to-top fixed right-8 bottom-24 cursor-pointer rounded bg-neutral-700 px-6 py-4 text-2xl font-black text-white transition-all select-none hover:bg-neutral-600"
	on:click={goTop}
	class:hidden
>
	&uarr;
</div>
