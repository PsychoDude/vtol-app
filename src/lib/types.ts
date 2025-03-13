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
	aircraft?: string;
	related?: Record<string, Array<string> | undefined>;
	checklists?: ChecklistItem[];
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

export interface BtnData {
	type: string;
	name: string;
	file?: string;
	aircraft?: string;
	currentAircraft?: {
		aircraft: string | undefined;
		name: string | undefined;
	};
	showCurac?: boolean;
	siteBtn?: boolean;
	sitePage?: string;
	homeBtn?: boolean;
}

export interface ChecklistData {
	content: string | null;
	curac: {
		aircraft: string | undefined;
		name: string | undefined;
	};
	relatedParams?: {
		showGlobal: boolean;
		showEmergencies: boolean;
	};
	file?: string;
	type?: string;
	aircraft?: string;
	aircraftName?: string;
	checklists?: AircraftChecklists;
	relatedChecklists?: ChecklistItem[];
	relatedEmergencyChecklists?: EmergencyChecklists;
	pageName?: string;
	pages: Page[];
	aircraftNames: { aircraft: string | undefined; name: string | undefined }[];
	sitePages: SiteItem[];
}

export interface Page {
	type: string;
	name: string;
	aircraft: string;
}

export interface Curac {
	aircraft: string | undefined;
	name: string | undefined;
}
