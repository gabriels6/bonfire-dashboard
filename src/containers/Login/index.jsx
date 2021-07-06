import React from 'react';
import { Main, ImagePart, FormPart, Logo, Spacing } from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

const Login = () => {

    return(
        <Main>
            <ImagePart>
                <Logo />
            </ImagePart>
            <FormPart> 
                <h1>
                    Login
                </h1>
                <InputText placeholder={"E-mail..."}/>
                <InputText placeholder={"Senha..."} type={"password"}/>
                <Spacing/>
                <p>
                    <Button>
                        Log in
                    </Button>
                </p>
                <p>
                    <Button>
                        Sign in
                    </Button>
                </p> 
            </FormPart>
        </Main>
    )
}

export default Login;