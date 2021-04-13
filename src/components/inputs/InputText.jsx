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
    return (
        <Input id={props.id} type="text" name={props.name} />
    );
}

export default InputText;
