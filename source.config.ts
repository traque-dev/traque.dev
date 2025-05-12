import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';

export const docs = defineDocs({
  dir: './src/content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
  },
});
