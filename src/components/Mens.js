import React, { Component } from 'react';
import firebase from '../firebase.js';
import '../App.scss';
import Header from './Header';
import Product from './Product';
import Popup from './Popup';


class Mens extends Component {

  state = {
    allProducts: [],
    displayedProducts: [],
    showPopup: false,
    clickedProductName: "",
    clickedProductPrice: ""
  }



  //This recieved data from Product.js
  showPopup = (name, price, imgThumb, imgDetail, description) => {
    this.setState({
      clickedProductName: name,
      clickedProductPrice: price,
      clickedPoductImgThumb: imgThumb,
      clickedPoductImgDetail: imgDetail,
      clickedPoductDescription: description
    })


    if(!this.state.showPopup){
      this.setState({
        showPopup: true
      })
    }
    else {
      this.setState({
        showPopup: false
      })
    }
  }

  hidePopup = () => {
    this.setState({
      showPopup: false
    })
  }


  filterShoes = () => {
    let filtered = this.state.allProducts.filter(product => product.type === 'shoes')
    this.setState({
      displayedProducts: filtered
    })
  }

  filterCoat = () => {
    let filtered = this.state.allProducts.filter(product => product.type === 'coat')
    this.setState({
      displayedProducts: filtered
    })
  }

  filterShirts = () => {
    let filtered = this.state.allProducts.filter(product => product.type === 'shirt')
    this.setState({
      displayedProducts: filtered
    })
  }

  //To Do, make a reusable filter
  // filterProduct = (type) => {
  //   let filtered = this.state.displayedProducts.filter(product => product.type === type)
  //   this.setState({
  //     displayedProducts: filtered
  //   })
  // }



  removeFilters = () => {
    this.setState({
      displayedProducts: this.state.allProducts
    })
  }




  componentDidMount(){

    const productsDataRef = firebase.database().ref().child('products');

    productsDataRef.on('value', snap => console.log(snap.val()));

    productsDataRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];

      console.log(products)
      for (let product in products) {
        newState.push({
          id: product,
          type: products[product].type,
          gender: products[product].gender,
          name: products[product].name,
          price: products[product].price,
          description: products[product].description,
          imgThumb: products[product].imgThumb,
          imgDetail: products[product].imgDetail
        })
      }

      //Return only womens products
      newState = newState.filter(product => product.gender === 'mens')

      this.setState({
        allProducts: newState,
        displayedProducts: newState
      })
    })

  }




  render() {

    console.log("render")

    //Map over current list of products in state and produce a Product component with the data passed in as props
    //TO DO make key unique
    let listOfProducts = this.state.displayedProducts.map((product) =>
        <Product
          key={product}
          imgThumb={product.imgThumb}
          imgDetail={product.imgDetail}
          name={product.name}
          price={product.price}
          description={product.description}
          recieveProductData={this.showPopup}
        />
    )



    let popup;
    if (this.state.showPopup) {
      popup = <Popup
                name={this.state.clickedProductName}
                price={this.state.clickedProductPrice}
                imgThumb={this.state.clickedPoductImgThumb}
                imgDetail={this.state.clickedPoductImgDetail}
                description={this.state.clickedPoductDescription}
                handleClosePopup={this.hidePopup}
              />
    }

    return (
      <main className="product-page">
        <Header />
        <h2>Men's</h2>
        <button onClick={this.removeFilters} className="filter-button">All</button>
        <button onClick={this.filterShoes} className="filter-button">Shoes</button>
        <button onClick={this.filterCoat} className="filter-button">Coats</button>
        <button onClick={this.filterShirts} className="filter-button">Shirts</button>
        <ul className="list-of-products">
          {listOfProducts}
        </ul>
        {popup}
      </main>
    );
  }
}

export default Mens;
