import { getSitemapInfo } from '$lib/checklists';

export const prerender = true;

export async function GET({ url }) {
	const pages = getSitemapInfo();
	let urlTags = '';
	const currDate = new Date().toISOString();
	// new Date().toISOString().split('T')[0];
	pages.forEach((page) => {
		const fullUrl = `${url.protocol}//${url.host}/${page}`;
		urlTags += `
            <url>
                <loc>${fullUrl}</loc>
                <lastmod>${currDate}</lastmod>
            </url>
        `;
	});

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
            ${urlTags}
            
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
