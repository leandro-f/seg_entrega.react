import { useState, useEffect } from "react";
import { getproductById } from "../../asyncMock";
import ItemDetalle from "../ItemDetalle/ItemDetalle";
import { useParams } from "react-router-dom";

const DetalleContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getproductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="detallecontainer">
      
      {product && <ItemDetalle {...product} img={product.img} />}
    </div>
  );
}

export default DetalleContainer;
