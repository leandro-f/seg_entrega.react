import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import { getproductByCategory } from "../../asyncMock";
import Itemlist from "../Itemlist/Itemlist";
import { useParams, useLocation } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const asyncFunc = categoryId ? getproductByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      {location.pathname === '/' && <h1>{greeting}</h1>} 
      <Itemlist products={products} />
    </div>
  );
};

export default ItemListContainer;
