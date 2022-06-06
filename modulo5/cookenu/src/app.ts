import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config()

 const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("Server is running at port", process.env.PORT || 3003)
})
export default app