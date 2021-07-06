import styled from 'styled-components';

export const Main = styled.div`
    width:${props => props.width};
    height:${props => props.height};
    padding-left:${props => props.paddingLeft};
    display:flex;
    flex-wrap:wrap;

`;