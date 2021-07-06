import styled from 'styled-components';

export const ButtonContainer = styled.div`
    width:100%;
    height:60px;
`;

export const Main = styled.button`
    height:40px;
    width:100%;
    background:none;
    color:#ff2a00;
    border: solid 1px #ff2a00;
    border-radius:5px;
    font-family:'Poppins','Arial'

    :hover{
        background:#ff2a00;
        color:white;
        transition: all .5s;
    }
`;