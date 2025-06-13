import React from 'react';
import shoesImg from '../assets/shoes.jpg';
import watchImg from '../assets/watch.jpg';
import bagImg from '../assets/bag.jpg';
import walletImg from '../assets/wallet.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const products = [
  { id: 1, name: 'Shoes', price: 1500, image: shoesImg },
  { id: 2, name: 'Watch', price: 4100, image: watchImg },
  { id: 3, name: 'Bag', price: 1800, image: bagImg },
  { id: 4, name: 'Wallet', price: 1400, image: walletImg },
];

const Shop = ({ addToCart }) => {
  return (
    <>
    <ToastContainer position="bottom-center" autoClose={1000} />
    <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product) => (
        <div key={product.id} style={{
          border: '1px solid #3d3d42',
          borderRadius: '10px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          padding: '15px',
          width: '250px',
          textAlign: 'center',
          backgroundColor: '#2c2c2f'
        }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px' }} />
          <h2 style={{ marginTop: '5px'}}>{product.name}</h2>
          <h3 style={{ marginBottom: '10px', color: 'white' }}>₹{product.price}  &nbsp;
          <span style={{ fontSize: '15px', color: '#dcdcdf', fontWeight: '400', textDecoration: 'line-through'  }} >₹{product.price + (product.price/100*20)}</span>
          </h3>
          <button onClick={() => {
                addToCart(product);
                toast.success(`${product.name} added to cart!`);
              }} style={{ padding: '7px 25px', backgroundColor: '#3d3d43', color: '#fff', border: '1px solid #3d3d42', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
                </div>
          ))}
    </div>
    </>
  );
};

export default Shop;