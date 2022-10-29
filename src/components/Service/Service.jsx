
import Title from "components/Title/Title";
import Container from "components/Container/Container";
import {ServiceComponent, ServiceContent, ServiceImage,ServiceList,ServiceListItem} from './Service.styled';
import image from './images/image.png';

const Service = props => {

    return <ServiceComponent>
        
        <Title>Service</Title>
        <Container>
            <ServiceContent>
                <ServiceImage src={image} />
                <ServiceList>
                    <ServiceListItem>UI/UX design</ServiceListItem>
                    <ServiceListItem>Frontend</ServiceListItem>
                    <ServiceListItem>Backend</ServiceListItem>
                    <ServiceListItem>Testing</ServiceListItem>
                </ServiceList>
            </ServiceContent>
        </Container>
    </ServiceComponent>
}

export default Service;