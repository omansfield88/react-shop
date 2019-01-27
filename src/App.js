import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter , Route } from 'react-router-dom';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Home from './components/Home';



class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/womens" component={Womens} />
              <Route path="/mens" component={Mens} />
            </div>
        </div>
    </BrowserRouter>

    );
  }
}

export default App;
