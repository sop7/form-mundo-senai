import * as C from "@chakra-ui/react"
import { useState } from "react"

const FormPessoal = () => {
    const [genero, setGenero] = useState('')

    return (
        <C.VStack spacing={5}>
            <C.Text color="white">Usuário</C.Text>
            <C.Input type="email" placeholder="Insira seu e-mail" />
            <C.Input type="text" placeholder="Insira seu nome" />
            <C.Input type="text" placeholder="Insira seu CPF" />
            <C.Input type="text" placeholder="Insira seu telefone" />
            <C.RadioGroup onChange={setGenero} value={genero}>
                <C.Stack spacing={4} direction="row">
                    <C.Radio value="masculino" colorScheme="black">
                        Masculino
                    </C.Radio>
                    <C.Radio value="feminino" colorScheme="red">
                        Feminino
                    </C.Radio>
                </C.Stack>
            </C.RadioGroup>
        </C.VStack>
        
    )
    
}


export default FormPessoal
