
import Title from "components/Title/Title";
import {TechnologiesComponent,TechnologiesContent,TechnologiesImg} from './Technologies.styled';
import image1 from './images/figma.png';
import image2 from './images/html_css_js.png';
import image3 from './images/react.png';
import image4 from './images/postgresql.png';
import image5 from './images/django.png';

const Technologies = props => {
    return (
        <TechnologiesComponent id="">
            <Title>Technologies</Title>
            <TechnologiesContent>               
                <TechnologiesImg src={image1} />
                <TechnologiesImg src={image2} />
                <TechnologiesImg src={image3} />
                <TechnologiesImg src={image4} /> 
                <TechnologiesImg src={image5} />
            </TechnologiesContent>
        </TechnologiesComponent>
    );
}

export default Technologies;