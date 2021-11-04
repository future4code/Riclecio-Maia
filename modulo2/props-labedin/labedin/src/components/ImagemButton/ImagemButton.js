import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
            <h5>{props.email}</h5>
        </div>

    )
}

export default ImagemButton;

