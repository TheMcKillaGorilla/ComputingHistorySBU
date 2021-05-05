
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navigationbar extends Component {

  render() {

    return (
        <nav className="navbar navbar-expand-lg" style={{
          background: 'linear-gradient(45deg, #000000 30%, #990000 90%)'
      }}>
          <Link to="/" className="navbar-brand">Stony Brook University</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
              <Link to="/pioneers" className="nav-link">Pioneers</Link>
              </li>
              <li className="navbar-item">
              <Link to="/technology" className="nav-link">Technology</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}
