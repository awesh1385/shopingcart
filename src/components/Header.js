
import {Link ,NavLink} from 'react-router-dom';
import Logo from '../assets/logo.png'
import '../components/Header.css';
import { useCart } from '../context/CardContext';

export const Header = () => {
    const{cartList}=useCart();

  return (
   <header>
<Link to="/" className='logo'>
    <img src={Logo} alt="shoping logo" />
    <span>Shoping Cart</span>
</Link>
<nav className='navigation'>
    <NavLink to="/" className="link">Home</NavLink>
    <NavLink to="/cart" className="link">Cart</NavLink>
</nav>
<Link to="/cart" className='items'>
    <span>Cart:{cartList.length}</span>
</Link>
   </header>
  )
}
