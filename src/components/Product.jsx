import React, { Component } from "react";

class Product extends Component {
  state = {
    name: this.props.product.name,
    count: this.props.product.count,
  };

  // Methods
  getClass() {
    return this.props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span>{this.props.product.name}</span>
        </div>
        <div className="col">
          <span className={this.getClass()}>{this.props.product.count}</span>
          <button
            onClick={() => this.props.incHandler(this.props.product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <span>
            <i
              onClick={() => this.props.deleteHandler(this.props.product)}
              className="fa-solid fa-trash m-2"
            ></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
