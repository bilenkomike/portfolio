import styled from 'styled-components';


export const NavLink = styled.span`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255,255,255,.7);

    ${props => props.active ? `font-weight: 600; color: #FFF;` : ''};
    ${props => props.logo ? `font-size: 1.2rem;font-weight: 600; color: #FFF;`: ''}

    cursor: pointer;
    transition: color .1s linear, font-weight .1s linear;
`;