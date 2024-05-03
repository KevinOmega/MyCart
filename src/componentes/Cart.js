import React from 'react';
import { MdDelete } from "react-icons/md";


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

  const handleReduce = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: {
        ...cart[id],
        quantity: prevCart[id].quantity > 0 ? prevCart[id].quantity - 1 : 0,
      },
    }));
  };

  const handleRemove = (id) => {
    setCart((prevCart) => {
      const {[id]: _,...newCart} = prevCart
      return newCart
    })
  }

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
                  <td className='position-relative'>
                    <img src={item.image} alt={item.title} style={{width: 50}} />
                    <p>{item.quantity} units</p>
                    <div className='btns d-flex justify-content-center'>
                      <button className="btn btn-light me-2"onClick={() => handleAdd(item.id)}>+</button>
                      <button className="btn btn-light ms-2"onClick={() => handleReduce(item.id)}>-</button>
                    </div>
                    <i className='position-absolute top-0 end-0 text-danger me-2'
                    onClick={() => handleRemove(item.id)}
                    ><MdDelete/></i>
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