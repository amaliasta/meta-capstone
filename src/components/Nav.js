import React from 'react';
import classes from './Nav.module.css';

 const Nav = () => {
    return <nav className={classes.nav}>
        <ul className={classes.list}>
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Menu</button></li>
            <li><button>Reservations</button></li>
            <li><button>Order Online</button></li>
            <li><button>Login</button></li>
        </ul>
    </nav>
 }

 export default Nav;