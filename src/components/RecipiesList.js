import React, { useEffect, useState} from "react";
import useContentful from "../useContentful";
import RecipeCard from "./RecipeCard";
import {Col, Container, Row} from "react-bootstrap";
import RecipeDetails from "./RecipeDetails";
import SearchRecipes from "./SearchRecipes";


export default () => {
    const [recipes, setRecipes] = useState([]);
    const {getRecipes} = useContentful();
    const [selected, setSelected] = useState(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        getRecipes(title,category).then(response => response && setRecipes(response));
    }, [title, category])

    return (
        <>
            <SearchRecipes setTitle={setTitle} setCategory={setCategory}/>
            <h3>All Recipies</h3>
            <Container fluid className="recipes-list">
                <Row>
                    <Col xs={selected ? 3 : 12}>
                        <Row xs={1} md={2}>
                            {
                                recipes.map(recipe => (
                                    <RecipeCard setSelected={setSelected} recipe={recipe}/>
                                ))
                            }
                        </Row>
                    </Col>
                    {selected && <RecipeDetails setSelected={setSelected} recipe={selected}/>}
                </Row>

            </Container>
        </>
    );
}