import type { Meta, StoryObj } from '@storybook/react';
import { BLUEPRINT_URL } from '../../../.storybook/design-routes';

import { Button, ButtonProps } from './button';

const meta: Meta<typeof Button> = {
    title: 'Elements/Button',
    component: Button,
    args: {
        label: 'Click me',
        fullWidth: false,
		dimension: 'medium',
		variant: 'primary',
		isDestructive: false,
		isNoPadding: false,
		isLoading: false,
		disabled: false,
		href: '',
		form: '',
		tabIndex: 0
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8088-19071&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Secondary = {
    args: {
        variant: 'secondary'
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8057-9083&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Outline = {
    args: {
        variant: 'outline'
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8100-19787&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Tertiary = {
    args: {
        variant: 'tertiary'
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8100-28638&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const TertiaryDestructive = {
	args: {
		variant: 'tertiary',
		isDestructive: true
	},
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8126-14196&t=2S6xfQPfbUbuy4ja-4`
		}
	}
};

export const Small = {
    args: {
        variant: 'primary',
        dimension: 'small',
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8088-19095&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Medium = {
    args: {
        variant: 'primary',
        dimension: 'medium',
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8088-19071&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Large = {
    args: {
        variant: 'primary',
        dimension: 'large',
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8503-12867&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const IsNoPadding = {
    args: {
        variant: 'tertiary',
        dimension: 'large',
        isNoPadding: true,
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8100-28614&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const WithIcon = {
    args: {
        label: 'Go to calendar',
        variant: 'primary',
        dimension: 'large',
        icon: 'CalendarFilled',
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8088-19049&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const WithLoading = {
    args: {
        label: 'Submitting...',
        variant: 'primary',
        dimension: 'large',
        isLoading: true,
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8088-19059&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const Disabled: Story = {
    args: {
        variant: 'secondary',
        dimension: 'large',
        disabled: true,
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8057-9443&t=kKNZDZbytOBoiHWS-4`
		}
	}
};

export const FullWidth = {
    args: {
        fullWidth: true,
        variant: 'primary',
        dimension: 'large',
    },
	parameters: {
		design: {
			type: 'figma',
			url: `${BLUEPRINT_URL}?node-id=8503-12867&t=kKNZDZbytOBoiHWS-4`
		}
	}
};
