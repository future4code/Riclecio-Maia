import React from "react";

const MeuComponente1 = () => {
  const onClickBotao = () => {
    alert("Usuario adicionado com sucesso");
  };

  return (
    <div>
      <button onClick={onClickBotao}>Criar usuario</button>
    </div>
  );
};
export default MeuComponente1;
