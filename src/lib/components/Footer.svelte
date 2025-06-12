<script lang="ts">
	import type { Curac } from '$lib/types';
	import Button from './Button.svelte';

	let { sitePages, curac }: { sitePages: Array<{ name: string; file: string }>; curac: Curac } =
		$props();
</script>

<div class="p-4">
	<p class="mt-8 flex justify-center text-sm">
		This app is licensed under &nbsp;
		<a
			href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
			target="_blank"
			rel="license noopener noreferrer"
			class="flex items-center"
		>
			CC BY-NC-SA 4.0
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
				alt="Creative Commons"
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
				alt="Attribution"
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
				alt="NonCommercial "
			/>
			<img
				class="ms-1 !h-4"
				src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
				alt="ShareAlike"
			/>
		</a>
	</p>
	{#if sitePages}
		<div class="mt-2 flex justify-center gap-3">
			{#each sitePages as sitePage (`${sitePage.file}-${sitePage.name}`)}
				<Button type="site" name={sitePage.name} siteBtn={true} sitePage={sitePage.file} {curac} />
			{/each}

			<a
				href="https://github.com/PsychoDude/vtol-app"
				target="_blank"
				class="flex items-center justify-center"
			>
				<img
					src="/images/github-mark-white.svg"
					alt="Github Repo"
					height="20"
					width="20"
					class="img-fluid"
				/>
			</a>
		</div>
	{/if}
</div>
