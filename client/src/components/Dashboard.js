import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link
          style={{ position: "absolute", bottom: "50px", right: "50px" }}
          to="/surveys/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
