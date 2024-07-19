import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { Column, Container, Title, Row, SubtitleLogin, Wrapper, TitleLogin, PrivacidadeText, LoginText, LoginTextLink } from "./styles";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const handleClickLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change ._</SubtitleLogin>
                        <form>
                            <Input name="nome" control={control} placeholder="Nome Completo" leftIcon={null} />
                            <Input name="email" control={control} placeholder="E-mail" leftIcon={null} />
                            <Input name="password" control={control} placeholder="Senha" type="password" />
                            <Button title="Criar minha conta" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <PrivacidadeText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PrivacidadeText>
                        </Row>
                        <Row>
                            <LoginText>Já tenho conta. <LoginTextLink onClick={handleClickLogin}>Fazer Login</LoginTextLink></LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Signup;