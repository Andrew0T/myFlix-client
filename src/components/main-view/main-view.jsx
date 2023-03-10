import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MoviesList } from "../movies-list/movies-list";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavView } from "../nav-view/nav-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { setMovies } from "../../redux/reducers/movies";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

    useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://myflixdb-202302.herokuapp.com/movies", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
          dispatch(setMovies(movies));
       })
      .catch((error) => {
        console.log(error);
       });
   }, [token]);

    return (
      <BrowserRouter>
        <NavView
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />
        <Container>
          <Row className="justify-content-md-center">
            <Routes>
              <Route
                  path="/signup"
                  element={
                  <>
                    {user ? (
                      <Navigate to="/" />
                    ) : (
                      <Col md={4}>
                        <SignupView />
                      </Col>
                    )}
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    {user ? (
                      <Navigate to="/" />
                    ) : (
                      <Col md={4}>
                        <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                          }}
                        />
                      </Col>
                    )}
                  </>
                }
              />
              <Route 
            path="/movies/:movie_Id"
            element={
              <> 
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={6} >
                    <MovieView
                      movies={movies}            
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/movies/:movie_Id/Genre"
            element={
              <> 
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8} >
                    <GenreView
                      movies={movies}            
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route 
            path="/movies/:movie_Id/Director"
            element={
              <> 
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8} >
                    <DirectorView
                      movies={movies}            
                    />
                  </Col>
                )}
              </>
            }
          />
              <Route
                path="/"
                element={
                <>
                  {!user ?
                  <Navigate to="/login" replace />:
                  <MoviesList />
                  }
                </>
                }
              />
              <Route
                path="/users/:Username"
                element={
                <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : user.length === 0 ? (
                  <Col>No such user found!</Col>
                ) : (
                  <Col md={4}>
                      <ProfileView
                        token={token}
                        user={user}
                      />
                  </Col>
                )}
                </>
                }
              />
            </Routes>
          </Row>
      </Container>
    </BrowserRouter>
  );
};
