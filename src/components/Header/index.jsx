import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-dio.png';

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPhoto,
    Wrapper
} from './styles.js'
import Button from "../Button";

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickEntrar = () => {
        navigate('/login');
    }
    const handleClickCadastrar = () => {
        navigate('/signup');
    }
    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    {autenticado ? (
                        <>
                            
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : (
                        <img src={logo} alt="Logo da DIO" />
                    )}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPhoto src="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" />
                    ) : 
                        <>
                            <MenuRight onClick={handleClickHome}>Home</MenuRight>
                            <Button onClick={handleClickEntrar} title="Entrar" />
                            <Button onClick={handleClickCadastrar} title="Cadastrar" />
                        </>
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header};