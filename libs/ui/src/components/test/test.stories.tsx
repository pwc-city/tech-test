import type { Meta, StoryObj } from '@storybook/react';

import { Test } from './test';

const meta: Meta<typeof Test> = {
    title: 'Component/Test',
    component: Test
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Default:Story = {
	args: {
	},
};
