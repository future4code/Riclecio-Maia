import React from "react"
import {ScreenContainer,LogoImage,InputsContainer, SignUpButtonContainer} from "./styled"
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm"
import { goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Login= ()=>{

 const history=useHistory()

    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
            
            <SignUpButtonContainer>
               
            <Button 
            onClick={()=>goToSignUp(history)}
            type={"submit"}
            fullWidth
            variant={"text"}
            color={"primary"}> 
            Não possui conta? Cadastre-se 
            </Button>
            </SignUpButtonContainer>

            </ScreenContainer>
    )

}
export default Login