export interface FrontMatter {
  title: string;
  date: string;
}

export type Post = FrontMatter & {
  slug: string;
  code?: string;
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
