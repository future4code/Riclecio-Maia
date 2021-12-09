import { useHistory } from "react-router-dom";
import styled from "styled-components";


const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  padding: 40px;
`;
const Botao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 0;
  justify-content: space-evenly;
`;

export const HomePage = () => {
 
  const History = useHistory();

  const irParaAdmin = () => {
    History.push("/admin");
  };
  const irParaViagem = () => {
    History.push("/travel");
  };

  return (
    <div>
      <H1>Labex</H1>
      <Botao>
        
          <button onClick={irParaViagem} >
            Ver viagens
          </button>
          <button onClick={irParaAdmin} >
            Area Admin
          </button>
        
      </Botao>
    </div>
  );
};