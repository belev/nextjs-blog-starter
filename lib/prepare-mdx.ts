import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import path from 'path';

const getCompiledMDX = async (source: string, directory: string) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  return bundleMDX({
    cwd: directory,
    source,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages];

      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), 'public', 'img', 'posts');
      options.loader = {
        ...options.loader,
        '.png': 'file',
        '.jpg': 'file',
        '.jpeg': 'file'
      };
      options.publicPath = '/img/posts';

      // Set write to true so that esbuild will output the files.
      options.write = true;

      return options;
    }
  });
};

export default getCompiledMDX;
