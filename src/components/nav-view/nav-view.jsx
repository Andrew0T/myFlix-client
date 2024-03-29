import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavView = ({ user, onLoggedOut }) => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          myFlix App
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link}
                 to="/users/:Username"
                > 
                Update User Profile
                </Nav.Link>
                <Nav.Link as={Link}
                  to="/users/favorites"
                >
                Favorite Movies
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>
                Logout
                </Nav.Link>               
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
