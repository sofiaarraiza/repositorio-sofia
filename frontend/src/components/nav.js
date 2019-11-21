
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        
            <div>
                <nav>
                    <ul>
                        <Link to='/'>
                            <li className="logo"><a href="#">MYtinerary</a></li>
                        </Link>
                        <Link to='/create-account'>
                            <li className="menu"><a href="#">Create account</a></li>                            
                        </Link>
                        <Link to='/log-in'>
                            <li className="menu"><a href="#">Log in</a></li>
                        </Link>
                        <Link to='/cities-page'>
                            <li className="menu"><a href="#">Cities</a></li>
                            
                        </Link>
                    </ul>

                </nav>
            </div>
        

    )
}

export default Nav;