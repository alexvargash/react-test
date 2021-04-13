import Svg from './SvgBase';

function Menu(props) {
    return (
        <Svg height={props.height} width={props.width} color={props.color} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </Svg>
    );
}

export default Menu;
