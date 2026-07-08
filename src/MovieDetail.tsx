import { useParams } from "react-router";

function MovieDetail() {
  const { movieId } = useParams();
  return <div>{movieId}MovieDetail</div>;
}

export default MovieDetail;
