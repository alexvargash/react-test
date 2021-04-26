import { render, screen } from '@testing-library/react';
import VideoCard from 'components/videos/VideoCard';

beforeEach(() => {
    render(
        <VideoCard
            title="Example title"
            description="Lorem ipsum"
            thumbnail=""
        />);
});

describe('Video Wrapper', () => {
    it('has correct title', () => {
        expect(screen.getByRole('heading')).toHaveTextContent('Example title');
    });

    it('has correct description', () => {
        expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
    });

    it('has an image', () => {
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('has correct alt text', () => {
        expect(screen.getByAltText('Example title')).toBeInTheDocument();
    });
});
