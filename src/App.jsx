import * as C from '@chakra-ui/react'
import { useState } from 'react'
import Step from './Components/Step.jsx'
import FormProjeto from './Pages/FormProjeto.jsx'
import FormPessoal from './Pages/FormPessoal.jsx'
import FormEndereco from './Pages/FormEndereco.jsx'


function App() {
  const [step, setStep] = useState(1)
  const Steps =[1,2,3]

  const getCompStep= () =>{
    switch(step){
      case 1:
        return<FormPessoal/>
      case 2:
        return<FormEndereco/>
      case 3:
        return<FormProjeto/>
      default:
        return <FormPessoal/>  
    }
  }


  return (
     <C.Flex h="100vh" align="center" justify="center" bg="#241345" color="white">
        <C.Center maxW={500} w ="100%" py={11} px={2} flexDirection="column" border='6px' borderColor="#2c5391" borderRadius="20px" borderStyle={'solid'}>
          <C.HStack spacing={4}>
            {Steps.map((item) =>(
              <Step key={item} index={item} active={step===item}/>
            ))}

          </C.HStack>

          <C.Divider my={4} borderColor="blue.800"></C.Divider>

          <C.Box w={"88%"}>{getCompStep()}</C.Box>

        <C.HStack spacing={10} mt={4}>
          <C.Button bg="gray.200"
          onClick={() => step !==1 && setStep(step-1)}
          disabled={step===1}
          > Voltar

          </C.Button>

          <C.Button bg="green"
          onClick={() => step !==3 && setStep(step+1)}
          >
          {step ===3 ? "Enviar":"Proximo"}

          </C.Button>

        </C.HStack>
       </C.Center>

      </C.Flex>
    )
}

export default App
