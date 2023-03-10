import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const GenreView = ({ movies }) => {
  const { movie_Id } = useParams();
  const movie = movies.find((m) => m._id === movie_Id);
  
  return (
    <Card>
      <div>
        <img className="w-40" src={movie.ImagePath} />
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Genre.Description}</span>
      </div>
      <Link to={"/"} >
      <Button 
        className="back-button"
        style={{ cursor: "pointer" }}
        type="reset"
      >
        Back
      </Button>
      </Link>
    </Card>
  );
};
