import React from "react"
import {BrowserRouter,Switch,Route } from "react-router-dom"
import AddRecipesPage from "../Pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RecipeDetailPage from "../Pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../Pages/RecipesListPage/RecipesListPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import SignUpPage from "../Pages/SignUpPage/SignUpPage"
import Header from "../components/Header/Header"

const Router = () =>{

    return(
        <BrowserRouter>
        <Header/>
        <Switch>

            <Route exact path="/login">
            <LoginPage/>
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
            <Route exact path="/cadastro">
                <SignUpPage/>  
            </Route>
            <Route >
                <ErrorPage/>  
            </Route>

        </Switch>
        

        </BrowserRouter>
    )


}
export default  Router


