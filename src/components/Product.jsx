import React from 'react';
import '../assets/styles/components/Product.scss';
import minuIcon from '../assets/static/minusIcon.png';
import favoriteIcon from '../assets/static/favorites.png';
import deleteIcon from '../assets/static/minus.png';
import plusIcon from '../assets/static/plus.png';


const Product = (props) => {

    return (
        <div className="item">
            <div className="buttons">
              <span className={deleteIcon}></span>
              <span className={favoriteIcon}></span>
            </div>

            <div className="image">
              <img src="item-1.png" alt="" />
            </div>

            <div className="description">
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                <img src={plusIcon} alt="" />
              </button>
              <input type="text" name="name" value="1"/>
              <button className={minuIcon} type="button" name="button">
                <img src="minus.svg" alt="" />
              </button>
            </div>

            <div className="total-price">$549</div>
        </div>
    );
};

export default Product