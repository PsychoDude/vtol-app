<script lang="ts">
	import { goto } from '$app/navigation';

	let data = $props();

	const colorForTypes: Record<string, string> = {
		aircraft: 'blue',
		globalPage: 'green',
		checklist: 'green',
		emergency: 'red',
		back: 'gray',
		related: 'green',
		relatedEmergency: 'red'
	};

	const color: string = colorForTypes[data.type];

	const colorVariants: Record<string, string> = {
		green: 'bg-green-500 hover:bg-green-700',
		blue: 'bg-blue-500 hover:bg-blue-700',
		red: 'bg-red-500 hover:bg-red-700',
		gray: 'bg-gray-500 hover:bg-gray-700'
	};
	const mainBtns: Record<string, string> = {
		true: 'rounded h-70',
		false: ''
	};

	function aircraftRedirect(plane: string) {
		goto(`/${plane}`);
	}

	function globalPageRedirect(plane: string, file: string) {
		goto(`/${plane}/${file}`);
	}

	function checklistRedirect(plane: string, file: string) {
		goto(`/${plane}/${file}`);
	}

	function emergencyRedirect(plane: string, file: string) {
		goto(`/${plane}/emergency/${file}`);
	}

	let aircraftNameForBtn;

	console.log(data.aircraftLabel);
	if (
		data.info.for !== 'carrier' &&
		data.info.for !== 'global' &&
		data.info.for !== 'site' &&
		data.aircraftLabel
	)
		aircraftNameForBtn = data.aircraftLabel ? data.info.for : '';
	const btnText = aircraftNameForBtn ? `${data.info.name} (${aircraftNameForBtn})` : data.info.name;
</script>

<button
	class={`rounded ${colorVariants[color]} px-4 py-2 text-white ${mainBtns[data.mainBtns]}`}
	onclick={() => {
		switch (true) {
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
				history.back();
				break;
			case data.type === 'related':
				if (data.info.aircraft === 'globalPages') {
					globalPageRedirect(data.aircraft, data.info.file);
					break;
				}
				if (data.info.aircraft === 'emergency') {
					emergencyRedirect(data.aircraft, data.info.file);
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
