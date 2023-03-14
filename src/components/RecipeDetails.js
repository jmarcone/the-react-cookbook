import React, { useContext, useEffect, useState } from "react";
import useContentful from "../useContentful";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { UserContext } from "../App";

const RecipeDetails = () => {
    const user = useContext(UserContext);

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const {getRecipeDetails} = useContentful(user);

    useEffect(() => {
        getRecipeDetails(id).then(response => response && setRecipe(response));
    }, [id])


    return (
        recipe && <Container fluid className="recipes-list bg-body recipe-details">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} />
            
            <ReactMarkdown>
                {recipe.content}
            </ReactMarkdown>
        </Container>
    );
}

export default RecipeDetails;