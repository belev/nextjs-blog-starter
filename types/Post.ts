export interface FrontMatter {
  title: string;
  date: string;
}

export type Post = FrontMatter & {
  id: string;
};
