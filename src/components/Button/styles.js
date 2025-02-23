import styled from 'styled-components';

export const ButtonContainer = styled.button`

    background-color: #565656;
    border-radius: 22px;
    position: relative;
    border: none;
    color: #ffff;
    padding: 2px 12px;
    min-width: 120px;
    max-width: 275px;
    width: 100%;
    cursor: pointer;

    ${({variant}) => variant !== "primary" && `
        min-width: 167px;
        height: 33px;

        background-color: #E4105D;

        &:hover {
            opacity: 0.8;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px );
            border-radius: 22px;
        }
    `}

`