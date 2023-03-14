import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({setLogUser}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.setItem("user", null)
            setLogUser(null);
            navigate("/login");
        },1000)
    });
    return (
        <>
            <h1>Login out...</h1>
        </>
        );
}

export default Logout;