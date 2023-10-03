const products = [
    {
      id: "1",
      tipo: "Remera de algodon",
      precio: 1000,
      category: "remera",
      img: "/imagenes/dog-4.png",
      stock: 10,
      descripcion: "la mejor calidad"
    },
    {
      id: "2",
      tipo: "Remera de algodon",
      precio: 1000,
      category: "remera",
      img: "/imagenes/rem hoekxx blanco.png",
      stock: 2,
      descripcion: "la mejor calidad"
    },
    {
      id: "3",
      tipo: "Remera Rose",
      precio: 1000,
      category: "remera",
      img: "/imagenes/rose-2.png",
      stock: 5,
      descripcion: "la mejor calidad"
    },
    {
      id: "4",
      tipo: "Remera car azul",
      precio: 1000,
      category: "remera",
      img: "/imagenes/remera auto azul.png",
      stock: 5,
      descripcion: "la mejor calidad"
    },
    {
      id: "5",
      tipo: "Remera car rosa",
      precio: 2000,
      category: "remera",
      img: "/imagenes/remera auto rosita.png",
      stock: 3,
      descripcion: "la mejor calidad"
    }
    
  ];
  

export const getProducts =()=>{
    return new Promise((resolve ) =>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}

export const getproductById = (productId) =>{
    return new Promise ((resolve ) =>{
        setTimeout(()=>{
            resolve (products.find(prod =>prod.id === productId))
        },1000)
    })
}

export const getproductByCategory = (category) => {
    const filteredProducts = products.filter((product) => product.category === category);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredProducts);
      }, 1000);
    });
  };