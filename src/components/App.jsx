import React, { Component } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Cookie", count: 5 },
      { id: 2, name: "Sandwich", count: 2 },
      { id: 3, name: "Cola", count: 1 },
    ],
  };

  //Methods
  deleteHandler = (product) => {
    const newProducts = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: newProducts });
  };

  resetHandler = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };

  incHandler = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar products={this.state.products} />
        <main className="container">
          <Cart
            products={this.state.products}
            deleteHandler={this.deleteHandler}
            resetHandler={this.resetHandler}
            incHandler={this.incHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
