import { HeaderTitle, TitleText } from './Title.styled' 


const Title = props => {
    return <HeaderTitle><TitleText>{props.children}</TitleText></HeaderTitle>;
}

export default Title;