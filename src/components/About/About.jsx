import Title from '../Title/Title';
import avatar from './images/avatar.jpg';
import Container from 'components/Container/Container';

import { AboutComponent, AboutContenct, AboutImage,AboutText,AboutParagraph } from './About.styled';


const About = props => {


    return <AboutComponent>
        
        <Title>About</Title>
        <Container>
            <AboutContenct>
                <AboutImage src={avatar} />
                <AboutText>
                    <AboutParagraph>
                        I`m Mikle Bilenko. I`m currently 18 years old. I`m Full Stack Web Developer. I am a freelancer at the moment. 
                    </AboutParagraph>
                    <AboutParagraph>
                        Now I work on my own and help different people with their projects.
                    </AboutParagraph>
                </AboutText>
            </AboutContenct>
        </Container>
    </AboutComponent>
}

export default About;