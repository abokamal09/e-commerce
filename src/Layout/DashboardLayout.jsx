import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">nested Routing</div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
