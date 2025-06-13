import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemove = (indexToRemove) => {
    const updatedItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '15px' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '15px',
          backgroundColor: '#1e1e24'
        }}>
          {cartItems.map((item, index) => (
            <div key={index} style={{
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{item.name}</span>
              <span>
                ₹{item.price}
                <span
                  style={{
                    marginLeft: '12px',
                    cursor: 'pointer',
                    color: '#ff4d4f'
                  }}
                  onClick={() => handleRemove(index)}
                  title="Remove"
                >
                  🗑️
                </span>
              </span>
            </div>
          ))}
          <hr style={{ margin: '15px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
