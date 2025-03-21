import { Icon, IconVariants } from '../icons';

import styles from './chip.module.scss';

export enum ChipSize {
    XSmall = 'xsmall',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    XLarge = 'xlarge',
}

export enum ChipType {
    Filled = 'filled',
    Outline = 'outline',
}

export type ChipProps = {
    label: string;
    size: ChipSize;
    pill?: boolean;
    type: ChipType;
    isActive: boolean;
    isIconLeft?: boolean;
    isIconRight?: boolean;
    icon?: IconVariants;
    role?: string,
    tabIndex?: number,
    callback?: (label: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	className?: string;
};

export const Chip = ({
    label,
    size,
    pill = false,
    type,
    isActive,
    isIconLeft = false,
    isIconRight = false,
    icon,
    role = "button",
    tabIndex,
    callback,
    onKeyDown,
	className,
    ...props
}: ChipProps) => {
    const getSizeClass = () => {
        switch (size) {
            case ChipSize.XSmall:
                return 'chip-xsmall';
            case ChipSize.Small:
                return 'chip-small';
            case ChipSize.Medium:
                return 'chip-medium';
            case ChipSize.Large:
                return 'chip-large';
            case ChipSize.XLarge:
                return 'chip-xlarge';
            default:
                return 'chip-medium';
        }
    };

    const getLabelSizeClass = () => {
        switch (size) {
            case ChipSize.XSmall:
                return 'label-xsmall';
            case ChipSize.Small:
                return 'label-xsmall';
            case ChipSize.Medium:
                return 'label-small';
            case ChipSize.Large:
                return 'label-medium';
            case ChipSize.XLarge:
                return 'label-medium';
            default:
                return 'label-xsmall';
        }
    };

    const getTypeClass = () => {
        return type === ChipType.Filled ? 'chip-filled' : 'chip-outline';
    };

    const getStatusClass = () => {
        return isActive ? 'chip-active' : 'chip-inactive';
    };

    const changeStatusHandler = () => {
        if (callback) callback(label);
    };

    const chipClassNames = [
        styles['chip'],
        styles[getSizeClass()],
        styles[getTypeClass()],
        styles[getStatusClass()],
        pill ? styles['chip-pill'] : '',
		className ? className : '',
    ]
        .join(' ')
        .trim();

    return (
        <>
            {(label || (icon && (isIconLeft || isIconRight))) && (
                <button
                    className={chipClassNames}
                    onClick={changeStatusHandler}
                    role={role}
                    aria-label="chip"
                    { ...(tabIndex && { tabIndex } ) }
                    { ...(onKeyDown && { onKeyDown } ) }
                    {...props}
                >
                    {isIconLeft && icon && (
                        <span
                            className={styles.icon}
                            data-testid="left-chip-icon"
                            aria-label="chip icon left"
                        >
                            <Icon variant={icon} />
                        </span>
                    )}
                    {label && (
                        <span
                            className={`${getLabelSizeClass()} ${styles.label}`}
                            aria-label='chip label'
                        >
                            {label}
                        </span>
                    )}
                    {isIconRight && icon && (
                        <span
                            className={styles.icon}
                            data-testid="right-chip-icon"
                            aria-label="chip icon right"
                        >
                            <Icon variant={icon} />
                        </span>
                    )}
                </button>
            )}
        </>
    );
};

export default Chip;
