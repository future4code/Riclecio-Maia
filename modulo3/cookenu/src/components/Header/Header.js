import React from 'react';
import { StyledToolbar } from './styled';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {goToRecipesList,goToLogin} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"

import Button from '@material-ui/core/Button'



const Header =() => {
    const history = useHistory() 

  return (
    
      <AppBar position="static">
        <StyledToolbar>
          
          <Button onClick={()=>goToRecipesList(history)} color="inherit">Cookenu</Button>
          <Button  onClick={()=>goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
 
  );
}
export default Header