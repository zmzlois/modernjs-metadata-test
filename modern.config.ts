import { appTools, defineConfig } from '@modern-js/app-tools';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import rehypeHighlight from 'rehype-highlight';
import { withZephyr } from 'zephyr-modernjs-plugin';
// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  builderPlugins: [
    pluginImageCompress(),
    pluginMdx({
      mdxLoaderOptions: {
        rehypePlugins: [[rehypeHighlight, { ignoreMissing: true }]],
        providerImportSource: '@mdx-js/react',
      },
    }),
    // @ts-expect-error
    // withZephyr(),
  ],
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
});
