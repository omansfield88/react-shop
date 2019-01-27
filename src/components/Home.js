import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../App.scss';



class Home extends Component {


  render() {
    return (
      <div className="home-page">
        <Header />

        <div className="home-links">
          <Link to="/mens" className="home-link home-link--mens">
            
              <p>Shop Mens</p>

          </Link>
          <Link to="/womens" className="home-link home-link--womens">

              <p>Shop Womens</p>

          </Link>
        </div>

      </div>
    );
  }
}

export default Home;
