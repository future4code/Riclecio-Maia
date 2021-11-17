import React from "react";
import Login from "./Login";

export default class Home extends React.Component {
  state = {
    pagina: "Login"
  };

  escolherPagina = () => {
    this.setState({
      pagina: "Home"
    });
  };

  escolherPaginaLogin = () => {
    this.setState({
      pagina: "Login"
    });
  };

  render() {
    let paginaEscolhida;
    switch (this.state.pagina) {
      case "Home":
        paginaEscolhida = <Home/>;
        break;
      case "Login":
        paginaEscolhida = <Login/>;
        break;
      default:
        paginaEscolhida = <p> Nenhuma página escolhida</p>;
    }

    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.escolherPagina}>home</button>
        {paginaEscolhida}
      </div>
    );
  }
}
