import React from 'react';
import LogoMYtinerary from '../media/MYtinerary-negro.png';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <Link to='/'>
        <div className="imagen-superior">
            <img src={LogoMYtinerary} alt="Website Logo" className="imagen-logo"/>
        </div>
        </Link>
      
    )}
  
  export default Nav;