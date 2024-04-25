import React from 'react';

const Cart = ({ cart, addToCart }) => {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <div className="container">
        <h2>Carrito de Compras</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h4>Total: ${calculateTotal()}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cart;