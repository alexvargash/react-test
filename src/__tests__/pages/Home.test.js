import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Home from 'pages/Home';

// jest.mock('getYoutubeVideos', () => ({
//     getYoutubeVideos: jest.fn(),
// }));

const mockEffect = jest.fn()
    .mockImplementationOnce(() => {
        setVideos({});
        setLoading(false);
    });

beforeAll(() => {
    jest.spyOn(React, "useEffect").mockImplementation(mockEffect);
});

describe('Home page', () => {
    it('renders correctly', () => {
        const { container } = render(<Home />);
        const wrapper = getByTestId(container, "videos");
    });
});
