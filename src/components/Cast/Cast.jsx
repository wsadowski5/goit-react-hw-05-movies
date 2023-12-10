import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'Api/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});

  const defaultImg =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o filmach:', error);
      }
    };
    fetchCast();
  }, [movieId]);

  const castList = movieCast.cast
    ? movieCast.cast.map(actor => (
        <div key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : defaultImg
            }
            alt={`${actor.name}`}
            width="200"
          />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </div>
      ))
    : null;

  return <div>{castList}</div>;
};

export default Cast;
