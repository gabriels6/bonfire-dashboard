import styled from 'styled-components';
import LoginBG from '../../assets/login-background.png';
import LogoBG from '../../assets/Bonfire-Logo.png';

export const Main = styled.div`
    background:#131313;
    height:83vh;
    width:45vw;
    padding:50px 30vw;
    display:flex;
    text-align:start;
`;

export const ImagePart = styled.div`
    background:url('${LoginBG}');
    background-size:cover;
    height:100%;
    width:100%;
    border-radius:10px;
    z-index:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Spacing = styled.div`
    height:50px;
`;

export const FormPart = styled.div`
    background:#2E2E2E;
    color:white;
    height:100%;
    width:100%;
    position:relative;
    left:-20px;
    box-sizing:border-box;
    padding:10vh 3vw;
    border-radius:10px;
    z-index:0;
`;

export const Logo = styled.div`
    background:url('${LogoBG}');
    background-size:cover;
    width:200px;
    height:100px;
`;