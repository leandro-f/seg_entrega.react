import React from 'react'
import Item from "../Item/Item"


const Itemlist = ({products}) => {
  return (
    <div className='listgroup'>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default Itemlist