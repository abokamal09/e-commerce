import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>
      <h5>
        Page Not Found, Back to <Link to="/">Home</Link> ?
      </h5>
    </div>
  );
};

export default Error;
