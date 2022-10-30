import styled from "styled-components";

export const ProjectsComponent = styled.section``;

export const ProjectsContent = styled.div`
    display: flex;
    
    flex-wrap: wrap;
    text-align:center;
    justify-content: center;
    
    
`;
export const ProjectsItem = styled.div`
    display: block;
    margin: 0px 51px;
`;


export const ProjectsTitle = styled.h2`
    


    font-weight: 500;
    font-size: 28px;
    text-align: center;
    
`;

export const ProjectsLink = styled.a`
    font-weight: 300;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    
`;

export const ProjectsImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 200px;
    
    object-fit: scale-down;

    box-shadow: -5px 5px 3px rgba(13, 13, 13, 0.5);
    border-radius: 25px;
`;
