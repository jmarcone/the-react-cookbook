import React, {useState} from "react";
import useContentful from "../useContentful";

export default ({setLogUser}) => {
    const [space, setSpace] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const auth = async () => {
        try {
            const response = await fetch(` https://graphql.contentful.com/content/v1/spaces/${space}/explore?access_token=${accessToken}`)

            return response.ok
        } catch (error) {
            console.error(error);
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        auth().then(
            ok => ok && setLogUser({
                space: space,
                accessToken: accessToken
            })
        );
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
                            <input className="form-control" onChange={(e) => setSpace(e.target.value)} type="text" name="space" id="space" value={space}
                                   placeholder="Enter your Space"/>
                        </div>
                        <div className="mb-3">
                            <label form="accessToken" className="form-label">Access Token:</label>
                            <input className="form-control" onChange={(e) => setAccessToken(e.target.value)} type="text" name="accessToken" id="accessToken" value={accessToken}
                                   placeholder="Enter your Access Token"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Log in!</button>
                    </form>
                </div>
                <div className="col">

                </div>
            </div>
        </div>

    );
}