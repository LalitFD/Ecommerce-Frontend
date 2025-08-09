import Header from "../header/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/Footer";


function Viewmore() {
    const { id } = useParams();
    const neviagte = useNavigate();


    const [productList, setProductList] = useState([]);

    useEffect(() => {
        loadProducts();
    }, [id]);

    const loadProducts = async () => {
        try {
            console.log(EndPoint.FETCH_PRODUCT + `/${id}`);
            const response = await axios.get(EndPoint.FETCH_PRODUCT + `/${id}`);
            // console.log(response)
            // console.log("API Response:", response.data.message);
            setProductList([response.data.message]);
        }
        catch (err) {
            console.log(err)
        }
    }


    const handleBuyNow = () => {
        neviagte("/buy-now")
    };

    return <>
        <Header />
        <div className="container-fluid py-5 mt-5">
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    {productList[0] && (
                                        <div className="border rounded">
                                            <a href="#">
                                                <img src={productList[0].thumbnail} className="img-fluid rounded" alt="Image" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{productList[0]?.title}</h4>
                                    <p className="mb-3">Category: {productList[0]?.category}</p>
                                    <h5 className="fw-bold mb-3">{productList[0]?.price} RS.</h5>
                                    <div className="d-flex mb-4">
                                        {Array.from({ length: productList[0]?.rating || 0 }).map((_, i) => (
                                            <i key={i} className="fa fa-star text-secondary"></i>
                                        ))}
                                    </div>
                                    <p className="mb-4">{productList[0]?.description}</p>
                                    {/* <p className="mb-4">{productList[0]?.description}</p> */}
                                    <div className="input-group quantity mb-5" style={{ width: "100px" }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-outline-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>

                                    <label className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary" onClick={() => neviagte(`/buy-now/${productList[0]._id}`)} style={{ marginLeft: "40px" }}><i></i>Buy Now</label>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                                id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                                aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                                id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                                aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>{productList[0]?.description}</p>

                                            <div className="px-2">
                                                <div className="row g-4">
                                                    <div className="col-6">
                                                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{productList[0]?.weight}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">category</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{productList[0]?.category}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Stock</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{productList[0]?.stock}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Brand</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{productList[0]?.brand}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                            <div className="col-6">
                                                                <p className="mb-0">Min Weight</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p className="mb-0">{productList[0]?.weight}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: "100px", height: "100px" }} alt="" />
                                                <div className="">
                                                    <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>


}

export default Viewmore;