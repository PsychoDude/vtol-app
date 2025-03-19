import { writable } from 'svelte/store';

type AudioState = {
	element: HTMLAudioElement;
	source: MediaElementAudioSourceNode;
} | null;

export const currentAudio = writable<AudioState>(null);
export const volume = writable<number>(1.0); // Store global volume
export const playingFile = writable<string | null>(null); // Track currently playing file

let audioContext: AudioContext | null = null;

export function playAudio(src: string) {
	if (typeof window !== 'undefined') {
		if (!audioContext) {
			audioContext = new AudioContext();
		}

		if (audioContext.state === 'suspended') {
			audioContext.resume();
		}

		// Stop previous audio if playing
		stopAudio();

		// Create and play new audio
		const audioElement = new Audio(src);
		const track = audioContext.createMediaElementSource(audioElement);
		track.connect(audioContext.destination);

		// Apply stored volume
		volume.subscribe((vol) => {
			audioElement.volume = vol;
		});

		// When audio ends, reset playingFile
		audioElement.addEventListener('ended', () => {
			playingFile.set(null);
		});

		audioElement.play();
		currentAudio.set({ element: audioElement, source: track });
		playingFile.set(src); // Update playing file
	}
}

export function stopAudio() {
	currentAudio.update((audio) => {
		if (audio) {
			audio.element.pause();
			audio.source.disconnect();
		}
		return null;
	});
	playingFile.set(null);
}

export function setVolume(vol: number) {
	volume.set(vol); // Update global volume
	currentAudio.update((audio) => {
		if (audio) {
			audio.element.volume = vol;
		}
		return audio;
	});
}
