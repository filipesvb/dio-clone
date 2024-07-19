import styled from "styled-components";

export const Container = styled.main`

    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`

export const Wrapper = styled.div`
    max-width: 350px;

`

export const Column = styled.div`
    flex: 1;

    &:nth-of-type(2) {
        display: flex;
        justify-content: center;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;

`

export const TitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const PrivacidadeText = styled.p`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`

export const LoginText = styled.span`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;

    color: #FFFFFF;

`

export const LoginTextLink = styled.span`

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    cursor: pointer;

    color: #E23007;

    &:hover {
        text-decoration: underline;
    }
`

