import {useState} from 'react';

import { Header as HeaderS, Nav } from './Header.styled';
import Link from '../Link/Link';

const Header = props => {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link);
    }

    const links = ['Home','About','Service','Skills','Technologies','Projects','Contacts'];


    return <HeaderS>
        <Nav>
            <Link noClick logo>Portfolio</Link>
        </Nav>
        <Nav>
            {links.map(link => <Link key={link.toLowerCase()} onLinkHandle={handleClick} active={activeLink}>{link}</Link>)}
        </Nav>
    </HeaderS>
}

export default Header;