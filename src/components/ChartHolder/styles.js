import styled from 'styled-components';

export const  Main = styled.div`
    text-align:left;
    background:#2e2e2e;
    color:white;
    width:${(props) => props.width};
    height:${(props) => props.height};
    margin:20px 20px;
`;

export const Header = styled.div`
    background:#242424;
    color:white;
    height:25px;
    width:auto;
    padding: 15px 20px;
`;

export const Content = styled.div`
    margin-top:25px;
    display:flex;
`;