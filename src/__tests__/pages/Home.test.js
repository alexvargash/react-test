import { render } from '@testing-library/react';
import Home from 'pages/Home';

describe('Home page', () => {
    it('renders correctly', () => {
        const tree = render(<Home />);

        expect(tree).toMatchSnapshot();
    });
});
