import React, { Component } from 'react';


class ProductList extends Component {

  state = {
    products: [
      {
        type: "Shoes",
        name: "Converse All Stars",
        price: 39.99
      },
      {
        type: "Shoes",
        name: "Nike Internationalists",
        price: 59.99
      },
      {
        type: "Coats",
        name: "Pea Coat",
        price: 99.99
      },
      {
        type: "Coats",
        name: "Anorak",
        price: 39.99,
      },
      {
        type: "Dresses",
        name: "A Line",
        price: 29.99
      },
      {
        type: "Dresses",
        name: "Leather with Peplum",
        price: 129.99
      }
    ]
  }

  filterShoes = () => {
    const filteredShoes = this.state.products.filter(products => products.type === "Shoes");
    console.log(filteredShoes)

    // for (let i = 0; filteredShoes.length; i++){
    //   let newState
    // }

    this.setState({
      filteredProducts: filteredShoes
    })


    // const displayShoes = filterShoes.map(product => (
    //   let filteredShoes = {
    //     name: product.name,
    //     price: product.price
    //   }
    // ))



  }


  render() {
    // const listOfProducts = this.products.map((product) =>

    let products = this.state.filteredProducts.map(product => (
      <li key={product}>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </li>
    ))


    return (
      <section className="product-list">
      <h2>This is the product list</h2>

      <ul>
        {products}
      </ul>

      <button onClick={this.filterShoes} >Shoes only</button>

      </section>

    );
  }
}

export default ProductList
