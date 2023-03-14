import React, {useContext} from "react";
import {Col} from "react-bootstrap";

export default ({recipe, setSelected}) => {

    const closeRecipeHandler = () => {
        setSelected(null);
    }
    return(
        <Col xs={9}  className="col p-5 shadow-sm bg-body rounded">
            <h3>{recipe.title}
                <button onClick={closeRecipeHandler} type="button" className="btn-close" aria-label="Close"></button>
            </h3>
            <p>
                {recipe.content}
            </p>
        </Col>
    );
}