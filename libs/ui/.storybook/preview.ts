import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';

import '../src/styles/global.css';
import './styles.scss';

const preview: Preview = {
    decorators: [
        withThemeByDataAttribute<ReactRenderer>({
            themes: {
                light: 'light',
                dark: 'dark',
                cityPlus: 'city-plus',
            },
            defaultTheme: 'light',
            attributeName: 'data-theme',
        }),

    ],
    parameters: {
		docs: {
		  },
        backgrounds: {
            values: [
                {
                    name: 'light',
                    value: 'var(--colour-background-subtle-primary)',
                },
                {
                    name: 'dark',
                    value: 'var(--colour-background-subtle-primary)',
                },
                {
                    name: 'city-plus',
                    value: 'var(--colour-background-subtle-primary)',
                },
            ],
            default: 'dark',
        }
    },
};

export default preview;
