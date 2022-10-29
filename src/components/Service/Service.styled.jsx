import styled from 'styled-components';

export const ServiceComponent = styled.section`
    
`;

export const ServiceContent = styled.section`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    text-align:justify;
`;


export const ServiceImage = styled.img`

    display: block;
    width: 100%;
    max-width: 550px;
    max-height: 300px;
    height: 100%;
    
    
    border-radius: 20px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.35);

    box-shadow: -5px 10px 10px 5px rgba(13, 13, 13, 0.5);

`;

export const ServiceList = styled.ul`
    margin: auto 0;
    padding-right:25%;
    list-style: disc;
`;


export const ServiceListItem = styled.li`
    font-weight: 300;
    font-size: 1.111rem;
    opacity: .75;
    padding: 10px 0px;
`;