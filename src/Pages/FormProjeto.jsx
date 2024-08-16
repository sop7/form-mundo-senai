import * as C from "@chakra-ui/react"

const FormProjeto = () =>{
    return(
        <C.VStack spacing={5}>
                      <C.Text
          color="white"
          >
            Informações do Projeto
            </C.Text>
            <C.Input type="text" placeholder="Insira o projeto"/>
            <C.Input type="text" placeholder="Área de atuação"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <C.Stack direction='row' spacing={10}>
            <C.Stack spacing={4} direction='column'>
                <C.Checkbox colorScheme='blue'>
                     CETCC
                 </C.Checkbox>
                <C.Checkbox colorScheme='blue'>
                     CETAFEST
                 </C.Checkbox>
                 </C.Stack>
                 <C.Stack spacing={4} direction='column'>
                <C.Checkbox colorScheme='blue'>
                     CETCC
                 </C.Checkbox>
                <C.Checkbox colorScheme='blue'>
                     CETAFEST
                 </C.Checkbox>
                 </C.Stack>
            </C.Stack>
        </C.VStack>
    )
}

export default FormProjeto