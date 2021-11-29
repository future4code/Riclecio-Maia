import React from "react";

const TrocaTela = () => {
  const onClickBotao = () => {
    alert("clicou");
  };

  return (
    <div>
      <button onClick={onClickBotao}>Trocar Tela</button>
    </div>
  );
};
export default TrocaTela;
