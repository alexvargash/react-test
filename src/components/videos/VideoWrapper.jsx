import styled from 'styled-components';

const StyledVideoWrapper = styled.div`
    display: grid;
    column-gap: 2rem;
    row-gap: 2rem;
    padding-left 20px;
    padding-right 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    /* sm */
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    /* md */
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    /* lg */
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    /* xl */
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

`;

function VideoWrapper({children}) {
    return (
        <StyledVideoWrapper>
            {children}
        </StyledVideoWrapper>
    );
}

export default VideoWrapper;
