
import bannerImage from '../../assets/banner.png';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import { useNavigate } from 'react-router-dom'
import  Button from '../../components/Button'
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'


const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(4, 'No mínimo 4 caracteres são exigidos').max(20, 'No máximo 20 caracteres são permitidos').required("Campo obrigatório"),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async formData => {
        console.log("Hello")
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data[0].email === formData.email && data[0].senha === formData.password) {
                navigate('/feed');
            } else {
                alert("Email ou senha inválidos");
            }
        } catch (error) {
            alert("Ocorreu um erro, tente novamente mais tarde.")   
        }
    };

    const handleClickSignup = () => {
        navigate('/signup')
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change ._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={null} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" />
                            <Button title="Entrar" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleClickSignup}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export default Login;