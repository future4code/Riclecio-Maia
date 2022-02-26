import app from "./app"
import createRecipes from "./endpoints/createRecipe";
import getOtherProfile from "./endpoints/getOtherProfile";
import {getProfile} from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";
import {login} from "./endpoints/login";
import { signup } from "./endpoints/signup";
console.log(app.listen);


app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)
app.get("/recipe/:id", getRecipe)
app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe",createRecipes)