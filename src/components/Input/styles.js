import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const ErrorMessage = styled.p`
    font-size: 12px;
    color: #FF0000;
    margin-bottom: 10px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
    width: 100%;
    outline: none;
`