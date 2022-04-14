import styled from "styled-components"
import fundobusca from "../img/flores.png"
import fundobotao from "../img/OIP.jpg"

export const ContainerPai = styled.div `
    background-color: #c5daff;
    width:100% ;
    border: 1px solid black;
    display:flex ;
    justify-content:center ;
    margin:auto ;
    opacity: 0.9;
`


export const ContainerBusca = styled.div `
    background-image: url(${fundobusca}) ;
    background-repeat: no-repeat;
    background-size: 100%;
    padding-bottom:15px ;
    width: 100% ;
    display: flex ;
    justify-content:center;
    align-items:center ;
    flex-direction:column ;
    
    
    
    input{
        width:400px ;
        height:60px ;
        border-radius: 100px ;
        box-shadow:0 0 1em rgba(0 0 0 / 30%) ;
        font-size: 2em ;
        padding-left: 25px ;
    }
    
    ion-icon{
        background-image: url(${fundobotao}) ;
        background-size: 108%;
        width:45px ;
        height:49px ;
        color: rgba(255, 255, 250, 1);
        cursor:pointer ;
      
        border-radius:50px 70px 60px 70px;
    }
    p{
        font-size:20px ;
        color : #ffff;
        cursor: pointer;
        font-family:Arial, Helvetica, sans-serif ;
    }
    
    
`
export const ContainerLogo = styled.image `
    img {
        width:200px ;
        margin:35px ;
    }
        
`

export const ContainerInput = styled.div `
    display:flex ;
    flex-direction:row ;
`