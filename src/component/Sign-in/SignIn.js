import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EndPoint from "../../apis/EndPoint";

function SignIn() {
    const nevigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            if (state.email && state.password) {
                let response = await axios.post(EndPoint.LOG_IN, state)
                console.log(response)
                sessionStorage.setItem("Current-user", JSON.stringify(response.data.use))
                toast.success(response.data.message)
                nevigate("/")
            }


        } catch (err) {
            console.log(err)
            toast.error(err.response.data.error)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="card shadow p-4" style={{ width: "350px", marginLeft: "450px", marginTop: "100px" }}>
                <h3 className="text-center mb-3">Login</h3>
                <form onClick={handleSubmit}>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input onChange={(event) => setState({ ...state, email: event.target.value })} type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input onChange={(event) => setState({ ...state, password: event.target.value })} type="password" className="form-control" id="password" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>

                    <Link to="/Sign-up" className="text-center mt-2" style={{ marginLeft: "25px" }}>Create new account ?<b>Register</b></Link>
                </form>
            </div>
        </>
    );
}

export default SignIn;
