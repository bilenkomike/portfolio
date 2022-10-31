import styled from 'styled-components';

export const HeaderTitle = styled.h1`
    display: block;
    margin: 47px 0px;
`;

export const TitleText = styled.span`
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
    text-align: center;
    font-weight: 500;
    font-size: 2.667rem;
    text-transform: uppercase;

    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        margin-top: 10px;
        background-color: #4C70EF;
        border-radius: 24px;
        box-shadow: 2px 3px 4px rgba(76, 112, 239, 0.4);

    }
`;