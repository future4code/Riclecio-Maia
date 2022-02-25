import app from "./app"
import {getProfile} from "./endpoints/getProfile";
import {login} from "./endpoints/login";
import { signup } from "./endpoints/signup";
console.log(app.listen);


app.post("/signup", signup)
app.post("/login", login)
app.get("/user/profile", getProfile)