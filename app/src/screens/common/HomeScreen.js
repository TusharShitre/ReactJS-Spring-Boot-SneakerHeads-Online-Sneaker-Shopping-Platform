import "../../App.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import ApiCustomerService from "../../services/customer/ApiCustomerService";
import CarouselContainer from "./CarouselContainer";


import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/gallery3.jpg';
import gallery4 from '../../assets/images/gallery4.jpg';
import store1 from '../../assets/images/store1.jpg';
import store2 from '../../assets/images/store2.jpg';
import store3 from '../../assets/images/store3.jpg';


class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: [],
            products: [],
            message: "",
        }
        this.selectcategory = this.selectcategory.bind(this);
        this.reloadCategoryList = this.reloadCategoryList.bind(this);
        this.reloadProductsList = this.reloadProductsList.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);
        this.productDetails = this.productDetails.bind(this);
    }

    componentDidMount() {
        let size = JSON.parse(window.localStorage.getItem("cart_size"))
        if (size === null)
            JSON.stringify(window.localStorage.setItem("cart_size", 0));
        if (size !== null)
            JSON.stringify(window.localStorage.setItem("cart_size", size));

        let uId = JSON.parse(window.localStorage.getItem("user_id"))
        if (uId === null)
            JSON.stringify(window.localStorage.setItem("user_id", 9999));
        if (uId !== null)
            JSON.stringify(window.localStorage.setItem("user_id", uId));

        this.reloadCategoryList();
        this.reloadProductsList();
    }

    reloadCategoryList() {
        ApiCustomerService.fetchAllCategory()
            .then((res) => {
                this.setState({ category: res.data.result })
            });
    }

    reloadProductsList() {
        ApiCustomerService.fetchProductsForHomePage()
            .then((res) => {
                window.localStorage.setItem("msg", res.data.message)
                this.setState({ products: res.data.result })
            });
    }


    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    addProductToCart(product) {
        let productCartId = {
            userId: JSON.parse(window.localStorage.getItem("user_id")),
            productId: product.id
        };
        ApiCustomerService.addProductToCart(productCartId)
            .then((res) => {
                this.setState({ message: res.data.result })
            });
        alert("!!! Items Added to Cart !!!");
        JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1));
        window.localStorage.setItem("addressStatus", false)
        this.props.history.push('/home');
    }

    productDetails(product) {
        window.localStorage.setItem("product_id", product.id);
        this.props.history.push('/product-details');
    }


    render() {
        return (
            <div>
                <Navigation />


                <div>
                    <table>
                        <CarouselContainer />

                    </table>
                </div>



                <div className="container " style={{ width: "90%" }}>
                    <div class="row">
                        <div className="col-md-5"><hr /></div>
                        <div className="col-md-2"><h4>New Arrival</h4></div>
                        <div className="col-md-5"><hr /></div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="row row-center"> */}
                {/*                     
                    <NewArrival /> */}



                <div class="container">

                    <div class="row">
                        <div class="col-md-3">
                            <div class="thumbnail">
                                {/* <a href="/w3images/lights.jpg" target="_blank"> */}
                                    <img src={gallery1} alt="Lights" style={{ width: "100%" }} />

                                {/* </a> */}
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="thumbnail">
                                {/* <a href="/w3images/nature.jpg" target="_blank"> */}
                                    <img src={gallery2} alt="Nature" style={{ width: "100%" }} />

                                {/* </a> */}
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="thumbnail">
                                {/* <a href="/w3images/fjords.jpg" target="_blank"> */}
                                    <img src={gallery3} alt="Fjords" style={{ width: "100%" }} />

                                {/* </a> */}
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="thumbnail">
                                {/* <a href="/w3images/fjords.jpg" target="_blank"> */}
                                    <img src={gallery4} alt="Fjords" style={{ width: "100%" }} />

                                {/* </a> */}
                            </div>
                           
                        </div>
                            



                        {/* {this.state.products.map(product => 
                        <div className="product col-md-3" key={product.id}>
                            <div className="title"> 
                                <img src={'/images/'+product.productName+'.jpg'} className="d-block w-100 " alt="image" height="150px" width="50px" />
                                <a className="nav-link" onClick={() => { this.productDetails(product) }}><h5 className="nameColor">{product.productName}</h5></a>
                                <h5 className="nameColor">Rs. {product.finalPrice}</h5>
                                <h5 className="nameColor">Rs. <strike>{product.price}</strike><span className="nameColor1">&nbsp; {product.discount}% off</span></h5>                                
                                
                            </div>
                            <button
                            onClick={() => {
                            this.addProductToCart(product)
                            }}
                            className="btn btn-sm btn-success btn-add-to-cart">
                            Add To Cart
                        </button>
                        </div>
                        )}          */}
                        {/* <NewArrival /> */}

                    </div>
                </div>
                <div className="container " style={{ width: "90%" }}>
                    <div class="row">
                        <div className="col-md-5"><hr /></div>
                        <div className="col-md-2"><h4>Categories</h4></div>
                        <div className="col-md-5"><hr /></div>
                    </div>
                </div>



                <div className="container">
                    <div className="row row-center">
                        {this.state.category.map(cat =>
                            <div className="product col-md-3" key={cat.id}>
                                <div className="title">
                                    <Link to="/product-category">
                                        <a className="navbar-brand" name="shop" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}>
                                            <img src={'/images/' + cat.categoryName + '.jpg'} className="d-block w-100 " alt="image" height="200px" width="200px" />
                                        </a>
                                    </Link>

                                    <a className="nav-link" onClick={() => { this.selectcategory(cat.id, cat.categoryName) }}><h5 className="nameColor">{cat.categoryName}</h5></a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="container " style={{ width: "90%" }}>
                    <div class="row">
                        <div className="col-md-5"><hr /></div>
                        <div className="col-md-2"><h4>Stores</h4></div>
                        <div className="col-md-5"><hr /></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href='/store' target="_blank">
                                    <img src={store1} alt="Lights" style={{ width: "100%" }} />

                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="/store" target="_blank">
                                    <img src={store2} alt="Lights" style={{ width: "100%" }} />

                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <a href="/store" target="_blank">
                                    <img src={store3} alt="Lights" style={{ width: "100%" }} />

                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <br/>
                </div>

            </div>
        )
    }

}


export default HomeScreen