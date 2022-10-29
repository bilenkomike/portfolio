import styled from 'styled-components';


export const Intro = styled.div`
    display: block;
    width: 100%;
    position: relative;

    user-select: none;
`;

export const IntroImg = styled.img`
    display: block;
    width: 100%;
`;

export const IntroHover = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color:  rgba(0,0,0,.75);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
`;


export const IntroText = styled.div`
    display: block;

    font-weight: 600;
    text-align: center;
    font-size: 3.56rem;
`;