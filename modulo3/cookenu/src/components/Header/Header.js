import React from 'react'
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import {useHistory} from "react-router-dom"
import {goToRecipesList, goToLogin} from "../../routes/coordinator"

const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
     if (token){
            logout()
            setRightButtonText("Login")
        goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
            <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
            <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
    </AppBar>
    )
}

export default Header
