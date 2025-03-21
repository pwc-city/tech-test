import type { Meta, StoryObj } from '@storybook/react';
import { BLUEPRINT_URL } from '../../../.storybook/design-routes';

import Chip from './chip';
import { ChipSize, ChipType } from './chip';

const meta: Meta<typeof Chip> = {
    title: 'Elements/Chip',
    component: Chip,
    args: {
        label: 'Chip',
        size: ChipSize.XLarge,
        pill: false,
        type: ChipType.Filled,
        isActive: false,
        icon: 'AddCircle',
        isIconLeft: true,
        isIconRight: true,
    },
    decorators: [
        (Story) => {
            return (
                <>
                    <style>
                        {`
							.storybookWrapper {
								background-color: #fff;
								padding: 1rem;
							}
						`}
                    </style>
                    <div className="storybookWrapper">
                        <Story />
                    </div>
                </>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8293-2248&p=f&t=XajluhZGdlf7TZIA-0`,
        },
    },
};

export const FilledActive: Story = {
    args: {
        isActive: true,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8293-2248&p=f&t=XajluhZGdlf7TZIA-0`,
        },
    },
};

export const Outline: Story = {
    args: {
        type: ChipType.Outline,
        callback: (label) => console.log(label),
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8293-2248&p=f&t=XajluhZGdlf7TZIA-1`,
        },
    },
};

export const FilledPill: Story = {
    args: {
        type: ChipType.Filled,
        pill: true,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8293-2248&p=f&t=XajluhZGdlf7TZIA-1`,
        },
    },
};

export const XSmall: Story = {
    args: {
        size: ChipSize.XSmall,
        type: ChipType.Filled,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`,
        },
    },
};

export const Small: Story = {
    args: {
        size: ChipSize.Small,
        type: ChipType.Filled,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`,
        },
    },
};

export const Medium: Story = {
    args: {
        size: ChipSize.Medium,
        type: ChipType.Filled,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`,
        },
    },
};

export const Large: Story = {
    args: {
        size: ChipSize.Large,
        type: ChipType.Filled,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`,
        },
    },
};

export const XLarge: Story = {
    args: {
        size: ChipSize.XLarge,
        type: ChipType.Filled,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`,
        },
    },
};

export const NoLabel: Story = {
    args: {
        label: undefined,
    },
    parameters: {
        design: {
            type: 'figma',
            url: `${BLUEPRINT_URL}?node-id=8293-2248&p=f&t=XajluhZGdlf7TZIA-0`,
        },
    },
};
