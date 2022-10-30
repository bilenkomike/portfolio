
import { FiInstagram,FiLinkedin,FiGithub,FiTwitter,FiMail } from 'react-icons/fi';
import {SocialsComponent,SocialsItem} from './Socials.styled';

const Socials = props => {
    return  <SocialsComponent>
        <SocialsItem href="http://www.google.com" target="_blank">
            <FiInstagram />
        </SocialsItem> 
        <SocialsItem href="http://www.google.com" target="_blank">
            <FiLinkedin />
        </SocialsItem>
            
        <SocialsItem href="http://www.google.com" target="_blank">
            <FiMail />
        </SocialsItem>
            
        <SocialsItem href="http://www.google.com" target="_blank">
            <FiGithub />
        </SocialsItem>
            
        <SocialsItem href="http://www.google.com" target="_blank">
            <FiTwitter />
        </SocialsItem>
        </SocialsComponent>;
}

export default Socials;