import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { globby } from 'globby';
import RSS from 'rss';
import siteConfig from '../siteConfig.json';

(async () => {
  const postPaths = await globby(['posts/*.mdx']);
  const postsData = postPaths.map((postPath) => {
    const fullPath = path.join(process.cwd(), postPath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug: postPath.replace('posts/', 'blog/').replace(/\.mdx$/, ''),
      ...matterResult.data
    };
  });

  const rss = new RSS({
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    site_url: siteConfig.siteUrl,
    feed_url: `${siteConfig.siteUrl}/rss.xml`,
    language: 'en'
  });

  postsData.forEach(({ title, description, date, slug }) => {
    rss.item({
      title,
      description,
      date,
      url: `${siteConfig.siteUrl}/${slug}`
    });
  });

  fs.writeFileSync('public/rss.xml', rss.xml({ indent: '  ' }));

  console.log('Generated public/rss.xml successfully 🚀');
})();
