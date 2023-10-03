import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ id, tipo, img, precio, stock }) => {
  return (
    <article className='carditem'>
      <header className='header'>
        <h2 className='itemheader'>{tipo}</h2>
      </header>
      <picture>
        <img src={img} alt="" className='itemimg' />
      </picture>
      <section className='info'>
        <p className='price'>Precio: ${precio}</p>
        <p className='stock'>Stock: {stock}</p>
      </section>
      <footer className='itemfooter'>
        <Link to={`/item/${id}`} className='option'>Ver detalle</Link>
      </footer>
    </article>
  );
}

export default Item;
