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
					carrier: ['reference-card', 'departure', 'flightdeck-overview', 'case-1', 'case-3'],
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
				related: {
					f45a: ['landing-CATOBAR'],
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing',
				file: 'landing-CATOBAR',
				for: 'F-45A',
				related: {
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
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
				related: { f45a: ['missiles', 'bombs'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'F-45A',
				related: { f45a: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'F-45A',
				related: { f45a: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
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
					carrier: ['reference-card', 'departure', 'flightdeck-overview', 'case-1', 'case-3'],
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
				related: {
					fa26b: ['landing-CATOBAR'],
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing',
				file: 'landing-CATOBAR',
				for: 'F/A-26B',
				related: {
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'page',
				name: 'Weapons',
				file: 'weapons',
				for: 'F/A-26B',
				related: { fa26b: ['missiles', 'bombs'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'F/A-26B',
				related: { fa26b: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'F/A-26B',
				related: { fa26b: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
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
					carrier: ['reference-card', 'departure', 'flightdeck-overview', 'case-1', 'case-3'],
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
				related: {
					ef24g: ['wings', 'landing-CATOBAR'],
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing',
				file: 'landing-CATOBAR',
				for: 'EF-24G',
				related: {
					ef24g: ['wings'],
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
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
				related: { ef24g: ['missiles', 'bombs'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'EF-24G',
				related: { ef24g: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'EF-24G',
				related: { ef24g: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
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
					carrier: ['reference-card', 'departure', 'flightdeck-overview', 'case-1', 'case-3'],
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
				related: {
					t55: ['landing-CATOBAR'],
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Carrier Landing',
				file: 'landing-CATOBAR',
				for: 'T-55',
				related: {
					carrier: ['reference-card', 'waveoff', 'lso-guidance', 'symbology', 'case-1', 'case-3']
				},
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
				related: { t55: ['basic-ops', 'basic-page'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Controls',
				file: 'basic-ops',
				for: 'T-55',
				related: { t55: ['basic-resp', 'basic-page'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'T-55',
				related: { t55: ['missiles', 'bombs', 'basic-resp'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'T-55',
				related: { t55: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'T-55',
				related: { t55: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
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
				related: { carrier: ['reference-card', 'case-1', 'case-3'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'global',
				name: 'LSO Guidance',
				file: 'lso-guidance',
				for: 'carrier',
				related: { carrier: ['reference-card', 'waveoff', 'case-1', 'case-3'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'global',
				name: 'Carrier Landing Symbology',
				file: 'symbology',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-1', 'case-3'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'global',
				name: 'Wave Off',
				file: 'waveoff',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-1', 'case-3'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'global',
				name: 'Carrier Ops Reference Card',
				file: 'reference-card',
				for: 'carrier',
				related: { carrier: ['case-1', 'case-3'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'page',
				name: 'CASE 1 Ops',
				file: 'case-1',
				for: 'carrier',
				related: {
					carrier: [
						'reference-card',
						'1-departure',
						'1-marshal',
						'1-final',
						'1-waveoff',
						'1-touchdown'
					]
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Departure',
				file: '1-departure',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Marshal Stack Pattern',
				file: '1-marshal',
				for: 'carrier',
				related: { carrier: ['reference-card', '1-final', 'case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Final Approach',
				file: '1-final',
				for: 'carrier',
				related: { carrier: ['reference-card', '1-waveoff', '1-touchdown', 'case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Wave Off',
				file: '1-waveoff',
				for: 'carrier',
				related: { carrier: ['reference-card', 'waveoff', 'case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-1',
				name: 'Touchdown',
				file: '1-touchdown',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-1'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'page',
				name: 'CASE 3 Ops',
				file: 'case-3',
				for: 'carrier',
				related: {
					carrier: [
						'3-kneeboard',
						'3-marshal',
						'3-final-standard',
						'3-final-bullseye',
						'3-final',
						'3-waveoff',
						'3-touchdown'
					]
				},
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Kneeboard',
				file: '3-kneeboard',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-3'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Marshal Stack Pattern',
				file: '3-marshal',
				for: 'carrier',
				related: {
					carrier: [
						'reference-card',
						'3-final-standard',
						'3-final-bullseye',
						'3-final',
						'3-waveoff',
						'3-touchdown',
						'case-3'
					]
				},
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Needles/ICLS Approach',
				file: '3-final-standard',
				for: 'carrier',
				related: { carrier: ['reference-card', '3-waveoff', '3-final', 'case-3'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'No HSI/ICLS Fail Approach',
				file: '3-final-bullseye',
				for: 'carrier',
				related: { carrier: ['reference-card', '3-waveoff', '3-final', 'case-3'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Final Approach',
				file: '3-final',
				for: 'carrier',
				related: { carrier: ['reference-card', '3-waveoff', '3-touchdown', 'case-3'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Wave Off',
				file: '3-waveoff',
				for: 'carrier',
				related: { carrier: ['reference-card', 'waveoff', 'case-3'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'case-3',
				name: 'Touchdown',
				file: '3-touchdown',
				for: 'carrier',
				related: { carrier: ['reference-card', 'case-3'] },
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
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'RWR',
				file: 'rwr',
				for: 'global',
				related: { global: ['audio-cues'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'page',
				name: 'Bombing',
				file: 'bombing',
				for: 'global',
				related: { global: ['unguided-bombs', 'gps-guided-bombs', 'laser-guided-bombs', 'gbu-53'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'Unguided Bombs',
				file: 'unguided-bombs',
				for: 'global',
				related: { global: ['gps-guided-bombs', 'laser-guided-bombs', 'gbu-53'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'GPS Guided Bombs',
				file: 'gps-guided-bombs',
				for: 'global',
				related: { global: ['unguided-bombs', 'laser-guided-bombs', 'gbu-53'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'Laser Guided Bombs',
				file: 'laser-guided-bombs',
				for: 'global',
				related: { global: ['unguided-bombs', 'gps-guided-bombs', 'gbu-53'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'GBU-53 Bomb',
				file: 'gbu-53',
				for: 'global',
				related: {
					global: ['unguided-bombs', 'gps-guided-bombs', 'laser-guided-bombs']
				},
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'page',
				name: 'Countermeasures',
				file: 'cm',
				for: 'global',
				related: { global: ['chaff'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'Chaff',
				file: 'chaff',
				for: 'global',
				related: { global: ['cm'] },
				showGlobal: false,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'Basic Terminology',
				file: 'terminology',
				for: 'global',
				related: { global: ['advanced-terminology'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'info',
				name: 'Advanced Terminology',
				file: 'advanced-terminology',
				for: 'global',
				related: { global: ['terminology'] },
				showGlobal: true,
				showEmergencies: false
			}
		]
	},
	{
		aircraft: 'f16c',
		name: 'F-16C',
		type: 'moddedac',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'F-16C',
				related: { f16c: ['takeoff-runway'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'F-16C',
				related: { f16c: ['landing-runway'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'F-16C',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'F-16C',
				showGlobal: true,
				related: { f16c: ['missiles', 'bombs'] },
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'F-16C',
				related: { f16c: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'F-16C',
				related: { f16c: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'a10d',
		name: 'A-10D',
		type: 'moddedac',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup',
				file: 'startup',
				for: 'A-10D',
				related: { f16c: ['takeoff-runway'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (RWY)',
				file: 'takeoff-runway',
				for: 'A-10D',
				related: { f16c: ['landing-runway'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (RWY)',
				file: 'landing-runway',
				for: 'A-10D',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'A-10D',
				related: { a10d: ['missiles', 'bombs'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Missiles',
				file: 'missiles',
				for: 'A-10D',
				related: { a10d: ['bombs', 'weapons'] },
				showGlobal: false,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Bombs',
				file: 'bombs',
				for: 'A-10D',
				related: { a10d: ['missiles', 'weapons'], global: ['bombing'] },
				showGlobal: false,
				showEmergencies: true
			}
		]
	},
	{
		aircraft: 'ah6',
		name: 'AH-6',
		type: 'moddedac',
		checklists: [
			{
				type: 'aircraft',
				name: 'Startup (PIC)',
				file: 'startup-pic',
				for: 'AH-6',
				related: { ah6: ['startup-cpg', 'takeoff-vert', 'takeoff-hov', 'basic-resp'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Startup (CPG)',
				file: 'startup-cpg',
				for: 'AH-6',
				related: { ah6: ['startup-pic', 'takeoff-vert', 'takeoff-hov', 'basic-resp'] },
				showGlobal: true,
				showEmergencies: false
			},
			{
				type: 'aircraft',
				name: 'Takeoff (VERTICAL)',
				file: 'takeoff-vert',
				for: 'AH-6',
				related: { ah6: ['landing-vert', 'landing-hov'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (VERTICAL)',
				file: 'landing-vert',
				for: 'AH-6',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Takeoff (HOVER)',
				file: 'takeoff-hov',
				for: 'AH-6',
				related: { ah6: ['landing-vert', 'landing-hov'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Landing (HOVER)',
				file: 'landing-hov',
				for: 'AH-6',
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Weapons',
				file: 'weapons',
				for: 'AH-6',
				related: { ah6: ['basic-resp'] },
				showGlobal: true,
				showEmergencies: true
			},
			{
				type: 'aircraft',
				name: 'Reponsabilities',
				file: 'basic-resp',
				for: 'AH-6',
				related: { ah6: ['weapons'] },
				showGlobal: true,
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
	},
	{
		aircraft: 'f16c',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'F-16C',
				related: ['landing-runway']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'F-16C',
				related: ['landing-runway']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'F-16C',
				related: ['landing-runway']
			}
		]
	},
	{
		aircraft: 'a10d',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'A-10D',
				related: ['landing-runway']
			},
			{
				type: 'emergency',
				name: 'Engine/APU Fire',
				file: 'fire',
				for: 'A-10D',
				related: ['landing-runway']
			},
			{
				type: 'emergency',
				name: 'Missile Impact',
				file: 'missileimpact',
				for: 'A-10D',
				related: ['landing-runway']
			},
			{
				type: 'emergency',
				name: 'Flight Controls Failure',
				file: 'flightcontrolfailure',
				for: 'A-10D',
				related: ['landing-runway']
			}
		]
	},
	{
		aircraft: 'ah6',
		checklists: [
			{
				type: 'emergency',
				name: 'Engine Failure',
				file: 'enginefailure',
				for: 'AH-6',
				related: ['landing-vert', 'landing-hov']
			},
			{
				type: 'emergency',
				name: 'Anti-Torque Failure',
				file: 'antitorque',
				for: 'AH-6',
				related: ['landing-vert', 'landing-hov']
			},
			{
				type: 'emergency',
				name: 'Auto-Rotation',
				file: 'autorotation',
				for: 'AH-6',
				related: ['landing-vert', 'landing-hov']
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

export function getSitemapInfo() {
	const acOnlySlugs = getAircraftOnlySlugs();
	const acSlugs = getAircraftSlugs();
	const emergSlugs = getEmergencySlugs();
	const siteSlugs = getSiteSlugs();
	const pages: string[] = [];

	acOnlySlugs.forEach((slug) => {
		const ac = slug.aircraft;

		pages.push(`${ac}`);
	});

	acSlugs[0].forEach((slug) => {
		const ac = slug.aircraft;
		const file = slug.file;

		pages.push(`${ac}/${file}`);
	});

	acSlugs[1].forEach((slug) => {
		const ac = slug.aircraft;
		const file = slug.file;

		pages.push(`${ac}/case-1/${file}`);
	});

	acSlugs[2].forEach((slug) => {
		const ac = slug.aircraft;
		const file = slug.file;

		pages.push(`${ac}/case-3/${file}`);
	});

	emergSlugs.forEach((slug) => {
		const ac = slug.aircraft;
		const file = slug.file;

		pages.push(`${ac}/emergency/${file}`);
	});

	siteSlugs.forEach((slug) => {
		const file = slug.file;

		pages.push(`site/${file}`);
	});

	return pages;
}

export function getAircraftSlugs() {
	const aircraftSlugArr: { aircraft: string; file: string }[] = [];
	const caseOneSlugArr: { aircraft: string; file: string }[] = [];
	const caseThreeSlugArr: { aircraft: string; file: string }[] = [];

	checklistStruct.forEach((aircraft) => {
		for (let i = 0; i < aircraft.checklists.length; i++) {
			if (aircraft.checklists[i].type === 'case-1') {
				caseOneSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[i].file
				});
			} else if (aircraft.checklists[i].type === 'case-3') {
				caseThreeSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[i].file
				});
			} else {
				aircraftSlugArr.push({
					aircraft: aircraft.aircraft,
					file: aircraft.checklists[i].file
				});
			}
		}
	});

	return [aircraftSlugArr, caseOneSlugArr, caseThreeSlugArr];
}

export function getAircraftOnlySlugs() {
	const aircraftSlugArr: { aircraft: string }[] = [];

	checklistStruct.forEach((aircraft) => {
		aircraftSlugArr.push({ aircraft: aircraft.aircraft });
	});

	return aircraftSlugArr;
}

export function getEmergencySlugs() {
	const emergencySlugArr: { aircraft: string; file: string }[] = [];
	emergencyChecklistsStruct.forEach((aircraft) => {
		for (let i = 0; i < aircraft.checklists.length; i++) {
			emergencySlugArr.push({
				aircraft: aircraft.aircraft,
				file: aircraft.checklists[i].file
			});
		}
	});

	return emergencySlugArr;
}

export function getSiteSlugs() {
	const siteSlugArr: { file: string }[] = [];
	siteChecklistStruct.forEach((checklist) => {
		siteSlugArr.push({
			file: checklist.file
		});
	});

	return siteSlugArr;
}
