import React, { useState, useEffect } from 'react';

const Screen = ({ children, cart, setCart }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Filtramos los primeros 10 productos
        const firstTenProducts = data.slice(0, 10);
        setProducts(firstTenProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  

  return (
    <div>
    <div className='screen'>
    <div className="container-fluid">
    <div className="row internal-sections">
      <div className="col-lg-2 bg-light"> {/* Columna izquierda */}
        <h2>Productos</h2>
        <div className="container" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <div className="row">
          {products.map(product => (
            <div className="col-md-12 mb-12" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="col-lg-7 bg-secondary"> {/* Columna central */}
        <h2>Sección Central</h2>
        {children}
      </div>
      <div className="col-lg-3 bg-light"> {/* Columna derecha */}
        <h2>Sección Derecha</h2>
        <p>Contenido de la sección derecha...</p>
      </div>
    </div>
    <footer className="mt-5 py-3 bg-dark text-white text-center"> 
        <div className="row internal-sections">
            <div className="col-lg-4 bg-light">correos</div>
            <div className="col-lg-4 bg-light">telefonos</div>
            <div className="col-lg-4 bg-light">direcciones</div>
        </div>
    </footer>
  </div>
    </div>
    </div>
  )
}

export default Screen
