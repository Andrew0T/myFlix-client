import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const DirectorView = ({ movies }) => {
  const { movie_Id } = useParams();
  const movie = movies.find((m) => m._id === movie_Id);

  return (
    <Card>
      <div>
        <img className="w-40" src={movie.ImagePath} />
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Bio: </span>
        <span>{movie.Director.Bio}</span>
      </div>
      <div>
        <span>Born on: </span>
        <span>{movie.Director.Birth}</span>
      </div>
      <div>
        <span>Died on: </span>
        <span>{movie.Director.Death}</span>
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
