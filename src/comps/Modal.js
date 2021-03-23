import React from 'react'

export const Modal = ({selectedImage, SetSelectedImage}) => {

    const handleClick = (e) =>{

        if(e.target.classList.contains('backdrop')){
            SetSelectedImage(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="Imagem Grande"/>
        </div>
    )
}
