import React from 'react';

const Cart = ({ cart }) => {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    let total = 0;
    for (const item in cart) {
      total += cart[item].price * cart[item].quantity;
    }
    return total;
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
          {Object.keys(cart).map((itemId) => {
              const item = cart[itemId];
              return (
                <tr key={itemId}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <img src={item.image} alt={item.title} style={{width: 50}} />
                  </td>
                </tr>
              );
            })}
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