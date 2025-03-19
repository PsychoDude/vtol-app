<script lang="ts">
	import { playAudio, stopAudio, setVolume, volume } from '$lib/stores/audio';
	import { onDestroy } from 'svelte';

	let audioFiles: string[] = [
		'/audio/TtswmissileLaunch.ogg',
		'/audio/MwsTone.ogg',
		'/audio/RwrNewContact3.ogg',
		'/audio/RwrPing3.ogg',
		'/audio/RadarLockLoop.ogg',
		'/audio/SARHLockLoop.ogg',
		'/audio/MissileLockLoopx7.ogg'
	];

	let playingFile: string | null = null;

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
	}

	// Stop audio when component is destroyed
	onDestroy(() => stopAudio());
</script>

{#each audioFiles as file}
	<div class="flex justify-center">
		<button
			on:click={() => handlePlayPause(file)}
			class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
		>
			{playingFile === file ? 'Pause' : 'Play'}
			{file}
		</button>
	</div>
{/each}

<!-- Volume Control -->

<div class="flex items-center justify-center">
	<label for="volume" class="pe-3">Volume:</label>
	<input
		id="volume"
		type="range"
		min="0"
		max="1"
		step="0.01"
		bind:value={$volume}
		on:input={handleVolumeChange}
		class="Volume"
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
