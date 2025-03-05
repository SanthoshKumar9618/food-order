import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Contects/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu,setmenu]= useState("Home");

  const {getTotalCartAmount} =useContext(StoreContext)


  return (
    <div className='box'>
      
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
  <ul className='navbar-menu'>
  <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
   <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
   <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
   <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
  </ul>
  <div className='navbar-right' >
    <img src={assets.search_icon} />
    <div className='navbar-search-icon'>
     <Link to='/cart'> <img src={assets.basket_icon}/></Link>
     <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    <button onClick={()=>setShowLogin(true)}>Sing In</button>
  </div>


    </div>

    </div>
  )
}

export default Navbar

