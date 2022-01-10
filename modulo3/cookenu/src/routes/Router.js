import React from "react"
import {Switch,Route } from "react-router-dom"
import AddRecipesPage from "../Pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RecipeDetailPage from "../Pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../Pages/RecipesListPage/RecipesListPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import SignUpPage from "../Pages/SignUpPage/SignUpPage"


const Router = ({setRightButtonText}) =>{

    return(
        
        <Switch>

            <Route exact path="/login">
            <LoginPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage setRightButtonText={setRightButtonText}/>  
            </Route>
            <Route exact path="/adicionar-receita">
                <AddRecipesPage/>
            </Route>
            <Route exact path="/detalhe/:id">
                <RecipeDetailPage/> 
            </Route>
            <Route exact path="/">
                <RecipesListPage/> 
            </Route>
            <Route >
                <ErrorPage/>  
            </Route>

        </Switch>
        

    )


}
export default  Router


