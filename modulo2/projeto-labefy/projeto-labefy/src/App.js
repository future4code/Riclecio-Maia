
import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    Musica: "",
    Artista: ""
  };

  onChangeMusica = (event) => {
    this.setState({ Musica: event.target.value });
  };
  onChangeArtista = (event) => {
    this.setState({ Artista: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.musica}
          onChange={this.onChangeMusica}
          placeholder={"Musica"}
        />
        <input
          value={this.state.artista}
          onChange={this.onChangeArtista}
          placeholder={"Artista"}
        />
        <button onClick={() => console.log(this.state)}>Botão</button>
      </div>
    );
  }
}
