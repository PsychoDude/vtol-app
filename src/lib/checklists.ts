export const checklistStruct = [
	{
		aircraft: 'f45a',
		name: 'F-45A',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'F-45A',
				related: { f45a: ['takeoff-runway', 'takeoff-CATOBAR', 'takeoff-short', 'vcap'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'F-45A',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'F-45A',
				related: {
					f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'],
					carrier: ['departure', 'flightdeck-overview', 'case-1']
				},
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'F-45A',
				related: { f45a: ['landing-CATOBAR'], carrier: ['marshal', 'final', 'case-1'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'F-45A',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'V/STOL',
				file: 'svtol',
				for: 'F-45A',
				related: { f45a: ['takeoff-short', 'landing-vtol'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Short Takeoff',
				file: 'takeoff-short',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'] },
				hidden: true,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Vertical Landing',
				file: 'landing-vtol',
				for: 'F-45A',
				hidden: true,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'VCAP',
				file: 'vcap',
				for: 'F-45A',
				related: { f45a: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'F-45A',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'fa26b',
		name: 'F/A-26B',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'F/A-26B',
				related: { fa26b: ['takeoff-runway', 'takeoff-CATOBAR'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'F/A-26B',
				related: { fa26b: ['landing-runway', 'landing-CATOBAR-preface'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'F/A-26B',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'F/A-26B',
				related: {
					fa26b: [
						'departure',
						'flightdeck-overview',
						'case-1',
						'landing-runway',
						'landing-CATOBAR-preface'
					]
				},
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'F/A-26B',
				related: { fa26b: ['landing-CATOBAR', 'marshal', 'final', 'case-1'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'F/A-26B',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'F/A-26B',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ef24g',
		name: 'EF-24G',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'takeoff-runway', 'takeoff-CATOBAR'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'landing-runway', 'landing-CATOBAR-preface'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'EF-24G',
				related: { ef24g: ['wings'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'EF-24G',
				related: {
					ef24g: [
						'departure',
						'flightdeck-overview',
						'wings',
						'case-1',
						'landing-runway',
						'landing-CATOBAR-preface'
					]
				},
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'EF-24G',
				related: { ef24g: ['wings', 'landing-CATOBAR', 'marshal', 'final', 'case-1'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'EF-24G',
				related: { ef24g: ['wings'] },
				hidden: true,
				showGlobal: true,
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
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'EF-24G',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ah94',
		name: 'AH-94',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup (PIC)',
				file: 'startup-pic',
				for: 'AH-94',
				related: { ah94: ['startup-cpg'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Startup (CPG)',
				file: 'startup-cpg',
				for: 'AH-94',
				related: { ah94: ['startup-pic'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (VERTICAL)',
				file: 'takeoff-vert',
				for: 'AH-94',
				related: { ah94: ['landing-vert', 'landing-rollhov'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (VERTICAL)',
				file: 'landing-vert',
				for: 'AH-94',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (ROLL/HOV)',
				file: 'takeoff-rollhov',
				for: 'AH-94',
				related: { ah94: ['landing-vert', 'landing-rollhov'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (ROLL/HOV)',
				file: 'landing-rollhov',
				for: 'AH-94',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'AH-94',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 't55',
		name: 'T-55',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'T-55',
				related: { t55: ['takeoff-runway', 'takeoff-CATOBAR'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'T-55',
				related: { t55: ['landing-runway', 'landing-CATOBAR-preface'] },
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'T-55',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				for: 'T-55',
				related: {
					t55: [
						'departure',
						'flightdeck-overview',
						'case-1',
						'landing-runway',
						'landing-CATOBAR-preface'
					]
				},
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				for: 'T-55',
				related: { t55: ['landing-CATOBAR', 'marshal', 'final', 'case-1'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				for: 'T-55',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Basic Ops',
				file: 'basic-page',
				for: 'T-55',
				related: { t55: ['basic-resp', 'basic-ops'] },
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Reponsabilities',
				file: 'basic-resp',
				for: 'T-55',
				related: { t55: ['basic-ops'] },
				hidden: true,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Controls',
				file: 'basic-ops',
				for: 'T-55',
				related: { t55: ['basic-resp'] },
				hidden: true,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'T-55',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'carrier',
		name: 'Carrier Operations',
		page: 'ops',
		checklists: [
			{
				type: 'global',
				name: 'Flight Deck Overview',
				file: 'flightdeck-overview',
				for: 'carrier',
				showGlobal: true,
				hidden: false
			},
			{
				type: 'case-1',
				name: 'Departure',
				file: 'departure',
				for: 'carrier',
				related: { carrier: ['case-1'] },
				showGlobal: false,
				hidden: true
			},
			{
				type: 'page',
				name: 'Carrier Operations',
				file: 'ops',
				for: 'carrier',
				related: { carrier: ['flightdeck-overview', 'departure', 'case-1'] },
				showGlobal: true,
				hidden: true
			},
			{
				type: 'global',
				name: 'Wave Off',
				file: 'waveoff',
				for: 'carrier',
				related: { carrier: ['case-1'] },
				showGlobal: true,
				showEmergencies: true,
				hidden: false
			},
			{
				type: 'global',
				name: 'LSO Guidance',
				file: 'lso-guidance',
				for: 'carrier',
				related: { carrier: ['waveoff'] },
				showGlobal: true,
				hidden: false
			},
			{
				type: 'page',
				name: 'Case 1 Ops',
				file: 'case-1',
				for: 'carrier',
				related: { carrier: ['departure', 'marshal', 'final'] },
				showGlobal: true,
				hidden: false
			},
			{
				type: 'case-1',
				name: 'Marshal Stack Pattern',
				file: 'marshal',
				for: 'carrier',
				related: { carrier: ['final'] },
				showGlobal: false,
				hidden: true
			},
			{
				type: 'case-1',
				name: 'Final Approach',
				file: 'final',
				for: 'carrier',
				showGlobal: false,
				hidden: true
			},
			{
				type: 'global',
				name: 'Carrier Lights (Meatball) Img',
				file: 'meatball',
				for: 'carrier',
				showGlobal: true,
				hidden: false
			}
		]
	},
	{
		aircraft: 'global',
		name: 'Global',
		page: 'global',
		checklists: [
			{
				type: 'page',
				name: 'Global',
				file: 'global',
				for: 'global',
				related: { global: ['audio-cues', 'rwr'] },
				showGlobal: true,
				hidden: false
			},
			{
				type: 'info',
				name: 'Audio Cues',
				file: 'audio-cues',
				for: 'global',
				related: { global: ['rwr'] },
				showGlobal: true,
				hidden: false
			},
			{
				type: 'info',
				name: 'RWR',
				file: 'rwr',
				for: 'global',
				related: { global: ['audio-cues'] },
				showGlobal: true,
				hidden: false
			}
		]
	}
];

export const siteChecklistStruct = [
	{
		name: 'Credits',
		file: 'credits',
		for: 'site',
		related: ['licenses'],
		showGlobal: true,
		hidden: false
	},
	{
		name: 'Licenses',
		file: 'licenses',
		for: 'site',
		related: ['credits'],
		showGlobal: true,
		hidden: false
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
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
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
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
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
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
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
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Dual Engine Failure',
				file: 'dualenginefailure',
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Anti-Torque Failure',
				file: 'antitorque',
				related: ['landing-vert', 'landing-rollhov']
			},
			{
				type: 'emergency',
				name: 'Auto-Rotation',
				file: 'autorotation',
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
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
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

export function getRelatedChecklistsByFile(file: string) {
	const checklist = siteChecklistStruct.find((list) => list.file === file);
	const related = checklist?.related;

	return related ? related : {};
}
