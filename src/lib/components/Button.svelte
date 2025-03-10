<script lang="ts">
	import { goto } from '$app/navigation';

	let data = $props();

	const colorForTypes: Record<string, string> = {
		aircraft: 'blue',
		globalPage: 'green',
		checklist: 'green',
		emergency: 'red',
		back: 'neutral',
		related: 'green',
		relatedEmergency: 'red'
	};

	const color: string = colorForTypes[data.type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700',
		blue: 'bg-blue-500 hover:bg-blue-700',
		red: 'bg-red-500 hover:bg-red-700',
		neutral: 'bg-neutral-500 hover:bg-neutral-700'
	};
	const mainBtns: Record<string, string> = {
		true: 'rounded h-70',
		false: ''
	};

	function aircraftRedirect(plane: string) {
		goto(`/${plane}`);
	}

	function globalPageRedirect(plane: string, file: string) {
		goto(`/${[plane]}/${file}`);
	}

	function globalRedirect(plane: string, file: string) {
		goto(`/${plane}/${file}`);
	}

	function checklistRedirect(plane: string, file: string) {
		goto(`/${plane}/${file}`);
	}

	function emergencyRedirect(plane: string, file: string) {
		goto(`/${plane}/emergency/${file}`);
	}

	function siteRedirect(file: string) {
		goto(`/site/${file}`);
	}

	function caseOneRedirect(plane: string, file: string) {
		goto(`/${plane}/case-1/${file}`);
	}

	let aircraftNameForBtn = '';

	if (data.info.for !== 'carrier' && data.info.for !== 'global' && data.info.for !== 'site')
		aircraftNameForBtn = data.aircraftLabel ? data.info.for : '';

	const btnText = aircraftNameForBtn ? `${data.info.name} (${aircraftNameForBtn})` : data.info.name;
</script>

<button
	class={`rounded ${colorVariants[color]} px-4 py-2 text-white ${mainBtns[data.mainBtns]} cursor-pointer`}
	onclick={() => {
		switch (true) {
			case data.siteBtn:
				siteRedirect(data.info.file);
				break;
			case data.type === 'aircraft':
				aircraftRedirect(data.info.aircraft);
				break;
			case data.type === 'globalPage':
				globalPageRedirect(data.info.aircraft, data.info.page);
				break;
			case data.type === 'checklist':
				checklistRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'emergency':
				emergencyRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'back':
				window.history.back();
				break;
			case data.type === 'related':
				if (data.aircraft === 'global') {
					globalRedirect(data.aircraft, data.info.file);
					break;
				}
				if (data.info.aircraft === 'emergency') {
					emergencyRedirect(data.aircraft, data.info.file);
					break;
				}
				if (data.aircraft === 'carrier' && data.info.type === 'case-1') {
					console.log('wtf');
					caseOneRedirect(data.aircraft, data.info.file);
					break;
				}

				checklistRedirect(data.aircraft, data.info.file);
				break;
			case data.type === 'relatedEmergency':
				emergencyRedirect(data.aircraft, data.info.file);
				break;

			default:
				break;
		}
	}}
>
	{`${btnText}`}
</button>
