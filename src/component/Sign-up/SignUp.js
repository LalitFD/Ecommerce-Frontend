import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import EndPoint from "../../apis/EndPoint";
import { Link } from "react-router-dom";



function SignUp() {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        contact: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            let response = await axios.post(EndPoint.SIGN_UP, state);
            toast.success(response.data.message);
            setState({
                name: "",
                email: "",
                password: "",
                contact: ""
            });
        }
        catch (err) {
            console.log(err);
            toast.error("Oops! something went wrong..");
        }
        setIsLoading(false);
    }
    return <>
        <ToastContainer />
        <div className="card shadow p-4" style={{ width: "350px", marginLeft: "450px", marginTop: "70px" }}>

            {isLoading ? <div className="spinner-border spinner-position"></div> : ""}
            <h3 className="text-center mb-3">Register</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Full Name</label>
                    <input defaultValue={state.name} onChange={(event) => setState({ ...state, name: event.target.value })} type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email email</label>
                    <input defaultValue={state.name} onChange={(event) => setState({ ...state, email: event.target.value })} type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input defaultValue={state.name} onChange={(event) => setState({ ...state, password: event.target.value })} type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>

                <div className="mb-3">
                    <label for="contact" className="form-label">Contact Number</label>
                    <input defaultValue={state.name} onChange={(event) => setState({ ...state, contact: event.target.value })} type="tel" className="form-control" id="contact" placeholder="Enter contact number" />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-2" >Register</button>
                <Link to="/sign-in" className="text-center mt-2" style={{marginLeft:"25px"}}>Already have an account ? <b>Login</b></Link>

            </form>
        </div>
    </>
}


export default SignUp;