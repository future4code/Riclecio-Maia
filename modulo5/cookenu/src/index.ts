import app from "./app"
import createRecipes from "./endpoints/createRecipe";
import getOtherProfile from "./endpoints/getOtherProfile";
import {getProfile} from "./endpoints/getProfile";
import { signup } from "./endpoints/signup";
import {login} from "./endpoints/login";
import getRecipe from "./endpoints/getRecipe";
import followUser from "./endpoints/followUser";
import unfollow from "./endpoints/unFollowUser";
import getUserFeed from "./endpoints/getUserFeed";
console.log(app.listen);


app.get("/user/profile", getProfile)
app.get("/user/:id", getOtherProfile)
app.get("/recipe/:id", getRecipe)
app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe",createRecipes)
app.post("/user/follow", followUser)
app.delete("/user/unfollow", unfollow)
app.get("/user/feed", getUserFeed)