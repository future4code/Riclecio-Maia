import styled from "styled-components";


const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:250px;
  padding:0px;
`;

const Botao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  padding:0px ;
  margin-right:20px;
`;

export default function App() {
  return (
    <div>
      <Home>
      <h1>LabeX</h1>
      </Home>
       <Botao>
        <button>Ver viagens</button>
        <button >área de admin</button>
       </Botao>
      
      
    </div>
  );
}



