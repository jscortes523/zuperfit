import React from 'react';
import '../assets/styles/components/Summary.scss';
import image from '../assets/static/lunch.jpg';
import price from '../assets/static/servings.png';
import list from '../assets/static/list.png';
import clock from '../assets/static/time.png';

const Summary = () => (
  <div className="summary">
    <div className="summary__item">
      <div className="summary__item--image">
        <img src={image} alt=""/>
      </div>
        <div className="summary__item--content_description">
          <p>Esta receta es deliciosa y te encantara</p>
        </div>
        <div className="summary__item--content_details">
                    <img src={price}/><span className="summary__item--content_details-resume">2500$ </span>
                    <img src={list}/><span className="summary__item--content_details-resume">5 </span>
                    <img src={clock}/><span className="summary__item--content_details-resume">30 min. </span>
                </div>
      </div>

  </div>
);

export default Summary;