import React from "react";
import {Card, Col} from "react-bootstrap";

export default ({recipe, setSelected}) => {
    return (
        <Col>
            <Card onClick={(e) => setSelected(recipe) }>
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                        {recipe.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}