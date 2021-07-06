import { Header, Main, Content } from './styles';

const ChartHolder = ({width,height,title,children}) => {
    return(
        <Main width={width} height={height} >
            <Header>{title}</Header>
            <Content>
                {children}
            </Content>
        </Main>
    )
}

export default ChartHolder;