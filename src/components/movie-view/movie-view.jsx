import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./movie-view.scss";

export const MovieView = ({ user, token }) => {
  const movies = useSelector((state) => state.movies.list);
  const { movie_Id } = useParams();
  const movie = movies.find((movie) => movie._id === movie_Id);

  const addFavoriteMovie = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user}/movie/${movies._id}`, {        
            method: 'POST',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` 
            }
        })
        .then((response) => {
            alert('Movie has been added to Favorite Movies');
            return response.json(), console.log(response);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        });
    };

  return (
    <div>
      <div>
        <img className="w-50" src={movie.ImagePath} />
      </div>
      <div>
      <span>Title: </span>
      <span>{movie.Title}</span>
      </div>
      <div>
      <span>Description: </span>
      <span>{movie.Description}</span>
      </div>
      <div>
        <span>Year: </span>
        <span>{movie.Year}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <Link to={`/`}>
        <Button
          className="button-back"
          style={{ cursor: "pointer" }}
          type="reset"
        >
          Back
        </Button>
      </Link>
      <Link to={`/users/${user}/movie/${movies._id}`}>
            <Button 
              className="add-to-favorite"
              variant="warning"
              onClick={addFavoriteMovie}
            > 
            Add to Favorites
            </Button>
          </Link>
    </div>        
  );
};
