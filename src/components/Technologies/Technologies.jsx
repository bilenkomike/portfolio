import {
    TechnologiesComponent,
    TechnologiesContent,
    TechnologiesImg
    } from './Technologies.styled';

import Title from "components/Title/Title";

import image1 from './images/figma.png';
import image2 from './images/html_css_js.png';
import image3 from './images/react.png';
import image4 from './images/postgresql.png';
import image5 from './images/django.png';

const Technologies = props => {
    const images = [image1, image2, image3,image4, image5];
    return (
        <TechnologiesComponent id="">
            <Title>Technologies</Title>
            <TechnologiesContent>               
                {images.map( image => <TechnologiesImg src={image} key={image} />)}
            </TechnologiesContent>
        </TechnologiesComponent>
    );
}

export default Technologies;