import { useState, useEffect } from 'react';
import { fetchTrending } from 'components/Api/Api';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrending();
        setTrending(movies);
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trending.map((movie) => (
            <NavLink to={`/movies/${movie.id}`} key={movie.id}>
              <li >{movie.title || movie.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};
