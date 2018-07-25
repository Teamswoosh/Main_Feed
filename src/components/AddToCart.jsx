import React from 'react';
import style from '../styles/style.css';

const AddToCart = () => (
  <div>
    <button className={style.AddToCart}>Add To Cart</button>
    <button className={style.heartButton}>
      <img className={style.heart} src='https://emojipedia-us.s3.amazonaws.com/thumbs/160/emojipedia/140/white-heart_.png' alt='heart' />
    </button>    
  </div>
);


export default AddToCart;
