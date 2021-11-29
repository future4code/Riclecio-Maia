import React from "react";

import MeuComponente1 from "./Components/MeuComponente1";
import TrocaTela from "./Components/TrocaTela";
import Comp2 from "./Components/Comp2";
import styled from "styled-components";
import axios from "axios";

export default class App extends React.Component {
  state = {
    name: "",
    email: "",
    AllUsers:[] 
  };
CreateUser=() =>{
const body ={
  name:this.state.nameUsuario,
  email:this.state.emailUsuario
};
axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
{headers:{Authorization:"Riclecio-Maia"}
})
.then(()=>{
  this.setState({nameUsuario:"",emailUsuario:""})
  .catch((err)=>{
    console.log(err.response.data);
})
this.setState({nameUsuario:"",emailUsuario:""})
console.log(body);

})

};

SearchUsers = () => {
  axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "Riclecio-Maia"
        }
      }
    )};




  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Riclecio-Maia"
          }
        }
      )
      .then((res) => {
        this.setState({AllUsers: res.data.result.list})
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  state = {
    nome: "",
    email: ""
  };

  render() {
    
    
    return (
      <div className="App">
        
        <h1>
          <TrocaTela />
        </h1>
        <input placeholder={"nome"} /> <input placeholder={"email"} />
        <MeuComponente1 />
        <button onClick={this.getAllUsers}>botao Api </button>
      </div>
    );
  }
}
