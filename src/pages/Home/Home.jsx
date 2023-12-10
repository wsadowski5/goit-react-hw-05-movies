import { useState, useEffect } from 'react';
import { fetchTrending } from 'Api/Api';
import { NavLink, useLocation } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();


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
            <NavLink to={`/movies/${movie.id}`} key={movie.id} state={{from: location}}>
              <li >{movie.title || movie.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};
