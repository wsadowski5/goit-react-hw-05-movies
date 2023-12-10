import { Outlet, useParams, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'Api/Api';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  const location = useLocation();
  const from = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieData(movieDetails);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <NavLink to={from}> Go back</NavLink>

      <MovieDescription movieData={movieData}> </MovieDescription>

      <ul>
        <NavLink to="Cast">
          <li>Cast</li>
        </NavLink>
        <NavLink to="Reviews">
          <li>Reviews</li>
        </NavLink>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
