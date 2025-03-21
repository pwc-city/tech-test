import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import { Icon, IconVariants } from '../icons';

import { Loading } from './components';

import styles from './button.module.scss';

export type ButtonProps = {
	fullWidth?: boolean;
	label?: string;
	href?: string;
	isLoading?: boolean;
	type?: 'button' | 'submit' | 'reset';
	dimension?: 'small' | 'medium' | 'large';
	target?: '_blank' | '_self' | '_parent' | '_top';
	icon?: IconVariants;
	form?: string;
	isDestructive?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'tertiary' | 'outline-2';
	isNoPadding?: boolean;
	tabIndex?: number;
	disabled?: boolean;
	isCapitalize?: boolean;
	onClick?: () => void;
};

export const Button = ({
	variant = 'primary',
	dimension = 'medium',
	label,
	fullWidth,
	isDestructive,
	type = 'button',
	href,
	form,
	icon,
	target,
	isNoPadding,
	isLoading,
	disabled,
	isCapitalize = false,
	tabIndex,
	onClick,
	...props
}: ButtonProps) => {
	const cssClasses = [];
	cssClasses.push(styles.button);
	cssClasses.push(styles[variant]);
	cssClasses.push(styles[dimension]);
	if (isDestructive) cssClasses.push(styles.destructive);
	if (disabled) cssClasses.push(styles.disabled);
	if (fullWidth) cssClasses.push(styles['full-width']);
	if (isNoPadding) cssClasses.push(styles['no-padding']);
	if ((icon || isLoading) && !label) cssClasses.push(styles.square);

	if (href) {
		return (
			<Link
				href={href}
				className={cssClasses.join(' ')}
				type={type}
				onClick={onClick}
				target={target}
				tabIndex={tabIndex}
				{...props}
			>
				<ButtonContent
					isLoading={isLoading}
					label={label}
					dimension={dimension}
					variant={variant}
					icon={icon}
					isDestructive={isDestructive}
					isCapitalize={isCapitalize}
				/>
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={cssClasses.join(' ')}
			onClick={onClick}
			form={form}
			tabIndex={tabIndex}
			disabled={disabled}
			{...props}
		>
			<ButtonContent
				isLoading={isLoading}
				label={label}
				dimension={dimension}
				variant={variant}
				icon={icon}
				isDestructive={isDestructive}
				isCapitalize={isCapitalize}
			/>
		</button>
	);
};

type ButtonContentProps = Omit<
	ButtonProps,
	'type' | 'fullWidth' | 'href' | 'isNoPadding' | 'target'
>;

const ButtonContent = ({
	isLoading,
	label,
	dimension,
	variant,
	icon,
	isDestructive,
	isCapitalize,
	disabled,
}: ButtonContentProps) => {
	const [mouseXPosition, setMouseXPosition] = React.useState({
		x: 0,
		y: 0,
	});

	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (ref.current && variant === 'primary' && !disabled) {
			const { width, height } = ref.current.getBoundingClientRect();


			ref.current.addEventListener('mousemove', (event) => {
				const percentX = (event.offsetX / width) * 100;
				const percentY = (event.offsetY / height) * 100;

				setMouseXPosition({
					x: percentX,
					y: percentY,
				});
			});

			ref.current.addEventListener('mouseleave', () =>
				setMouseXPosition({
					x: 0,
					y: 0,
				})
			);
		}
	}, [disabled, variant]);

	return (
		<span
			className={`${styles.content} ${isLoading && styles['content-loading']} ${isCapitalize && styles['content-capitalize']}`}
			ref={ref}
		>
			{isLoading ? (
				<span className={styles.load} data-testid="button-loading">
					<Loading
						dimension={dimension}
						className={styles.loading}
					/>
				</span>
			) : null}

			{!isLoading && icon ? (
				<span className={styles.icon} data-testid="button-icon">
					<Icon variant={icon} />
				</span>
			) : null}

			{variant === 'primary' && !disabled ? (
				<span className={styles.gradient}>
					<span
						className={styles.mask}
						style={{
							backgroundPosition: `calc((100 - ${mouseXPosition.x}) * 1%) calc((100 - ${mouseXPosition.y}) * 1%)`,
						}}
					/>
				</span>
			) : null}

			{label ? (
				<span className={`${styles.label} cta-${dimension}`}>
					{label}
				</span>
			) : null}
		</span>
	);
};

export default Button;
