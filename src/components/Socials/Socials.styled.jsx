import styled from 'styled-components';


export const SocialsComponent = styled.div`
    display: flex;
    justify-content: center;

`

export const SocialsItem = styled.a`
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 59px;

    &:last-child {
        margin-right: 0;
    }


    cursor:pointer;

    & > svg {
        width: 50px;
        height: 50px;

        color: rgba(255,255,255,.7);
        stroke-width: 1;
    }
`