import type { MDXContentProps } from 'mdx-bundler/client';
import MDXLink from './MDXLink';
import MDXBlockquote from './MDXBlockquote';

const MDXComponents: MDXContentProps['components'] = {
  a: MDXLink,
  blockquote: MDXBlockquote
};

export default MDXComponents;
