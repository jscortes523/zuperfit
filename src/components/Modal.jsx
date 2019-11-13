import React from 'react';
import '../assets/styles/components/Modal.scss'

const Modal = ({title, description, prepTime, images, categories, instructions, ingredients, tags, price}) => (
    <div>
        <h2>{title}</h2>
        <img src={images} alt=""/>
    </div>
);

export default Modal

