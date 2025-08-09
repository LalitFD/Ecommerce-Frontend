import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useRef, useState } from "react";
import EndPoint from "../../apis/EndPoint";
import axios from "axios";
import Footer from "../footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import { getCurrentUser } from "../auth/Auth";

function BuyNow() {
    const { id } = useParams();
    console.log("Here is your id :" + id)
    let billRef = useRef(null);


    const [state, setState] = useState({
        name: "",
        mobile: "",
        deliveryAddress: " ",
        qty: 1
    })

    const handleQty = (quantity) => {
        let totalBillAmount = productList[0]?.price * quantity;
        totalBillAmount = totalBillAmount + ((totalBillAmount * 18) / 100);
        billRef.current.innerText = totalBillAmount.toFixed(2);
        setState({ ...state, qty: quantity })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let user = getCurrentUser();
            console.log("Current User: ", user);

            let date = new Date();
            date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

            let orderDetails = {
                ...state,
                billAmount: parseFloat(billRef.current.innerText),
                userId: user._id,
                productId: productList[0]._id || productList[0].id,
                date
            };

            console.log("Order Details Sending: ", orderDetails);

            let response = await axios.post(EndPoint.CREATE_ORDER, orderDetails);
            toast.success(response.data.message);
        } catch (err) {
            console.log(err);
            toast.error("Please try after sometime.");
        }
    };


    const [productList, setProductList] = useState([]);

    useEffect(() => {
        loadProducts();
    }, [id]);

    const loadProducts = async () => {
        try {
            const response = await axios.get(`${EndPoint.FETCH_PRODUCT}/${id}`);
            setProductList([response.data.message]);
        }
        catch (err) {
            console.log(err)
        }
    }


    return <>
        <ToastContainer />
        <Header />

        <div className="container" style={{ marginTop: "200px" }}>
            <div className="row">
                <div className="col-md-4" style={{ height: "350px", boxShadow: "10px 10px 10px grey" }}>
                    <img src={productList[0]?.thumbnail} width="100%" height="350px" />
                </div>
                <div className="col-md-8 p-3" style={{ height: "350px", boxShadow: "10px 10px 10px grey" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="p-2 container">
                            <h4>{productList[0]?.title}</h4>
                            <p>Item price : <b className="text-success">{productList[0]?.price} Rs.</b></p>
                            <p>SGST [9%] : <b>{((productList[0]?.price * 9) / 100).toFixed(2)} Rs.</b></p>
                            <p>CGST [9%] : <b>{((productList[0]?.price * 9) / 100).toFixed(2)} Rs.</b></p>
                            <h3>Bill Amount : <b ref={billRef}>{(productList[0]?.price + ((productList[0]?.price * 18) / 100)).toFixed(2)} Rs.</b></h3>
                            <div className="row">

                                <div className="col-md-6">
                                    <input type="text" placeholder="Enter name" className="form-control" value={state.name}
                                        onChange={(e) => setState({ ...state, name: e.target.value })} />
                                </div>

                                <div className="col-md-6">
                                    <input type="text" placeholder="Enter mobile number" className="form-control" value={state.mobile}
                                        onChange={(e) => setState({ ...state, mobile: e.target.value })} />
                                </div>

                                <div className="col-md-6 mt-2">
                                    <input type="text" placeholder="Enter delivery address" className="form-control" value={state.deliveryAddress}
                                        onChange={(e) => setState({ ...state, deliveryAddress: e.target.value })}
                                    />
                                </div>

                                <div className="col-md-2 mt-2">
                                    Qty: <input onChange={(event) => handleQty(event.target.value)} type="number" min="1" defaultValue="1" style={{ width: "50px" }} />
                                </div>

                                <div className="col-md-4 mt-2">
                                    <button className="btn btn-primary">Place order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default BuyNow;