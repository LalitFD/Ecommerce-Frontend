import Index from "./component/Index"
import { Routes, Route } from "react-router-dom";
import Viewmore from "./component/viewMore/Viewmore";
import SignIn from "./component/Sign-in/SignIn";
import SignUp from "./component/Sign-up/SignUp";
import BuyNow from "./component/buy-now/BuyNow";
import Auth from "./component/auth/Auth";
import Profile from "./component/profile/Profile";



function App() {
  return <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/view-more/:id" element={<Viewmore />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/profile" element={<Auth><Profile /></Auth>} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/buy-now/:id" element={<Auth><BuyNow /></Auth>} />
    </Routes>

  </>
}
export default App;
