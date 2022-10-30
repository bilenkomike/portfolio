import { FooterComponent,FooterBlogLink,FooterSpecialLink,FooterCopyWrite } from "./Footer.styled"; 
import Socials from "components/Socials/Socials";

const Footer = props => {
    return <FooterComponent>
        <FooterBlogLink target="_blank" href="">Blog</FooterBlogLink>
        <FooterSpecialLink target="_blank" href="https://www.flaticon.com/free-icons/patience" title="patience icons">Patience icons created by fjstudio - Flaticon</FooterSpecialLink>
        <Socials />
        <FooterCopyWrite >Copyright © 2022</FooterCopyWrite>
    </FooterComponent>
}

export default Footer;
