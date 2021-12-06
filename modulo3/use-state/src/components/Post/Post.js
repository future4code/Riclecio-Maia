import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [numeroCurtidas, Curtidas] = useState(0)
  const [curtido, usuarioCurtiu] = useState(false)
  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco
  const [comentario, comentarios] = useState(false)
  const [listaComentarios, pegarListaDeComentarios] = useState([])

  const onClickCurtida = () => {
    if (curtido){
      usuarioCurtiu(false)
      Curtidas(numeroCurtidas - 1)
    } else{
      usuarioCurtiu(true)
      Curtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    comentarios(!comentario)
  };

  const enviarComentario = (comentario) => {
    const spread = [...listaComentarios, comentario]

    pegarListaDeComentarios(spread)

    comentarios(false)


  }

const secaoComment = comentario ? (<SecaoComentario enviarComentario= {enviarComentario}/>) : null

function caixaDeComentario() {

  const comments = listaComentarios.map( comment => {
    return(
      <CommentContainer>
        <p>{comment}</p>
      </CommentContainer>)
    })

    return comments
    
  }



  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
           icone={iconeCurtida}
          onClickIcone={onClickCurtida}
           valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario()}
      {secaoComment}
    </PostContainer>
  )
}

export default Post