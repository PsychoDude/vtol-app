export const checklistStruct = [
	{
		aircraft: 'f45a',
		name: 'F-45A',
		hidden: false,
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				related: ['takeoff-runway', 'takeoff-CATOBAR', 'takeoff-short', 'vcap'],
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				related: [
					'departure',
					'flightdeck-overview',
					'case-1',
					'landing-runway',
					'landing-CATOBAR-preface',
					'landing-vtol',
					'vcap'
				],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				related: ['landing-CATOBAR', 'marshal', 'final', 'case-1'],
				for: 'aircraft',
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'V/STOL',
				file: 'svtol',
				related: ['takeoff-short', 'landing-vtol'],
				for: 'aircraft',
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Short Takeoff',
				file: 'takeoff-short',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol', 'vcap'],
				hidden: true,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Vertical Landing',
				file: 'landing-vtol',
				hidden: true,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'VCAP',
				file: 'vcap',
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'fa26b',
		name: 'F/A-26B',
		hidden: false,
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				related: ['takeoff-runway', 'takeoff-CATOBAR'],
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				related: [
					'departure',
					'flightdeck-overview',
					'case-1',
					'landing-runway',
					'landing-CATOBAR-preface'
				],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				related: ['landing-CATOBAR', 'marshal', 'final', 'case-1'],
				for: 'aircraft',
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ef24g',
		name: 'EF-24G',
		hidden: false,
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				related: ['wings', 'takeoff-runway', 'takeoff-CATOBAR'],
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				related: ['wings', 'landing-runway', 'landing-CATOBAR-preface'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				related: ['wings'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				related: [
					'departure',
					'flightdeck-overview',
					'wings',
					'case-1',
					'landing-runway',
					'landing-CATOBAR-preface'
				],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				related: ['wings', 'landing-CATOBAR', 'marshal', 'final', 'case-1'],
				for: 'aircraft',
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				related: ['wings'],
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Swept Wings',
				file: 'wings',
				related: ['takeoff-runway', 'landing-runway', 'takeoff-CATOBAR', 'landing-CATOBAR'],
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ah94',
		name: 'AH-94',
		hidden: false,
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup (PIC)',
				file: 'startup-pic',
				related: ['startup-cpg'],
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Startup (CPG)',
				file: 'startup-cpg',
				related: ['startup-pic'],
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (VERTICAL)',
				file: 'takeoff-vert',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (VERTICAL)',
				file: 'landing-vert',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (ROLL/HOV)',
				file: 'takeoff-rollhov',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (ROLL/HOV)',
				file: 'landing-rollhov',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 't55',
		name: 'T-55',
		hidden: false,
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				related: ['takeoff-runway', 'takeoff-CATOBAR'],
				hidden: false,
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (CARRIER)',
				file: 'takeoff-CATOBAR',
				related: [
					'departure',
					'flightdeck-overview',
					'case-1',
					'landing-runway',
					'landing-CATOBAR-preface'
				],
				hidden: false,
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Landing (CARRIER)',
				file: 'landing-CATOBAR-preface',
				related: ['landing-CATOBAR', 'marshal', 'final', 'case-1'],
				for: 'aircraft',
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing - CASE I',
				file: 'landing-CATOBAR',
				hidden: true,
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Basic Ops',
				file: 'basic-page',
				related: ['basic-resp', 'basic-ops'],
				hidden: false,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Reponsabilities',
				file: 'basic-resp',
				related: ['basic-ops'],
				hidden: true,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Controls',
				file: 'basic-ops',
				related: ['basic-resp'],
				hidden: true,
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				hidden: false,
				showGlobal: true,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'carrier',
		name: 'carrier',
		hidden: true,
		checklists: [
			{
				type: 'global',
				name: 'Flight Deck Overview',
				file: 'flightdeck-overview',
				showGlobal: true,
				hidden: false
			},
			{
				type: 'global',
				name: 'Departure',
				file: 'departure',
				related: ['case-1'],
				showGlobal: false,
				hidden: true
			},
			{
				type: 'page',
				for: 'carrier',
				name: 'Carrier Operations',
				file: 'ops',
				showGlobal: true,
				hidden: false
			},
			{
				type: 'global',
				name: 'Wave Off',
				file: 'waveoff',
				related: ['case-1'],
				showGlobal: true,
				showEmergencies: true,
				hidden: false
			},
			{
				type: 'global',
				name: 'LSO Guidance',
				file: 'lso-guidance',
				related: ['waveoff'],
				showGlobal: true,
				hidden: false
			},
			{
				type: 'page',
				name: 'Case 1 Ops',
				file: 'case-1',
				related: ['departure', 'marshal', 'final'],
				for: 'ops',
				showGlobal: true,
				hidden: true
			},
			{
				type: 'global',
				name: 'Marshal Stack Pattern',
				file: 'marshal',
				related: ['final'],
				showGlobal: false,
				hidden: true
			},
			{
				type: 'global',
				name: 'Final Approach',
				file: 'final',
				showGlobal: false,
				hidden: true
			},
			{
				type: 'global',
				name: 'Carrier Lights (Meatball) Img',
				file: 'meatball',
				showGlobal: true,
				hidden: false
			}
		]
	},
	{
		aircraft: 'global',
		name: 'global',
		hidden: true,
		checklists: [
			{
				type: 'page',
				name: 'Global',
				file: 'global',
				related: ['global-audio-cues', 'global-rwr'],
				for: 'global',
				showGlobal: true,
				hidden: false
			},
			{
				type: 'info',
				name: 'Audio Cues',
				file: 'global-audio-cues',
				related: ['global-rwr'],
				showGlobal: true,
				hidden: false
			},
			{
				type: 'info',
				name: 'RWR',
				file: 'global-rwr',
				related: ['global-audio-cues'],
				showGlobal: true,
				hidden: false
			},
			{
				type: 'important',
				name: 'Credits',
				file: 'credits',
				related: ['licenses'],
				showGlobal: true,
				hidden: false
			},
			{
				type: 'important',
				name: 'Licenses',
				file: 'licenses',
				related: ['credits'],
				showGlobal: true,
				hidden: false
			}
		]
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
				hidden: false,
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				hidden: false,
				related: ['landing-runway', 'landing-CATOBAR-preface', 'landing-vtol']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				hidden: false,
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
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
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
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			}
		]
	},
	{
		aircraft: 'ah94',
		checklists: [
			{
				type: 'emergency-page',
				name: 'Emergency Checklists',
				file: 'emerg',
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Single Engine Failure',
				file: 'singleengine',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: true
			},
			{
				type: 'emergency',
				name: 'Dual Engine Failure',
				file: 'dualengine',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: true
			},
			{
				type: 'emergency',
				name: 'Anti-Torque Failure',
				file: 'antitorque',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: true
			},
			{
				type: 'emergency',
				name: 'Auto-Rotation',
				file: 'autorotation',
				related: ['landing-vert', 'landing-rollhov'],
				hidden: true
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
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				related: ['landing-runway', 'landing-CATOBAR-preface'],
				hidden: false
			}
		]
	}
];
