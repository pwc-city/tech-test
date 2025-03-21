import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chip from './chip';
import { ChipProps, ChipSize, ChipType } from './chip';

describe('Chip Component', () => {
    const user = userEvent.setup();

    const renderChip = (props: Partial<ChipProps> = {}) => {
        const defaultProps: ChipProps = {
            label: 'Fish & Chips',
            size: ChipSize.Large,
            pill: false,
            type: ChipType.Outline,
            isActive: false,
            isIconLeft: true,
            isIconRight: true,
            icon: 'AddCircle',
            callback: jest.fn(),
            ...props,
        };

        return render(<Chip {...defaultProps} />);
    };

    it('renders with default props', () => {
        renderChip();

        const chip = screen.getByRole('button', { name: /chip/i });
        expect(chip).toBeInTheDocument();
        expect(chip).toHaveClass('chip chip-large chip-outline chip-inactive');
        expect(chip).not.toHaveClass(
            'chip-xsmall chip-small chip-medium chip-xlarge chip-active chip-filled'
        );
        expect(chip).toHaveAttribute('role');
        expect(chip).toHaveAttribute('aria-label');
    });

    it('applies the correct active class', () => {
        renderChip({ isActive: true });

        const chip = screen.getByRole('button', { name: /chip/i });
        expect(chip).toHaveClass('chip-active');
    });

    it('applies the correct type class', () => {
        renderChip({ type: ChipType.Filled });

        const chip = screen.getByRole('button', { name: /chip/i });
        expect(chip).toHaveClass('chip-filled');
    });

    it('applies the correct size class', () => {
        renderChip({ size: ChipSize.Medium });

        const chip = screen.getByRole('button', { name: /chip/i });
        expect(chip).toHaveClass('chip-medium');
    });

    it('applies the correct pill class', () => {
        renderChip({ pill: true });

        const chip = screen.getByRole('button', { name: /chip/i });
        expect(chip).toHaveClass('chip-pill');
    });

    it('displays left icon when the isIconLeft prop is provided', () => {
        renderChip({ isIconLeft: true });

        const icon = screen.getByTestId('left-chip-icon');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('icon');
    });

    it('displays left icon when the isIconRight prop is provided', () => {
        renderChip({ isIconRight: true });

        const icon = screen.getByTestId('right-chip-icon');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('icon');
    });

    it('renders a chip when only icon is provided without a label', () => {
        renderChip({
            icon: 'CalendarFilled',
            label: undefined,
            isIconRight: true,
        });

        const chip = screen.getByRole('button');
        expect(chip).toHaveClass('chip');
        const icon = screen.getByTestId('right-chip-icon');
        expect(icon).toBeInTheDocument();
    });

    it('displays the correct label', () => {
        renderChip({ label: 'Fish & Chips' });

        const chip = screen.getByText('Fish & Chips');
        expect(chip).toBeInTheDocument();
    });
});
