import React from 'react';
import { Main, ButtonContainer } from './styles';

const Button = ({children}) => {

    return(
        <ButtonContainer>
            <Main>
                {children}
            </Main>
        </ButtonContainer>
    );
}

export default Button;