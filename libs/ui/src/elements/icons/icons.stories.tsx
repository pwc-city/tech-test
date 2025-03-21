import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icons';

const meta: Meta<typeof Icon> = {
    title: 'Elements/Icons',
    component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        variant: 'MobileTickets',
		className: 'icon',
    },
};
