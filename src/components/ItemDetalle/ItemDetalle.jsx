import React from 'react';
import ItemCount from '../itemcount/Itemcount';
import './ItemDetalle.css';

const ItemDetalle = ({ nombre, img, category, descripcion, precio, stock }) => {
  return (
    <div className='item-card-container'>
      <article className='item-detail item-card'>
        <img src={img} alt={nombre} />

        <h2>{nombre}</h2>
        <p>Categoría: {category}</p>
        <p className='description'>{descripcion}</p>

        <p className='price'>Precio: ${precio}</p>
        
        <ItemCount
          initial={1}
          stock={stock}
          onadd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </article>
    </div>
  );
}

export default ItemDetalle;






