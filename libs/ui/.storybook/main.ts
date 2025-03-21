import * as path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-designs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: path.join(__dirname, '../vite.config.ts'),
      },
    },
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  docs: {
    defaultName: 'Docs',
  },
};

export default config;
