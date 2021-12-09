import react from "react";
import { HomePage } from "./HomePage";
import { useHistory } from "react-router-dom";
export const PaginaViagem = () => {
  const Histo = useHistory();
  const goToBack = () => {
    Histo.goBack();
  };

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
};