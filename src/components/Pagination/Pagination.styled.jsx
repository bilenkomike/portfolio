import styled from 'styled-components';


export const PaginationComponent = styled.div`
    display: flex;
    margin: 53px auto 0;
    justify-content: center;
`;


export const PaginationItemContainer = styled.span`
    display: block;
    padding: 10px 0px;

    cursor: pointer;
`;



export const PaginationItem = styled.span`
    display: block;
    width: 50px;
    height: 3px;
    margin: 0px 10px;
    
    
    background-color: rgba(255,255,255, .5);
    ${props => props.active ? 'background-color: rgba(255,255,255, 1);': null}
    
    border-radius: 20px;

    
    transition: background-color .1s linear;
`;