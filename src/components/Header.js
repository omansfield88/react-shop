import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {


  render() {
    return (
      <header>
        <h1><Link to="/">ONLINE SHOP</Link></h1>
        <nav>
          <Link to="/mens">Mens</Link>
          <Link to="/womens">Womens</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
