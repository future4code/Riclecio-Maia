import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import signup from "../src/endpoints/signup"
//import createUser from "../src/endpoints/createUser"

dotenv.config();

export const app = express();

//app.post('/user/signup', createUser)
app.post("/login", signup )













app.use(express.json());


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
