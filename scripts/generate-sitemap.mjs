import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import siteConfig from '../siteConfig.json';

(async () => {
  const pages = await globby([
    'pages/*.tsx',
    'posts/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx'
  ]);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('posts', '/blog')
              .replace('.tsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`${siteConfig.siteUrl}${route}`}</loc>
                  <changefreq>daily</changefreq>
                  <priority>0.7</priority>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  writeFileSync('public/sitemap.xml', formatted);

  console.log('Generated public/sitemap.xml successfully 🚀');
})();
