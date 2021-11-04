import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <img clas  src={require ("../img/rick.png")}/>
            <div>
                <h4>{ props.nome }</h4>
                <h3>{props.email}</h3>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;

