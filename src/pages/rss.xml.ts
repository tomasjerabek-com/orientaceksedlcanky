import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET() {
	const articles = (await getCollection('articles'))
		.filter((entry) => !entry.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const items = articles
		.map(
			(article) => `
    <item>
      <title><![CDATA[${article.data.title}]]></title>
      <link>${site.url}/${article.id}/</link>
      <guid>${site.url}/${article.id}/</guid>
      <description><![CDATA[${article.data.description || ''}]]></description>
      <pubDate>${article.data.pubDate.toUTCString()}</pubDate>
    </item>`,
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.name}</title>
    <link>${site.url}/</link>
    <description>${site.description}</description>
    <language>cs</language>${items}
  </channel>
</rss>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
}
