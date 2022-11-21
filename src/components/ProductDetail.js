import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import withRouter from "../HOC/withRouter";
import { addCart, deleteCart } from "../redux/actions";
import LoadingAnimate from "./Loading";
class ProductDetail extends React.Component {
  state = {
    products: [],
    loading: false
  }
  componentDidMount() {
    const id = this.props.router.params.id;
    this.setState({ loading: true })

    const getProducts = async () => {
      try {
        const responsive = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!responsive.ok) {
          throw Error(responsive.statusText)
        }
        this.setState({
          products: await responsive.json(),
          loading: false
        })
      }
      catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }
  handleBackProduct = () => {
    this.props.router.navigate('/products')
  }
  render() {
    //console.log(this.props.router);
    const products = this.state.products;
    //console.log(products.id);

    const ShowProducts = () => {
      return (
        <>
          <div className="col-md-6">
            <img src={products.image} alt={products.title} height='400px' width='400px' />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {products.category}
            </h4>
            <h1 className="display-5">{products.title}</h1>
            <p className="lead fw-bolder">
              Rating {products.rating && products.rating.rate}
            </p>
            <h3 className="display-6 fw-bold my-4">
              $ {products.price}
            </h3>
            <p className="lead">{products.description}</p>
            <button className="btn btn-outline-dark"
              onClick={
                () => (
                  this.props.addProduct(products)
                )
              }>
              Thêm vào giỏ hàng
            </button>
            {
              this.props.product.map(itemProduct => {
                return (
                  <div>
                    <p>
                      Số lượng: {itemProduct.quanlity}
                    </p>
                    <button className="px-3 me-2 mb-4 btn btn-outline-dark"
                      onClick={() => this.props.addProduct(itemProduct)}>+</button>
                    <button className="px-3 me-2 mb-4 btn btn-outline-dark"
                      onClick={() => this.props.deleteProduct(itemProduct)}>-</button>
                  </div>
                )

              })

            }
            <NavLink to='/cart' className="btn btn-dark me-2 px-3 py-2">
              Xem giỏ hàng
            </NavLink>
            <button className="btn btn-outline-dark px-3 ms-2" onClick={this.handleBackProduct}>
              Quay lại
            </button>
          </div>
        </>
      )
    }

    //console.log(this.props.router.params);
    //console.log('Cart dispath action >>>', this.props.addProduct)
    console.log(this.props.product);
    return (
      <div className="container py-5">
        <div className="row py-4">
          {this.state.loading ? <LoadingAnimate /> : <ShowProducts />}
        </div>
      </div>

    )
  }
}
const mapStateToProps = state => ({ product: state.cartReducer })
const mapDispatchToProps = dispatch => ({
  addProduct: (products) => dispatch(addCart(products)),
  deleteProduct: (product) => dispatch(deleteCart(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetail));

