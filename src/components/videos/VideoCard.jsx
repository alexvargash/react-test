import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: #fff;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 5px;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
`;

const ThumbnailWrapper = styled.div`
    max-height: 140px;
    overflow: hidden;
    background-color: #000;
`;

const Thumbnail = styled.img`
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h3`
    padding: 8px 20px;
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Description = styled.p`
    padding: 0px 20px 10px;;
    font-size: 14px;
`;

function Card(props) {
    return (
        <StyledCard>
            <ThumbnailWrapper>
                <Thumbnail src={props.thumbnail.url} alt={props.title} />
            </ThumbnailWrapper>
            <Title>
                {props.title}
            </Title>
            <Description>
                {props.description}
            </Description>
        </StyledCard>
    );
}

export default Card;
