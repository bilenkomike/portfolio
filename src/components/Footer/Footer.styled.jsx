import styled from 'styled-components';


export const FooterComponent = styled.footer`
    display: block;
    margin-top: 47px;
    padding:25px 32.34vw ;
    background-color: #0D0D0D;
    
    box-shadow: 1px -10px 20px rgba(0, 0, 0, .5);
`;

export const FooterBlogLink = styled.a`
    display: block;
    margin-bottom: 15px;

    font-weight: 300;
    font-size: 1.1111rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    color: rgba(255, 255, 255, 0.7);
  
    cursor: pointer;
`;
export const FooterSpecialLink = styled.a`
    display: block;
    margin-bottom: 15px;
    
    font-weight: 300;
    font-size: 1.1111rem;
    text-align: center;
    text-decoration: none;

    color: rgba(255, 255, 255, 0.7);
  
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
export const FooterCopyWrite = styled.span`
    display: block;
    margin-top: 15px;
    
    font-weight: 400;
    font-size: .6667rem;
    text-transform: uppercase;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
`;
