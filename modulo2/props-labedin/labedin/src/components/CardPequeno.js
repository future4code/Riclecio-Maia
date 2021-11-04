import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="dados-email">
            <img src={ props.imagem } />
            
            <div>
                <h4>{props.endereço}</h4>
                <h4>{ props.nome }</h4>
                <h3>{props.email}</h3>
                <p>{ props.descricao }</p>
            </div>
        </div>
        
    )
}

export default CardPequeno;