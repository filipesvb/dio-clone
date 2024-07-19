
import { IconContainer, ErrorMessage, InputContainer, InputText } from './styles'
import { Controller } from 'react-hook-form';

const Input = ({leftIcon, errorMessage, control, name, ...rest}) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller 
                    name={name}
                    control={control}
                    rules={{required: true}}
                    render={({field}) => <InputText  {...field} {...rest}/>}
                />
                
            </InputContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    )
}

export {Input};