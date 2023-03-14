import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogUser }) => {
    const spaceRef = useRef();
    const accessTokenRef = useRef();
    const keepMeloggedRef = useRef();
    const navigate = useNavigate();

    const auth = async () => {
        try {
            const response = await fetch(` https://graphql.contentful.com/content/v1/spaces/${spaceRef.current.value}/explore?access_token=${accessTokenRef.current.value}`)

            return response.ok
        } catch (error) {
            console.error(error);
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        auth().then(
            ok => {
                const user = {
                    space: spaceRef.current.value,
                    accessToken: accessTokenRef.current.value,
                };
                ok && setLogUser(user)
                ok && keepMeloggedRef.current.checked && localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            });
    }

    return (
        <div className="container bg-light p-5">
            <div className="row">
                <div className="col">

                </div>
                <div className="col p-5 shadow-sm bg-body rounded">
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <label form="space" className="form-label">Space:</label>
                            <input className="form-control" ref={spaceRef} type="text" name="space" id="space" placeholder="Enter your Space" />
                        </div>
                        <div className="mb-3">
                            <label form="accessToken" className="form-label">Access Token:</label>
                            <input className="form-control" ref={accessTokenRef} type="text" name="accessToken" id="accessToken" placeholder="Enter your Access Token" />
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="keepMeLogged" ref={keepMeloggedRef} />
                            <label className="form-check-label" form="keepMeLogged" >
                                Keep me logged
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Go!</button>
                    </form>
                </div>
                <div className="col">

                </div>
            </div>
        </div>

    );
}

export default Login;