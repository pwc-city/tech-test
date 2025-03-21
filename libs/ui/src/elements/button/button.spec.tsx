import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonProps } from './button';

describe('Button Component', () => {
	const user = userEvent.setup();

	const renderButton = (props: Partial<ButtonProps> = {}) => {
		const defaultProps: ButtonProps = {
			label: 'Click me',
			variant: 'primary',
			dimension: 'medium',
			fullWidth: false,
			isDestructive: false,
			isNoPadding: false,
			isLoading: false,
			disabled: false,
			href: '',
			form: '',
			tabIndex: 0,
			onClick: jest.fn(),
			...props,
		};

		return render(<Button {...defaultProps} />);
	};

	it('renders with default props', () => {
		renderButton();

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toBeEnabled();
		expect(button).toHaveClass('button primary medium');
		expect(button).not.toHaveClass('full-width no-padding destructive disabled');
		expect(button).toHaveAttribute('type', 'button');
		expect(button).toHaveAttribute('tabindex', '0');
	});

	it('renders as a link when href is provided', () => {
		renderButton({ href: '/test', label: 'Go to Test' });

		const link = screen.getByRole('link', { name: /go to test/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/test');
		expect(link).toHaveClass('button primary medium');
	});

	it('applies the correct variant class', () => {
		renderButton({ variant: 'secondary' });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('secondary');
	});

	it('applies the correct dimension class', () => {
		renderButton({ dimension: 'large' });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('large');
	});

	it('displays an icon when the icon prop is provided', () => {
		renderButton({ icon: 'CalendarFilled' });

		const icon = screen.getByTestId('button-icon');
		expect(icon).toBeInTheDocument();
		expect(icon).toHaveClass('icon');
	});

	it('shows a loading indicator when isLoading is true', () => {
		renderButton({ isLoading: true });

		const loading = screen.getByTestId('button-loading');
		expect(loading).toBeInTheDocument();
		expect(loading).toHaveClass('load');
	});

	it('renders a square button when only icon is provided without a label', () => {
		renderButton({ icon: 'CalendarFilled', label: undefined });

		const button = screen.getByRole('button');
		expect(button).toHaveClass('square');
		const icon = screen.getByTestId('button-icon');
		expect(icon).toBeInTheDocument();
	});

	it('renders a square button when only loading is true without a label', () => {
		renderButton({ isLoading: true, label: undefined });

		const button = screen.getByRole('button');
		expect(button).toHaveClass('square');
		const loading = screen.getByTestId('button-loading');
		expect(loading).toBeInTheDocument();
	});

	it('applies full-width class when fullWidth is true', () => {
		renderButton({ fullWidth: true });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('full-width');
	});

	it('applies no-padding class when isNoPadding is true', () => {
		renderButton({ isNoPadding: true });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('no-padding');
	});

	it('applies destructive class when isDestructive is true', () => {
		renderButton({ isDestructive: true });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveClass('destructive');
	});

	it('is disabled when disabled prop is true', () => {
		renderButton({ disabled: true });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeDisabled();
		expect(button).toHaveClass('disabled');
	});

	it('handles onClick events correctly when enabled', async () => {
		const onClick = jest.fn();
		renderButton({ onClick });

		const button = screen.getByRole('button', { name: /click me/i });
		await user.click(button);

		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('does not handle onClick events when disabled', async () => {
		const onClick = jest.fn();
		renderButton({ onClick, disabled: true });

		const button = screen.getByRole('button', { name: /click me/i });
		await user.click(button);

		expect(onClick).not.toHaveBeenCalled();
	});

	it('applies the correct type attribute', () => {
		renderButton({ type: 'submit' });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('applies the correct tabIndex attribute', () => {
		renderButton({ tabIndex: 5 });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveAttribute('tabindex', '5');
	});

	it('applies the correct target attribute when rendered as a link', () => {
		renderButton({ href: '/test', target: '_blank', label: 'Go to Test' });

		const link = screen.getByRole('link', { name: /go to test/i });
		expect(link).toHaveAttribute('target', '_blank');
	});

	it('applies the correct form attribute when form prop is provided', () => {
		renderButton({ form: 'test-form' });

		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toHaveAttribute('form', 'test-form');
	});

	it('displays the correct label', () => {
		renderButton({ label: 'Submit' });

		const button = screen.getByRole('button', { name: /submit/i });
		expect(button).toBeInTheDocument();
	});
});
