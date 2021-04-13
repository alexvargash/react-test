import styled from 'styled-components';

const Svg = styled.svg`
  height: ${props => props.height ? props.height + 'px' : '25px'};
  width: ${props => props.width ? props.width + 'px' : '25px'};
  color: ${props => props.color ? props.color : 'white'};
`;

export default Svg;

