import React, { Component } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";

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
        <Navbar
          productsCount={this.state.products.filter((p) => p.count > 0).length}
        />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />

            <Route
              path="/cart"
              Component={(props) => (
                <Cart
                  products={this.state.products}
                  incHandler={this.incHandler}
                  deleteHandler={this.deleteHandler}
                  resetHandler={this.resetHandler}
                  {...props}
                />
              )}
            />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
