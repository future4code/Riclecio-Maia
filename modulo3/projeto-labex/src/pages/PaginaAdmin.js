import react from "react";
import { useHistory } from "react-router-dom";

export const PaginaAdmin = () => {
  const History = useHistory();

  const goToBack = () => {
    History.goBack();
  };

  return (
    <div>
      <h1>Pagina de Admin</h1>

      <button onClick={goToBack}>Voltar</button>
    </div>
  );
};