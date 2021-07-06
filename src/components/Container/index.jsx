import { Main } from './styles';

const Container = ({children,width,height, paddingLeft}) => {
    return(
        <Main width={width} height={height} paddingLeft={paddingLeft}>
            {children}
        </Main>
    )
}

export default Container;