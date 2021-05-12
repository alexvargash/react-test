import styled from 'styled-components';
import { debounce } from 'lodash';
import { useEffect, useState, useCallback } from 'react';

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
    const [query, setQuery] = useState('wizeline');

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    const updateQuery = () => {
        props.onChange(query);
    };

    const delayedQuery = useCallback(debounce(updateQuery, 800), [query]);

    useEffect(() => {
        delayedQuery();
        return delayedQuery.cancel;
    }, [query, delayedQuery]);

    return (
        <Input
            data-testid="search"
            id={props.id}
            type="text"
            name={props.name}
            value={query}
            onChange={onChange}
        />
    );
}

export default InputText;
