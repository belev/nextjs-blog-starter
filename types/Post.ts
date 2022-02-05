import type { ReadTimeResults } from 'reading-time';

export interface FrontMatter {
  title: string;
  description: string;
  date: string;
}

export type Post = FrontMatter & {
  slug: string;
  code?: string;
  readingTime?: ReadTimeResults;
};

export interface StaticPath {
  params: {
    slug: string;
  };
}
export interface PostPath {
  paths: StaticPath[];
  fallback: boolean;
}
