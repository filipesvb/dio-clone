import { useState, useEffect, useMemo } from "react"
import {Column, Container, InputContainer} from './styles'

const Teste = () => {

    const [text, setText] = useState('');
    
    return (
        <Container>
            <Column flex={1}>
                <h2>Digite seu nome</h2>
                <InputContainer>            
                    <input value={text} onChange={(event) => setText(event.target.value)} />
                </InputContainer>
                
            </Column>
            <Column flex={1} >
                <h1>{text}</h1>
            </Column>
        </Container>
    )
}

export {Teste}
