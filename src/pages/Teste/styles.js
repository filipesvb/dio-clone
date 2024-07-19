import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    flex: ${({flex}) => flex};

`

export const InputContainer = styled.div`

    width: 50%;
    border-radius: 10px;
    height: 43px;
    background-color: white;

    input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        padding: 0 1rem;
        font-size: 16px;
    }

`