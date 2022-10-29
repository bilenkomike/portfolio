import { HeaderTitle } from './Title.styled' 


const Title = props => {
    return <>
        <HeaderTitle>{props.children}</HeaderTitle>
    </>;
}

export default Title;