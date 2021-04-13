import User from '../svgs/User';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  height: 30px;
  width: 30px;
  background-color: #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

function Avatar(props) {
    return (
        <StyledAvatar>
            <User height="20" width="20" color="#1E293B"/>
        </StyledAvatar>
    );
}

export default Avatar;
