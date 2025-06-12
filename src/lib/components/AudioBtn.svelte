<script lang="ts">
	import { playAudio, stopAudio, setVolume, volume, playingFile } from '$lib/stores/audio';
	import { onDestroy } from 'svelte';

	let { file } = $props();

	function handlePlayPause(file: string) {
		if ($playingFile === file) {
			stopAudio();
			$playingFile = null;
		} else {
			playAudio(file);
			$playingFile = file;
		}
	}

	function handleVolumeChange(event: Event) {
		const target = event.target as HTMLInputElement;
		setVolume(parseFloat(target.value));
	}

	onDestroy(() => {
		stopAudio();
		$playingFile = null;
	});
</script>

<div class="flex items-center justify-center gap-3" id={file}>
	<button
		onclick={() => handlePlayPause(file)}
		class="cursor-pointer rounded bg-amber-500 px-4 py-2 text-black hover:bg-amber-700"
	>
		{$playingFile === file ? 'Stop' : 'Play'}
	</button>
	<div class="flex items-center justify-center">
		<label for="volume" class="pe-3">Volume:</label>
		<input
			id="volume"
			type="range"
			min="0"
			max="1"
			step="0.01"
			bind:value={$volume}
			oninput={handleVolumeChange}
		/>
		<span class="ps-3">{Math.round($volume * 100)}%</span>
	</div>
</div>
