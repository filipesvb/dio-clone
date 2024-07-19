
import bannerImage from '../../assets/banner.png';

import { Link } from 'react-router-dom'
import  Button from '../../components/Button'
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight} from './styles'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                    <UserInfo nome="Filipe" image="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" percentual={30} />
                    <UserInfo nome="Filipe" image="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" percentual={10} />
                    <UserInfo nome="Filipe" image="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" percentual={27} />
                    <UserInfo nome="Filipe" image="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" percentual={78} />
                    <UserInfo nome="Filipe" image="https://avatars.githubusercontent.com/u/59072469?v=4&size=64" percentual={96} />
                </Column>
            </Container>
        </>
    );
}

export default Feed;