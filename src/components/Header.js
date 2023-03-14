import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";


const Header = () => {
    const user = useContext(UserContext);

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/">Recipes</NavLink>
                            <NavLink className="nav-link" to="/recipe/new">Add Recipe!</NavLink>
                            <NavLink className="nav-link" to="/login">Change Credentials</NavLink>
                        </Nav>

                        <Nav>

                            {user && <Link className="nav-link" to="/logout">Logout from {user.space}</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default Header;