import styled from 'styled-components';
import Menu from 'components/svgs/Menu';
import Moon from 'components/svgs/Moon';
import Avatar from 'components/users/Avatar';
import InputText from 'components/inputs/InputText';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 25px;
    background-color: #1E293B;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;

    & > * + * {
        --tw-space-x-reverse: 0;
        margin-right: calc(1.25rem * var(--tw-space-x-reverse));
        margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));
    }
`;

function TopBar(props) {
    return (
        <Header>
            <FlexWrapper>
                <Menu height="25" width="25" />
                <InputText id="search" name="search" onChange={props.onChange} />
            </FlexWrapper>
            <FlexWrapper>
                <Moon height="25" width="25" />
                <Avatar />
            </FlexWrapper>
        </Header>
    );
}

export default TopBar;
