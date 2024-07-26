import React, { Component } from "react";
import Product from "../components/Product";

class Cart extends Component {
  render() {
    return (
      <>
        <h1>Shopping Cart</h1>
        <button
          onClick={this.props.resetHandler}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            deleteHandler={this.props.deleteHandler}
            incHandler={this.props.incHandler}
          />
        ))}
      </>
    );
  }
}

export default Cart;
