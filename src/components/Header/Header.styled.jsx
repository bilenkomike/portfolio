import styled from 'styled-components';


export const Header = styled.header`

    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;

    display: flex;
    width: 100vw;
    padding: 10px 90px;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;

    background-color: rgba(0,0,0,.75);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(50px);
    box-shadow: 2px 2px 10px rgba(0,0,0,.75);

    user-select: none;

`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    &:first-child {
        width: 10%;
    }
    &:last-child {
        width: 70%;
    }

`;