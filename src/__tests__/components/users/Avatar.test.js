import { render } from '@testing-library/react';
import Avatar from 'components/users/Avatar';

describe('Avatar image', () => {
    it('renders correctly', () => {
        const tree = render(<Avatar />);

        expect(tree).toMatchSnapshot();
    });
});
