import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class Navbar extends React.Component {
  render() {
    //console.log('Render navbar: ', this.props.product);
    return (
      <nav className="navbar navbar-expand-lg bg-light py-3 bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to='/'>nguyenhuy-shop</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <a className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1">
                </i>Login
              </a>
              <a className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1">
                </i>Register
              </a>
              <NavLink to='/cart' className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1">
                </i>Cart ({this.props.product.length})
              </NavLink >
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = state => ({ product: state.cartReducer })
export default connect(mapStateToProps)(Navbar);
