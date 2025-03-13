export const checklistStruct = [
	{
		aircraft: 'f45a',
		name: 'F-45A',
		type: 'aircraft',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'F-45A',
				related: { f45a: ['takeoff-runway', 'takeoff-CATOBAR', 'takeoff-short', 'vcap'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'F-45A',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'F-45A',
				related: {
					carrier: ['departure', 'flightdeck-overview', 'case-1'],
					f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap']
				},
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'F-45A',
				related: { f45a: ['landing-CATOBAR'], carrier: ['marshal', 'final', 'case-1'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'F-45A',
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'V/STOL',
				file: 'svtol',
				for: 'F-45A',
				related: { f45a: ['takeoff-short', 'landing-vtol'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Short Takeoff',
				file: 'takeoff-short',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Vertical Landing',
				file: 'landing-vtol',
				for: 'F-45A',
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'VCAP',
				file: 'vcap',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'F-45A',
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'fa26b',
		name: 'F/A-26B',
		type: 'aircraft',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'F/A-26B',
				related: { fa26b: ['takeoff-runway', 'takeoff-CATOBAR'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'F/A-26B',
				related: { fa26b: ['landing-runway', 'landing-CATOBAR-preface'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'F/A-26B',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'F/A-26B',
				related: {
					carrier: ['departure', 'flightdeck-overview', 'case-1'],
					fa26b: ['landing-runway', 'landing-CATOBAR-preface']
				},
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'F/A-26B',
				related: { fa26b: ['landing-CATOBAR'], carrier: ['marshal', 'final', 'case-1'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'F/A-26B',
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'F/A-26B',
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ef24g',
		name: 'EF-24G',
		type: 'aircraft',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'takeoff-runway', 'takeoff-CATOBAR'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'landing-runway', 'landing-CATOBAR-preface'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'EF-24G',
				related: { ef24g: ['wings'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'EF-24G',
				related: {
					carrier: ['departure', 'flightdeck-overview', 'case-1'],
					ef24g: ['wings', 'landing-runway', 'landing-CATOBAR-preface']
				},
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'landing-CATOBAR'], carrier: ['marshal', 'final', 'case-1'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'EF-24G',
				related: { ef24g: ['wings'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Swept Wings',
				file: 'wings',
				for: 'EF-24G',
				related: {
					ef24g: ['takeoff-runway', 'landing-runway', 'takeoff-CATOBAR', 'landing-CATOBAR']
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'EF-24G',
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ah94',
		name: 'AH-94',
		type: 'aircraft',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup (PIC)',
				file: 'startup-pic',
				for: 'AH-94',
				related: { ah94: ['startup-cpg', 'takeoff-vert', 'takeoff-rollhov'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Startup (CPG)',
				file: 'startup-cpg',
				for: 'AH-94',
				related: { ah94: ['startup-pic', 'takeoff-vert', 'takeoff-rollhov'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (VERTICAL)',
				file: 'takeoff-vert',
				for: 'AH-94',
				related: { ah94: ['landing-vert', 'landing-rollhov'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (VERTICAL)',
				file: 'landing-vert',
				for: 'AH-94',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (ROLL/HOV)',
				file: 'takeoff-rollhov',
				for: 'AH-94',
				related: { ah94: ['landing-vert', 'landing-rollhov'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (ROLL/HOV)',
				file: 'landing-rollhov',
				for: 'AH-94',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'AH-94',
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 't55',
		name: 'T-55',
		type: 'aircraft',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'T-55',
				related: { t55: ['takeoff-runway', 'takeoff-CATOBAR'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'T-55',
				related: { t55: ['landing-runway', 'landing-CATOBAR-preface'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'T-55',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'T-55',
				related: {
					carrier: ['departure', 'flightdeck-overview', 'case-1'],
					t55: ['landing-runway', 'landing-CATOBAR-preface']
				},
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'T-55',
				related: { t55: ['landing-CATOBAR'], carrier: ['marshal', 'final', 'case-1'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'T-55',
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Basic Ops',
				file: 'basic-page',
				for: 'T-55',
				related: { t55: ['basic-resp', 'basic-ops'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Reponsabilities',
				file: 'basic-resp',
				for: 'T-55',
				related: { t55: ['basic-ops'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Controls',
				file: 'basic-ops',
				for: 'T-55',
				related: { t55: ['basic-resp'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'T-55',
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'carrier',
		name: 'Carrier Operations',
		type: 'global',
		checklists: [
			{
				type: 'global',
				name: 'Flight Deck Overview',
				file: 'flightdeck-overview',
				for: 'carrier',
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'global',
				name: 'Wave Off',
				file: 'waveoff',
				for: 'carrier',
				related: { carrier: ['case-1'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'global',
				name: 'LSO Guidance',
				file: 'lso-guidance',
				for: 'carrier',
				related: { carrier: ['waveoff'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'global',
				name: 'Carrier Lights (Meatball) Img',
				file: 'meatball',
				for: 'carrier',
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'page',
				name: 'Case 1 Ops',
				file: 'case-1',
				for: 'carrier',
				related: { carrier: ['departure', 'marshal', 'final'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Departure',
				file: 'departure',
				for: 'carrier',
				related: { carrier: ['case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Marshal Stack Pattern',
				file: 'marshal',
				for: 'carrier',
				related: { carrier: ['final'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Final Approach',
				file: 'final',
				for: 'carrier',
				showGlobal: false,
				showEmergencies: false
			}
		]
	},
	{
		aircraft: 'global',
		name: 'Global',
		type: 'global',
		checklists: [
			{
				type: 'info',
				name: 'Audio Cues',
				file: 'audio-cues',
				for: 'global',
				related: { global: ['rwr'] },
				showGlobal: true,
				hidden: false,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'RWR',
				file: 'rwr',
				for: 'global',
				related: { global: ['audio-cues'] },
				showGlobal: true,
				hidden: false,
				showEmergencies: false
			}
		]
	}
];

export const siteChecklistStruct = [
	{
		name: 'Credits',
		file: 'credits',
		related: ['licenses']
	},
	{
		name: 'Licenses',
		file: 'licenses',
		related: ['credits']
	}
];

export const emergencyChecklistsStruct = [
	{
		aircraft: 'f45a',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'F-45A',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'F-45A',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'F-45A',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			}
		]
	},
	{
		aircraft: 'fa26b',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'F/A-26B',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'F/A-26B',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'F/A-26B',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			}
		]
	},
	{
		aircraft: 'ef24g',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'EF-24G',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'EF-24G',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'EF-24G',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			}
		]
	},
	{
		aircraft: 'ah94',
		checklists: [
			{
				type: 'emergency',
				name: 'Single Engine Failure',
				file: 'singleenginefailure',
				for: 'AH-94',
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Dual Engine Failure',
				file: 'dualenginefailure',
				for: 'AH-94',
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Anti-Torque Failure',
				file: 'antitorque',
				for: 'AH-94',
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Auto-Rotation',
				file: 'autorotation',
				for: 'AH-94',
				related: ['landing-vert', 'landing-rollhov']
			}
		]
	},
	{
		aircraft: 't55',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'T-55',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'T-55',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'T-55',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			}
		]
	}
];

export function getRelatedChecklistsByAircraftAndFile(aircraft: string, file: string) {
	const checklist = checklistStruct.find(
		(aircraftEntry) =>
			aircraftEntry.aircraft === aircraft &&
			aircraftEntry.checklists.some((checklist) => checklist.file === file)
	);

	if (!checklist?.checklists) return {};

	const relatedChecklist = checklist.checklists.find((chk) => chk.file === file);

	return relatedChecklist ? relatedChecklist.related : {};
}

export function getRelatedEmergencyChecklistsByAircraftAndFile(aircraft: string, file: string) {
	const checklist = emergencyChecklistsStruct.find(
		(aircraftEntry) =>
			aircraftEntry.aircraft === aircraft &&
			aircraftEntry.checklists.some((checklist) => checklist.file === file)
	);

	if (!checklist?.checklists) return {};

	const relatedChecklist = checklist.checklists.find((chk) => chk.file === file);

	return relatedChecklist ? relatedChecklist.related : {};
}

export function getRelatedChecklistsByFile(file: string) {
	const checklist = siteChecklistStruct.find((list) => list.file === file);
	const related = checklist?.related;

	return related ? related : {};
}

export function getPageName(type: string, file: string, aircraft?: string) {
	switch (true) {
		case type === 'site':
			{
				const siteList = siteChecklistStruct.find((checklist) => checklist.file === file);

				if (siteList) return siteList.name;
			}
			break;
		case type === 'aircraft':
			{
				const aircraftList = checklistStruct
					.find((checklist) => checklist.aircraft === aircraft)
					?.checklists.find((checklist) => checklist.file === file);

				if (aircraftList) return aircraftList.name;
			}
			break;
		case type === 'emergency':
			{
				const emergencyList = emergencyChecklistsStruct
					.find((checklist) => checklist.aircraft === aircraft)
					?.checklists.find((checklist) => checklist.file === file);

				if (emergencyList) return emergencyList.name;
			}
			break;
	}
}

export function getAircraftName(aircraft: string) {
	const aircraftList = checklistStruct.find((checklist) => checklist.aircraft === aircraft);
	return aircraftList?.name;
}

export function getAircraftType(aircraft: string) {
	const aircraftList = checklistStruct.find((checklist) => checklist.aircraft === aircraft);
	return aircraftList?.type;
}

export function getChecklistParams(file: string, aircraft: string) {
	const data = checklistStruct
		.find((planeData) => planeData.aircraft === aircraft)
		?.checklists.find((list) => list.file === file);

	if (data)
		return {
			showGlobal: data.showGlobal,
			showEmergencies: data.showEmergencies
		};
}

export function getSitePageName(file: string) {
	const pageName = siteChecklistStruct.find((page) => page.file === file)?.name;
	return pageName;
}

export function getAllAircraftNames() {
	const aircraftNames: { aircraft: string; name: string }[] = [];

	checklistStruct.forEach((plane) => {
		aircraftNames.push({
			aircraft: plane.aircraft,
			name: plane.name
		});
	});

	return aircraftNames;
}
