import { render } from '@testing-library/react';
import AppLayout from 'layouts/AppLayout';

describe('Application Layout', () => {
    it('renders correctly', () => {
        const tree = render(<AppLayout />);

        expect(tree).toMatchSnapshot();
    });
});
