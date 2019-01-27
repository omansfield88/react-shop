import React, { Component } from 'react';


class Product extends Component {

  // state = {
  //   name: this.props.name,
  //   price: this.props.price
  // }



  sendProductData = () => {
    this.props.recieveProductData(this.props.name, this.props.price, this.props.imgThumb, this.props.imgDetail, this.props.description)
  }

  render() {
    return (
      <li onClick={this.sendProductData}>
        <img src={this.props.imgThumb} alt={this.props.name}/>
        <p className="list-of-products__name">{this.props.name}</p>
        <p className="list-of-products__price">£{this.props.price}</p>
      </li>
    );
  }
}

export default Product;
