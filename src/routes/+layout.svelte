<script lang="ts">
	import BackToTop from '$lib/components/BackToTop.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import { playAudio, setVolume, stopAudio, volume } from '$lib/stores/audio';
	import { onDestroy } from 'svelte';

	let { children, data } = $props();

	let playingFile: string | null = $state(null);
	let audioPercent = $derived(Math.round($volume * 100));

	function handlePlayPause(file: string) {
		if (playingFile === file) {
			stopAudio();
			playingFile = null;
		} else {
			playAudio(file);
			playingFile = file;
		}
	}

	function handleVolumeChange(event: Event) {
		const target = event.target as HTMLInputElement;
		setVolume(parseFloat(target.value));
		getVolumeSliders.forEach((slider) => {
			slider.value = `${$volume}`;
			slider.innerHTML = `${audioPercent} %`;
		});
	}

	const getAudioBtns = document.querySelectorAll('.Audio');
	const getVolumeSliders: NodeListOf<HTMLInputElement> = document.querySelectorAll('.VolumeSlider');

	if (getAudioBtns.length > 0) {
		console.log(getVolumeSliders);

		getVolumeSliders.forEach((slider) => {
			slider.addEventListener('input', (e) => {
				handleVolumeChange(e);
				slider.value = `${$volume}`;
				slider.innerHTML = `${audioPercent} %`;
			});
		});

		getAudioBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				handlePlayPause(btn.attributes.getNamedItem('audiosrc')?.value as string);
			});
		});
	}

	// Stop audio when component is destroyed
	onDestroy(() => stopAudio());
</script>

<main class="container mx-auto p-4">
	<div class="mt-4">
		{@render children?.()}
	</div>
</main>

<Footer sitePages={data.sitePages} curac={data.curac} />

<BackToTop />
