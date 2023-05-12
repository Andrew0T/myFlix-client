import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movie_Id } = useParams();
  const movie = movies.find((movie) => movie._id === movie_Id);

  const token = localStorage.getItem("token");
  const user= JSON.parse(localStorage.getItem("user"));

  const addFavorite = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {        
            method: 'POST',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` 
            }
        })
        .then((response) => response.json())
        .then((resJSON) => {
            alert('Movie has been added to Favorite Movies');
            console.log(resJSON);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        })
    };

  const removeFavorite = () => {
    if (!token) {
      return;
    }
    fetch(`https://myflixdb-202302.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
            method: 'DELETE',
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((resJSON) => {
            alert('Movie has been deleted');
            console.log(resJSON);
        })
        .catch((error) => {
            alert('Something went wrong' + error);
        })
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
        <Button 
          className="add-button"
          variant="warning"
          onClick={addFavorite}
        > 
          Add to Favorites
        </Button>
        <Button 
          className="remove-button"
          variant="danger"
          onClick={removeFavorite}
        > 
          Delete from Favorites
        </Button>
    </div>        
  );
};
