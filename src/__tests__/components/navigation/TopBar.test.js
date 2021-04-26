import { render } from '@testing-library/react';
import TopBar from 'components/navigation/TopBar';

describe('Top Bar', () => {
    it('renders correctly', () => {
        const tree = render(<TopBar />);

        expect(tree).toMatchSnapshot();
    });
});
