import React from 'react';

const Cart = ({ cart,setCart }) => {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    let total = 0;
    for (const item in cart) {
      total += cart[item].price * cart[item].quantity;
    }
    return total;
  };

  const handleAdd = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...cart[id],
        quantity: (prevCart[id]?.quantity || 0) + 1,
      },
    }));
  };

  const handleDelete = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...cart[id],
        quantity: prevCart[id].quantity > 0 ? prevCart[id].quantity - 1 : 0,
      },
    }));
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
                    <p>{item.quantity} units</p>
                    <div className='btns d-flex justify-content-center'>
                      <button className="btn btn-light me-2"onClick={() => handleAdd(item.id)}>+</button>
                      <button className="btn btn-light ms-2"onClick={() => handleDelete(item.id)}>-</button>
                    </div>
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