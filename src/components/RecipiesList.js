import React from "react";
import RecipeCard from "./RecipeCard";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import SearchRecipes from "./SearchRecipes";

const RecipiesList = ({ categories, recipes, setTitle, setCategory, category }) => {

    return (
        <>
            <SearchRecipes setTitle={setTitle} setCategory={setCategory} category={category} categories={categories} />
            <h3>All Recipies</h3>
            <Container fluid className="recipes-list">
                
                    <Col xs={12} >
                        <Row xs={2} md={4} id="card-group">
                            {
                                recipes.map(
                                    function (recipe) {
                                        return (<RecipeCard key={recipe.id} recipe={recipe} />)
                                    }
                                )
                            }
                        </Row>
                    </Col>
                
            </Container>
        </>
    );
}

export default RecipiesList;