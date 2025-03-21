import { memo } from 'react';
import * as allIcons from './all-icons';

export { allIcons };

export type IconVariants = keyof typeof allIcons;

type IconProps = {
    variant: IconVariants;
    className?: string;
};

export const Icon = memo(({ variant, className }: IconProps) => {
    const list = Object.keys(allIcons);
    const isThereIcon = list.some((icon) => icon === variant);

    if (!isThereIcon) return <span></span>;

    const IconComponent = allIcons[variant];

    return <IconComponent className={className} />;
});
