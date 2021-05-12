import styled from 'styled-components';

const Input = styled.input`
    color: #64748B;
    padding: 5px 10px;
    border-radius: 4px;
    outline: none;
    border: none;

    &:hover, &:focus {
        color: #0369A1;
    }
`;


function InputText(props) {
    function changed(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <Input id={props.id} type="text" name={props.name} onChange={changed}/>
    );
}

export default InputText;
