import styled from 'styled-components';


export const AboutComponent = styled.section`
    
`;

export const AboutContenct = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    text-align:justify;
`;

export const AboutImage = styled.img`

    display: block;
    max-width: 350px;
    width: 100%;
    max-height: 350px;
    height: 100%;
    
    border-radius: 50%;
    border: 2px solid #4C70EF;

    box-shadow: -5px 10px 10px 5px rgba(13, 13, 13, 0.5);

`;


export const AboutText = styled.div`
    display: block;
    width: 462px;
    margin: auto 0px;

    text-align: justify;
`;

export const AboutParagraph = styled.p`
    
    font-weight: 300;
    font-size: 1.11111rem;
    color: rgba(255,255,255,.7);

    &:first-child {
        margin-bottom: 30px;
    }
`;