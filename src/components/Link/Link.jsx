

import { NavLink } from './Link.styled';


const Link = props => {
    
    
    const handleLinkClick = (link) => {
        props.onLinkHandle(link);
    }

    return <NavLink onClick={() => {!props.noClick && handleLinkClick(props.children.toLowerCase())}} logo={props.logo} active={props.active === props.children.toLowerCase()}>{props.children}</NavLink>
}

export default Link;