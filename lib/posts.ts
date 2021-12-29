import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { FrontMatter, Post, StaticPath } from '../types/Post';
import getCompiledMDX from './prepare-mdx';

const postsDirectory = path.join(process.cwd(), 'posts');

interface FileName {
  fullFileName: string;
  fileName: string;
}

function getPostsFileNames(): FileName[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fullFileName) => ({
      fullFileName,
      fileName: fullFileName.replace(/\.mdx$/, '')
    }));
}

export function getSortedPostsData({ limit }: { limit?: number } = {}): Post[] {
  const fileNames = getPostsFileNames();
  const allPostsData = fileNames.map(({ fileName, fullFileName }) => {
    const fullPath = path.join(postsDirectory, fullFileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug: fileName,
      ...(matterResult.data as FrontMatter)
    };
  });

  // Sort posts by date
  const sortedPosts = allPostsData.sort(({ date: a }, { date: b }) => b.localeCompare(a));
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

export function getAllPostIds(): StaticPath[] {
  const fileNames = getPostsFileNames();

  return fileNames.map(({ fileName }) => {
    return {
      params: {
        slug: fileName
      }
    };
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const compiledMDX = await getCompiledMDX(fileContents, postsDirectory);

  return {
    slug,
    ...(matterResult.data as FrontMatter),
    code: compiledMDX.code
  };
}
