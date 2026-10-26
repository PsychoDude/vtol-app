import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	SITE_URL: { public: true }
});
