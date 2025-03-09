export interface EmergencyChecklist {
	type: string;
	name: string;
	file: string;
	hidden: boolean;
	related?: string[];
}

export interface EmergencyChecklists {
	aircraft: string;
	checklists: EmergencyChecklist[];
}

export interface ChecklistItem {
	type: string;
	name: string;
	file: string;
	for?: string;
	hidden?: boolean;
	related?: Record<string, Array<string> | undefined> | Array<string>;
	showGlobal?: boolean;
	showEmergencies?: boolean;
}

export interface AircraftChecklists {
	aircraft: string;
	name: string;
	checklists: ChecklistItem[];
}
export interface Related {
	aircraft: string;
	name: string;
	checklists: ChecklistItem[];
}
