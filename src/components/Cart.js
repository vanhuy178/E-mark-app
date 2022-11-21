import React from "react";
import { connect } from "react-redux";
import { addCart, deleteCart } from "../redux/actions";
import LoadingAnimate from "./Loading";
class Cart extends React.Component {
  render() {
    const products = this.props.products;
    //console.log(products);
    return (
      <>
        {products.map((productItem, index) => {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={productItem.image} height='200px' width='180px' />
                </div>
                <div className="col-md-4">
                  <h3>{productItem.title}</h3>
                  <p className="lead fw-bold">
                    {productItem.quanlity} X ${productItem.price} = $
                    {productItem.quanlity * productItem.price}
                  </p>
                  <button className="btn btn-outline-dark me-4"
                    onClick={() => this.props.deleteProduct(productItem)}>
                    -
                  </button>
                  <button className="btn btn-outline-dark"
                    onClick={() => this.props.addProduct(productItem)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }
}
const mapStateToProps = state => ({ products: state.cartReducer })
const mapDispatchToProps = dispatch => ({
  addProduct: (products) => dispatch(addCart(products)),
  deleteProduct: (product) => dispatch(deleteCart(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
