export type Props = {
  movie: Movie;
};

export type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
};

export type MovieJson = {
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

export type MovieDeatil = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
  year: number;
  rating: number;
  runtime: number;
  score: number;
  genres: string[];
};

export type MovieDetailJson = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: string;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
