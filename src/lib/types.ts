export interface EmergencyChecklist {
	type: string;
	name: string;
	file: string;
	for: string;
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
	for: string;
	related?: Record<string, Array<string> | undefined>;
	showGlobal: boolean;
	showEmergencies: boolean;
}

export interface SiteItem {
	name: string;
	file: string;
}

export interface AircraftChecklists {
	aircraft: string;
	name: string;
	type: string;
	checklists: ChecklistItem[];
}
export interface Related {
	aircraft: string;
	name: string;
	checklists: ChecklistItem[];
}

export interface RelatedSite {
	name: string;
	checklists: ChecklistItem[];
}
