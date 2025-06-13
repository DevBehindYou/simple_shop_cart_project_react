import { Link } from 'react-router-dom';


const NavBar = ({ cartCount }) => {
  return (
    <div style={{
      padding: '15px 25px',
      background: '#4a4a4a',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ddd',
      borderRadius: '10px', 
      margin: '10px',              
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
    }}>
      <Link to="/" style={{ textDecoration: 'none', fontSize: '18px', color: 'white' }}>🛍️ Shop</Link>
      <Link to="/cart" style={{ textDecoration: 'none', fontSize: '18px', color: 'white' }}>🛒 Cart ({cartCount})</Link>
    </div>
  );
};

export default NavBar;