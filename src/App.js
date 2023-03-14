import './App.css';
import RecipiesList from "./components/RecipiesList";
import { Container } from "react-bootstrap";
import './App.css';
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from './components/Header';
import New from './components/New';
import RecipeDetails from './components/RecipeDetails';
import Logout from './components/Logout';
import useContentful from './useContentful';


export const UserContext = createContext(null);

function App() {
    const [logUser, setLogUser] = useState(null);
    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(null);
    const { getCategories, getRecipes } = useContentful(logUser);

    useEffect(() => {
        logUser && getCategories().then(response => response && setCategories(response));
    }, [logUser]);

    useEffect(() => {
        logUser && getRecipes(title, category).then(response => response && setRecipes(response));
    }, [title, category, logUser])

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            setLogUser(user);
        } else {
            navigate("/login");
        }
    }, []);


    return (
        <UserContext.Provider value={logUser}>
            <Container className="p-3">
                {
                    <Routes>
                        <Route element={ <Header  />}>
                            <Route index element={logUser && <RecipiesList
                                categories={categories} category={category} setCategory={setCategory} title={title} setTitle={setTitle} recipes={recipes} />} />
                            <Route path='/recipe'>
                                <Route path=':id' element={logUser && <RecipeDetails />} />
                                <Route path='new' element={logUser && <New categories={categories}/>} />
                            </Route>

                            <Route path="/login" element={<Login setLogUser={setLogUser} />} />
                            <Route path="/logout" element={<Logout setLogUser={setLogUser} />} />
                        </Route>

                    </Routes>
                }
            </Container>
        </UserContext.Provider>


    );
}

export default App;
