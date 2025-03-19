# **Missiles**

> Missile launched nearby:

<audio controls preload="none">
<source src="/audio/TtswmissileLaunch.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/TtswmissileLaunch.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
    </button>
    <div class="flex items-center justify-center">
	<label for="volume" class="pe-3">Volume:</label>
	<input
		id="volume"
		type="range"
		min="0"
		max="1"
		step="0.01"
        value="1"
        class="VolumeSlider"
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

> Incoming missile on intercept trajectory:

<audio controls preload="none">
<source src="/audio/MwsTone.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/MwsTone.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
    </button>
    <div class="flex items-center justify-center">
	<label for="volume" class="pe-3">Volume:</label>
	<input
		id="volume"
		type="range"
		min="0"
		max="1"
		step="0.01"
		value="1"
        class="VolumeSlider"
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

# **RWR**

> New radar source appearing:

<audio controls preload="none">
<source src="/audio/RwrNewContact3.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/RwrNewContact3.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
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
		on:input={handleVolumeChange}
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

> Incoming radar search ping.
>
> Plays at a faster rate when being tracked:

<audio controls preload="none">
<source src="/audio/RwrPing3.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/RwrPing3.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
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
		on:input={handleVolumeChange}
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

> Incoming hard radar lock:

<audio controls preload="none">
<source src="/audio/RadarLockLoop.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/RadarLockLoop.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
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
		on:input={handleVolumeChange}
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

> Incoming hard radar lock that is supporting a SARH missile:

<audio controls preload="none">
<source src="/audio/SARHLockLoop.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/SARHLockLoop.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
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
		on:input={handleVolumeChange}
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>

> Incoming radar lock from an ARH missile.

<audio controls preload="none">
<source src="/audio/MissileLockLoopx7.ogg" type="audio/ogg">
</audio>

<div class="flex justify-center items-center gap-3">
    <button audiosrc="/audio/MwsTone.ogg"
        class="Audio cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
    >
        Play
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
		on:input={handleVolumeChange}
	/>
	<span class="ps-3">{Math.round($volume * 100)}%</span>
</div>
</div>
