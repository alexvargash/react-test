import { render } from '@testing-library/react';
import VideoWrapper from 'components/videos/VideoWrapper';

describe('Video Wrapper', () => {
    it('renders correctly', () => {
        const tree = render(<VideoWrapper />);

        expect(tree).toMatchSnapshot();
    });
});
