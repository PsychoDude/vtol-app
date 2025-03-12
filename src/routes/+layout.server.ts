import { siteChecklistStruct } from '$lib/checklists';

export async function load() {
	const sitePages: Array<{ name: string; file: string }> = [];
	siteChecklistStruct.forEach((checklist) =>
		sitePages.push({ name: checklist.name, file: checklist.file })
	);

	return {
		sitePages: sitePages
	};
}
