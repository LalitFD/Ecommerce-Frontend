import { use } from "react";
import EndPoint, { BASE_URL } from "../../apis/EndPoint";
import axios from "axios";
import Index from "../Index";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, isUserExist } from "../auth/Auth";
import Profile from "../profile/Profile";

function Header() {

    const [categoryList, setCategoryList] = useState([]);
    let user = getCurrentUser() ?? null;


    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const response = await axios.get(EndPoint.CATEGORY_LIST);
                setCategoryList(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategoryList();
    }, []);


    let nevigate = useNavigate();

    const handleLogin = () => {
        nevigate("/Sign-in");
    }

    const handleRegsiter = () => {
        nevigate("/Sign-up");
    }

    const handleProfile = () => {
        nevigate("/profile")
    }
    const handleLogOut = (event) => {
        sessionStorage.setItem("current-user", "");
        sessionStorage.clear();
        nevigate("/");
    }
    return <>
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">

                        <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>

                        <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>

                    </div>
                    <div className="top-link pe-2">

                        {!isUserExist() && <Link to="/Sign-in" className="btn btn-sm btn-secondary rounded-0 me-2" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={handleLogin}><i className="fas fa-sign-in-alt me-2"></i>Login</Link>}

                        {!isUserExist() && <Link to="/Sign-up" className="btn btn-sm btn-secondary rounded-0 me-2" data-bs-toggle="modal" data-bs-target="#registerModal" onClick={handleRegsiter}><i className="fas fa-user-plus me-2"></i>Register</Link>}


                        {isUserExist() && <Link className="btn btn-sm btn-secondary rounded-0 me-2" data-bs-toggle="modal" data-bs-target="#registerModal" onClick={handleLogOut}><i className="fas fa-user-plus me-2"></i>LogOut</Link>}

                    </div>
                </div>
            </div>
            <div className="container px-0">

                <nav className="navbar navbar-light bg-white navbar-expand-xl">

                    <a style={{ cursor: "pointer" }} onClick={() => nevigate("/")} className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>

                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>

                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="cart.html" className="dropdown-item">Cart</a>
                                    <a href="chackout.html" className="dropdown-item">Chackout</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">



                                    {categoryList.map((cate, Index) => {
                                        return <li key={Index}><a className="dropdown-item" href="#">{cate.name}</a></li>
                                    })}
                                    {/* <li><a className="dropdown-item" href="#">Fruits</a></li> */}


                                </ul>
                            </li>

                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                            <a href="#" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>3</span>
                            </a>
                            {isUserExist() && (
                                <img
                                    className="ml-2"
                                    src={BASE_URL + "/profile/" + user?.profile?.imageName}
                                    width="50px"
                                    height="50px"
                                    style={{ borderRadius: "50%", cursor: "pointer" }}
                                    onClick={handleProfile}
                                />
                            )}

                        </div>
                    </div>
                </nav>
            </div>
        </div >
    </>
}

export default Header;