import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
    postou:[
      {nomeUsuario:'Julia',
      fotoUsuario:'https://scontent.fgru9-1.fna.fbcdn.net/v/t31.18172-8/15271944_1292392220809055_7968295634021935359_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=s00v8EuO3FsAX-RFRZQ&_nc_ht=scontent.fgru9-1.fna&oh=9c1fc9afd32911046b5705d9a26d2952&oe=61A965B7',
      fotoPost:'https://picsum.photos/200/150',},
      {nomeUsuario:'Rick',
      fotoUsuario:'https://scontent.fgru9-2.fna.fbcdn.net/v/t1.18169-9/11896059_963195643728716_3675874581017513297_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=SLR7j5rTJb8AX9-pCvs&tn=OMql3SsCBB_5CX_k&_nc_ht=scontent.fgru9-2.fna&oh=1813a1ec9fdd3a9763dd552414efb6d2&oe=61A9171C',
      fotoPost:'https://picsum.photos/200/152',},
      {nomeUsuario:'Hanna',
      fotoUsuario:'https://scontent.fgru9-2.fna.fbcdn.net/v/t1.6435-9/85079751_2536015923312701_1586650645304180736_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=lDaryk2FFssAX-8ZweO&tn=OMql3SsCBB_5CX_k&_nc_ht=scontent.fgru9-2.fna&oh=d2c71da6ce707491e771f4fa8c6e622a&oe=61AB9D37',
      fotoPost:'https://picsum.photos/200/151',},],
      
        imputNomeUsuario:"",
        imputFotoUsuario:"",
        imputFotoPost:"",
       
  }
  adicionarNovoPost=()=>{
    const post={
      nomeUsuario:this.state.imputNomeUsuario,
      fotoUsuario:this.state.imputFotoUsuario,
      fotoPost:this.state.imputFotoPost
    }
  
 const postar={...this.state.postou,post}
  };
  render() {
      const listaDeComponentes=this.state.postou.map((poste) => {
        return(
          <Post key={poste.id}
             nomeUsuario={poste.nomeUsuario}
             fotoUsuario={poste.fotoUsuario}
             fotoPost={poste.fotoPost}
          />

          
        );
  
      });   
     return (
       
       <MainContainer>{listaDeComponentes}</MainContainer>
       
        
      );
    }
  }
  
export default App;
