import { render, fireEvent, getByTestId } from '@testing-library/react';
import InputText from 'components/inputs/InputText';

describe('InputText', () => {
    it('has the correct starting value', () => {
        const { container } = render(<InputText id="search" name="search" />);
        const input = getByTestId(container, "search");

        expect(input.value).toBe('wizeline');
    });

    it('has the correct changed value', () => {
        const { container } = render(<InputText id="search" name="search" />);
        const input = getByTestId(container, "search");

        fireEvent.change(input, { target: { value: 'smash' } })
        expect(input.value).toBe('smash');
    });
});
