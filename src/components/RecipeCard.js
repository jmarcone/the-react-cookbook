import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    const clickHandler = (recipe) => {
        navigate(`/recipe/${recipe.id}`)
    }

    console.log(recipe);

    return (
        <>
            <Card onClick={(e) => clickHandler(recipe)} >
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                        {recipe.categories?.map(category => <span className="badge bg-warning text-dark">{category}</span>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default RecipeCard;