import React from "react";
import { NavLink } from "react-router-dom";
import withRouter from "../HOC/withRouter";
import LoadingAnimate from "./Loading";

class Product extends React.Component {
  state = {
    data: [],
    filter: null,
    loading: false
  }
  // Hàm lol filter có dính dáng đến getproduct
  componentDidMount() {
    this.setState({ loading: true })
    const getProducts = async () => {
      try {
        const responsive = await fetch('https://fakestoreapi.com/products');
        if (!responsive.ok) {
          throw Error(responsive.statusText)
        }
        this.setState({
          data: await responsive.clone().json(),
          filter: await responsive.json(),
          loading: false
        })

      }
      catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }

  // Hàm hại não cần phải thông não gấp
  filterProducts = (value) => {
    const dataListOfProduct = this.state.filter;
    const updatedValueOfData = dataListOfProduct.filter(stringValue => stringValue.category === value)
    if (!value) {
      return (
        this.setState({ data: dataListOfProduct ? dataListOfProduct : [] })
      )
    }
    //console.log(updatedValueOfData);
    this.setState(
      { data: updatedValueOfData ? updatedValueOfData : [] }
    )

  }
  handleViewProductDetail = (product) => {
    this.props.router.navigate(`/products/${product.id}`)
  }
  render() {
    //console.log(this.state.data);
    const dataOfProducts = this.state.data

    const ShowProducts = () => {
      return (
        <>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={() => this.filterProducts()}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={() => this.filterProducts("men's clothing")}>Men's clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => this.filterProducts("women's clothing")}>Women's clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => this.filterProducts("jewelery")}>Jewelery</button>
            <button className="btn btn-outline-dark me-2" onClick={() => this.filterProducts("electronics")}>Electronics</button>
          </div>
          {dataOfProducts.map((product, index) => {
            return (
              <>
                <div className="col-md-3 mb-4" >
                  <div class="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} class="card-img-top" alt={product.title} height='280px' />
                    <div class="card-body">
                      <p class="card-title mb-0">{product.title.substring(0, 12)}...</p>
                      <p class="card-text fw-bold">${product.price}</p>
                    </div>
                    <a href="#" class="btn btn-outline-dark"
                      onClick={() => this.handleViewProductDetail(product)}
                    >BUY NOW</a>
                  </div>
                </div>
              </>
            )
          })}
        </>
      )
    }
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.loading ? <LoadingAnimate /> : <ShowProducts />}
        </div>
      </div>
    )
  }
}
export default withRouter(Product);