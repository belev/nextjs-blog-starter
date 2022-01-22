import type { MDXContentProps } from 'mdx-bundler/client';
import MDXLink from './MDXLink';
import MDXBlockquote from './MDXBlockquote';
import MDXHeading from './MDXHeading';

const MDXComponents: MDXContentProps['components'] = {
  a: MDXLink,
  blockquote: MDXBlockquote,
  h1: (props) => <MDXHeading tag="h1" {...props} />,
  h2: (props) => <MDXHeading tag="h2" {...props} />,
  h3: (props) => <MDXHeading tag="h3" {...props} />,
  h4: (props) => <MDXHeading tag="h4" {...props} />,
  h5: (props) => <MDXHeading tag="h5" {...props} />,
  h6: (props) => <MDXHeading tag="h6" {...props} />
};

export default MDXComponents;
