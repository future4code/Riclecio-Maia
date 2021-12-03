
import React, { useState } from "react";
import TelaHome from "./Paginas/TelaHome";
import TelaPerfil from "./Paginas/TelaPerfil";


const App = () => {
  const [pagina, setPagina] = useState("home");


  const mudaPagina = (pagina) => {
    setPagina(pagina);
  };

  const qualPagina = () => {
    switch (pagina) {
      case "home":
        return <TelaHome mudaPagina={(pagina) => mudaPagina(pagina)} />;
      case "perfil":
        return <TelaPerfil mudaPagina={(pagina) => mudaPagina(pagina)} />;
      default:
        return <b>Erro! Tente novamente.</b>;
    }
  };

  const escolhePagina = qualPagina();

  return (
    <div>
      <button onClick={() => mudaPagina("home")}>Match</button>
      <button onClick={() => mudaPagina("perfil")}>Perfil</button>
      {escolhePagina}
    </div>
  );
};

export default App;
