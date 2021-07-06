import React from 'react';
import { Main, Input } from './styles';

const InputText = ({placeholder = "", type = "text"}) => {

    return(
        <Main>
            <Input type={type} placeholder={placeholder} />
        </Main>
    );
}

export default InputText;