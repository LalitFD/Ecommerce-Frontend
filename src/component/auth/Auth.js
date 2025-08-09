import SignIn from "../Sign-in/SignIn"

export const isUserExist = () => {
    return !!sessionStorage.getItem("Current-user")
}

export const getCurrentUser = () => {
    let user = sessionStorage.getItem("Current-user");
    user = JSON.parse(user);
    return user;
}
function Auth({ children }) {
    if (isUserExist())
        return children
    return <SignIn />
}

export default Auth;