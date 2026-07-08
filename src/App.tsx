import { useEffect, useState } from "react";
import "./App.css";

type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
};

type MovieJson = {
  adult: boolean;
  backdrop_path: string | null;
  genle_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_avarage: number;
  vote_count: number;
};

function App() {
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = keyword
        ? `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ja&page=1`
        : "https://api.themoviedb.org/3/movie/popular?language=ja&page=1";

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      const data = await res.json();
      setMovieList(
        data.results.map((movie: MovieJson) => ({
          id: movie.id,
          original_title: movie.original_title,
          poster_path: movie.poster_path,
          overview: movie.overview,
        })),
      );
    };

    fetchMovieList();
  }, [keyword]);

  return (
    <div>
      <div>{keyword}</div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      {movieList
        .filter((movie) => movie.original_title.includes(keyword))
        .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
