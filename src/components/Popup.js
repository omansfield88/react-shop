import React, { Component } from 'react';
import '../App.scss';


class Popup extends Component {



  render() {
    return (
      <div className="popup">
        <div className="popup__inner">
          <img src={this.props.imgDetail} alt={this.props.name}/>
          <div className="popup__text">
            <span className="popup__close" onClick={this.props.handleClosePopup}>CLOSE</span>
            <p className="popup__name">{this.props.name}</p>
            <p className="popup__price">£{this.props.price}</p>
            <p class="popup__desc">{this.props.description}</p>
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
