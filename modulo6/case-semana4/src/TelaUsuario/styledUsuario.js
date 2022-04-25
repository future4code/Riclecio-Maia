import styled from "styled-components"


export const ContainerUserPai = styled.div `
    width: 100% ;
    display:flex;
    justify-content: center ;
    flex-direction:column ;
    align-items:center ;
    
    
`
export const ContainerUserInfo= styled.image `
    display:flex;
    justify-content: space-evenly;
    flex-direction:column ;
    align-items:center ;
    width: 400px ;
    height: 500px;
    margin-top:50px ;
    margin-bottom:50px ;
    border-radius:10px ;
    box-shadow:0 0 1em rgba(0 0 0 / 30%) ;
    text-align:center ;
    padding:10px ;
    img{
        margin-top: 5px;
        width:150px ;
        height:150px ;
        border-radius:50% ;
        box-shadow:0 0 1em rgba(0 0 0 / 30%) ;
    }
    h1{
        font-size:19px ;
        font-family:Arial, Helvetica, sans-serif ;
        color:#c600e0;
    }
    h2{
        font-size: 17px ;
        font-family:Arial, Helvetica, sans-serif ;
        font-weight: lighter;
        color:#c600e0;
    }
    
    p{
        font-size:15px ;
        font-family:Arial, Helvetica, sans-serif ;
        font-weight: lighter;
        color:#c600e0;
    }
    
`