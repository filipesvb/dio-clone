
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/59072469?v=4&size=64' />
                    <div>
                        <h4>Filipe Vilas Bôas</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de HTML e CSS do Bootcamp de Angular... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>

                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
