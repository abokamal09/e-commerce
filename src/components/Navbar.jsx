import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand" href="#app">
              Navbar
            </div>
            <span className="badge bg-primary">
              {this.props.products.filter((p) => p.count > 0).length}
            </span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
