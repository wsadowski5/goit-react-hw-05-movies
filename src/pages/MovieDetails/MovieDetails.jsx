import { Outlet, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'components/Api/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieData(movieDetails);
        console.log(movieDetails);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {movieData.poster_path && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={`${movieData.original_title} poster`}
            width="200"
          />
        </div>
      )}

      <div>
        <h2>{movieData.title} </h2>
        <p>User Score: {movieData.vote_average}</p>
        <h3>Ovierviwe</h3>
        <p>{movieData.overview}</p>
        <h4>Geners</h4>
        <ul>
          {movieData.genres &&
            movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
<ul>
    
    <NavLink to="Cast"><li>Cast</li></NavLink>
      <NavLink to="Reviews"><li>Reviews</li></NavLink></ul>
      
      <Outlet />
    </div>
  );
};
