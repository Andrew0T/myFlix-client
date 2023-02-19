import React, { useState } from "react";
import { Button, Col, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";

export const FavoriteMovies = ({}) => {
  const [user, setUser] = useState();
  
  let favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id));

  const addMovie = () => {
    if (!token) return;

    fetch(`https://myflixdb-202302.herokuapp.com/movies`, {        
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
        }    )
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
  fetch(`https://myflixdb-202302.herokuapp.com/movies`, {
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
    <Row>
      {favoriteMovies.length === 0 ? (
        <Col>The list of favorite movies is empty</Col>
      ) : (
        <>
          <div className='text-start h2 mb-4'>List of favorite movies</div>
          {favoriteMovies.map((movie) => (
            <Col className='mb-5' key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                movieData={movie}
                user={user}
                updateUserOnFav={(user) => {
                  console.log('Update User called', user);
                  setUser(user);
                  localStorage.setItem('user', JSON.stringify(user));
                }}
              />
            </Col>
          ))}
        </>
      )}
      <Link>
        <Button 
          className="add-to-favorite"
          variant="warning"
          onClick={addMovie}
        > Add to Favorites
        </Button>
      </Link>
      <Link>
        <Button 
          className="remove-from-favorite"
          variant="warning"
          onClick={deleteMovie}
        > Remove from Favorites
        </Button>
      </Link>
    </Row>
  );
};