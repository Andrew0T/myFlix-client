import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {MovieCard} from "../movie-card/movie-card";
import {MovieView} from "../movie-view/movie-view";
import {LoginView} from "../login-view/login-view";
import {SignupView} from "../signup-view/signup-view";
import {NavView} from "../nav-view/nav-view";
import {ProfileView} from "../profile-view/profile-view";
import {FavoriteMovies} from "../profile-view/favorite-movies";
import {DirectorView} from "../director-view/director-view";
import {GenreView} from "../genre-view/genre-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [genres, setGenres] = useState([]);

    useEffect(() => {
    if (!token) return;

    fetch("https://myflixdb-202302.herokuapp.com/movies", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
        // const moviesFromApi = data.map((movie) => {
        //   return {
        //     movie: movie._id,
        //     title: movie.Title,
        //     description: movie.Description,
        //     image: movie.ImagePath,
        //     genre: {
        //       name: movie.Genre.Name,
        //       description: movie.Genre.Description,
        //     },
        //     director: {
        //       name: movie.Director.Name,
        //       bio: movie.Director.Bio,
        //       birth: movie.Director.Birth,
        //       death: movie.Director.Death,
        //     },
        //   };
        // });
        setMovies(movies);
        setDirectors(movies/directors);
        setGenres(movies/genres);
      // })
      // .catch((error) => {
      //   console.log(error);
      });
  }, [token]);

  const addFavoriteMovie = () => {
    if (!token) return;

    fetch(`https://myflixdb-202302.herokuapp.com/users/:Username/movie`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            alert('Movie has been added to Favorite Movies');
            return response.json(), console.log(response);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        });
};

  const deleteMovie = () => {
    if (!token) return;
    fetch(`https://myflixdb-202302.herokuapp.com/users/:Username/movie`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
            alert('Movie has been deleted');
            return response.json(), console.log(response);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        });
};

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
                    <Col md={5}>
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
                    <Col md={5}>
                      <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                        }}/>
                    </Col>
                  )}
                </>
                }
              />              
              <Route
                path="/movies/:MovieId"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView
                       movies={movies}
                       keys={movies.id}
                       addFavoriteMovie={addFavoriteMovie}
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
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col 
                          className="mb-4" 
                          keys={movies._id}
                          md={3}
                          >
                          <MovieCard
                          movie={movie}
                          />
                        </Col>
                      ))}
                    </>
                  )}
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
                  <Col>
                      <ProfileView
                        user={user}
                        movies={movies}
                        keys={movies.id}
                      />
                  </Col>
                )}
                </>
                }
              />
              <Route
                path="/users/:Username/Movies"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>No such user!</Col>
                  ) : (
                    <Col md={8}>
                      <FavoriteMovies
                       token={token}
                       user={user}
                       keys={movies.id} 
                       movies={movies} 
                       addFavoriteMovie={addFavoriteMovie}
                       deleteMovie={deleteMovie}                    
                      />
                    </Col>
                  )}
                </>
                }
              />
              <Route
                path="/directors/:Name"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <DirectorView
                        token={token}
                        user={user}
                        keys={movies.id} 
                        movies={movies/directors}                       
                      />
                    </Col>
                  )}
                </>
                }
              />
              <Route
                path="/movies/genres:Name"
                element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <GenreView
                        token={token}
                        user={user}
                        keys={movies.id} 
                        movies={movies/genres}                       
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
